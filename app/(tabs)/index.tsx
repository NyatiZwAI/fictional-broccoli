//Main screen shown only after user logs in
import React from 'react';
import { SafeAreaView, StatusBar, Platform, Text } from 'react-native';
import VoiceChat from '@/components/VoiceChat';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar
        barStyle={Platform.os === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor="#fff"
      />
      <VoiceChat />
    </SafeAreaView>
  );
}
