//React Context that exposes Firebase user session
// auth/AuthContext.tsx
import { 
  createContext, 
  useState, 
  useEffect, 
  useContext, 
  ReactNode,
  FC
} from "react";
import { 
  getAuth, 
  onAuthStateChanged, 
  User, 
  signOut,
  Auth
} from "firebase/auth";
import { auth } from "@/firebaseConfig";

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setToken(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const authInstance: Auth = auth;
    const unsubscribe = onAuthStateChanged(authInstance, async (currentUser) => {
      try {
        setUser(currentUser);
        if (currentUser) {
          const idToken = await currentUser.getIdToken();
          setToken(idToken);
        } else {
          setToken(null);
        }
      } catch (error) {
        console.error("Auth state change error:", error);
        setUser(null);
        setToken(null);
      } finally {
        setLoading(false);
      }
    });
    
    return () => unsubscribe();
  }, []);

  const value: AuthContextType = {
    user,
    token,
    loading,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
