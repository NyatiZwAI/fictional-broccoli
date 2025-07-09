// app/(tabs)/profile.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useAuth } from '@/auth/AuthContext';

export default function ProfileScreen() {
  const { user } = useAuth();

  const handleWalletConnect = () => {
    //Placeholder for walletconnect or metamask mobile
    alert('Wallet connection coming soon...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile & Dashboard</Text>

      {user && (
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: `https://ui-avatars.com/api/?name=${user.email?.charAt(0).toUpperCase() || 'U'}&background=007AFF&color=fff`,
            }}
            style={styles.avatar}
          />
          <Text style={styles.email}>{user.email}</Text>
        </View>
      )}

      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}> Stats </Text>
        <Text style={styles.stat}>Total Stokvel Value: R 250.00 </Text>
        <Text style={styles.stat}>Members: 4 </Text>
        <Text style={styles.stat}>Livestock: 6 </Text>
        <Text style={styles.stat}>Land Parcels: 4 </Text>
        <Text style={styles.stat}>Coming Projects: Sow Delivery </Text>
      </View>

      <View style={styles.walletConnect}>
        <Button title="🔗 Connect Wallet" onPress={handleWalletConnect} color="#007AFF" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
  avatarContainer: { alignItems: 'center', marginBottom: 20 },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  email: { fontSize: 16, color: '#333' },
  statsContainer: { backgroundColor: '#f2f2f2', padding: 16, borderRadius: 12, marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  stat: { fontSize: 16, marginBottom: 4 },
  walletConnect: { marginTop: 10 },
});
