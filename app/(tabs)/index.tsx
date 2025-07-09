//Main screen shown only after user logs in
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from "react-native";
import ProjectCard from '@/components/ProjectCard';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Warima</Text>
        <Text style={styles.subtitle}>Your decentralized asset-powered Stokvel.</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#555' },
});
