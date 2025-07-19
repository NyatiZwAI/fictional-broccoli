import * as Speech from 'expo-speech';

export function speak(text: string) {
  Speech.speak(text, {
    language: 'en',
    rate: 1.0,
    pitch: 1.0,
  });
}
