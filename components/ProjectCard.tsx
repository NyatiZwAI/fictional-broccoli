//component/projectCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProjectCard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Project Name</Text>
      </View>

    <View style={styles.content}>
    <View style={styles.actorCircle}>
      <Text style={styles.actorText}>👤{'\n'}>Actor</Text>
    </View>
      <TouchableOpacity style={styles.voteButton}>
        <Text style={styles.voteText}>vote / join</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#fff',
    height: 250,
    width: '100%',
    marginVertical: 10,
  },
  header: {
    backgroundColor: '#eee',
    padding: 8,
    alignItems: 'center',
    boderRadius: 8,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  context: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voteButton: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 4,
  },
  voteText: {
    fontSize: 14,
  },
  actorCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actorText: {
    textAlign: 'center',
    fontSize: 14,
  },
});
