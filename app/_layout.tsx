// app/_layout.tsx
import { Slot, Redirect, useSegments } from "expo-router";
import { AuthProvider, useAuth } from "@/auth/AuthContext";
import React from 'react';

function MainLayout() {
  const { user, loading } = useAuth();
  const segments = useSegments();

  const inAuthGroup = segments[0] === '(auth)';

  if (loading) return null;

  if (!user && !inAuthGroup) return <Redirect href="/(auth)/sign-in"/>;

  if (user && inAuthGroup) return <Redirect href="/(tabs)" />;

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  );
}
