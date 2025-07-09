// app/(tabs)/settings.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useAuth } from '@/auth/AuthContext';

export default function SettingsScreen() {
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      Alert.alert('Logout Failed', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Log Out" onPress={handleLogout} color="#FF3B30" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
