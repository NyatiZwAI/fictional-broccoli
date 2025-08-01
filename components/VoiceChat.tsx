import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView
  } from 'react-native';
import { getAIResponse } from '@/lib/openai';
import { speak } from '@/lib/speech';
import useVoiceInput from '@/hooks/useVoiceInput';
import { MaterialIcons } from '@expo/vector-icons';

export default function VoiceChat() {
  const { text, start, stop, isListening } = useVoiceInput();
  const [aiReply, setReply] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAI = async () => {
    if (!text) return;

    try {
      setIsProcessing(true);
      const reply = await getAIResponse(text);
      setReply(reply);
      speak(reply);
    } catch (error) {
      console.error('AI Error:', error);
      setReply("Sorry, I encountered an error. Please try again");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Warima</Text>

      {/* Conversation Area */}
      <ScrollView style={styles.chatContainer}>
        {text ? (
          <View style={styles.userBubble}>
            <Text style={styles.bubbleText}>You: {text}</Text>
          </View>
        ) : null}

        {isProcessing ? (
          <View style={styles.aiBubble}>
            <ActivityIndicator size="small" color="#4A6572" />
          </View>
        ) : aiReply ? (
          <View style={styles.aiBubble}>
            <Text style={styles.bubbleText}>Warima say's: {aiReply}</Text>
          </View>
        ) : null}
      </ScrollView>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={[
            styles.mainButton,
            isListening && styles.listeningButton
          ]}
          onPress={isListening ? stop : start}
          disable={isProcessing}
        >
          <MaterialIcons
            name={isListening ? 'mic-off' : 'keyboard-voice'}
            size={28}
            color="white"
          />
          <Text style={styles.buttonText}>
            {isListening ? 'Stop Listening' : 'Start Talking'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.actionButton,
            (!text || isProcessing) && styles.disabledButton
          ]}
          onPress={handleAI}
          disabled={!text || isProcessing}
        >
          {isProcessing ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}> Ask Warima</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4D571D',
    textAlign: 'center',
    marginVertical: 15,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 20,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: 15,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    marginBottom: 10,
    maxWidth: '80%',
  },
  aiBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    marginBottom: 10,
    maxWidth: '80%',
  },
  bubbleText: {
    fontSize: 16,
    color: '#333',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  mainButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6A5026',
    padding: 15,
    borderRadius: 30,
    gap: 10,
  },
  listeningButton: {
    backgroundColor: '#E63946',
  },
  actionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4D571D',
    padding: 15,
    borderRadius: 30,
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
