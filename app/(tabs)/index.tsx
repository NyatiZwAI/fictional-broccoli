//Main screen shown only after user logs in
import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Warima</Text>
      <Text style={styles.subtitle}>Your decentralized asset-powered Stokvel.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, judtifyContent: 'center', alignItem: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#555' },
});
