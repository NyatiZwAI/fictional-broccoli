// app/+not-found.tsx
import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function NotFound() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text style={styles.message}>Page not found</Text>

      <Button title="Go Home" onPress={() => router.replace('/(tabs)/index')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 16,
  },
  message: {
    fontSize: 18,
    color: '#333',
    marginBottom: 24,
  },
});

