import { Tabs, Redirect } from "expo-router";
import { useAuth } from "@/auth/AuthContext";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TabsLayout() {
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <Redirect href="/(auth)/sign-in" />;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons = {
            index: 'home-outline',
            profile: 'person-outline',
            settings: 'settings-outline',
          };
          return <Ionicons name={icons[route.name] || 'help'} size={size} color={color} />
        },
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
