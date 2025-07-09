//React Context that exposes Firebase user session

import { createContext, useState, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged, User, signOut} from "firebase/auth";
import { auth } from "@/firebaseConfig";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setToken(user ? await user.getIdToken() : null);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, saveUser: setUser, saveToken: setToken, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
