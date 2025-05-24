import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { JournalEntry } from '../types/journal';

const JournalDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { entries, currentIndex } = route.params as {
    entries: JournalEntry[];
    currentIndex: number;
  };

  const entry = entries[currentIndex];

  const goTo = (dir: 'prev' | 'next') => {
    const newIndex = dir === 'prev' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < entries.length) {
      navigation.replace('JournalDetail', {
        entries,
        currentIndex: newIndex,
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.timestamp}>
          {new Date(entry.timestamp).toLocaleString()}
        </Text>
        <Text style={styles.mood}>Mood: {entry.mood}</Text>

        {entry.photoUri && (
          <Image source={{ uri: entry.photoUri }} style={styles.image} />
        )}

        <Text style={styles.content}>{entry.content}</Text>

        <View style={styles.arrows}>
          <TouchableOpacity
            onPress={() => goTo('prev')}
            disabled={currentIndex === 0}
          >
            <Text style={[styles.arrow, currentIndex === 0 && styles.disabled]}>
              ◀
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => goTo('next')}
            disabled={currentIndex === entries.length - 1}
          >
            <Text
              style={[
                styles.arrow,
                currentIndex === entries.length - 1 && styles.disabled,
              ]}
            >
              ▶
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JournalDetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    paddingBottom: 60,
  },
  backButton: {
    marginBottom: 12,
  },
  backText: {
    fontSize: 16,
    color: '#354222',
    fontWeight: '500',
  },
  timestamp: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  mood: {
    fontSize: 14,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    marginBottom: 40,
  },
  arrows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
  },
  arrow: {
    fontSize: 36,
    color: '#354222',
  },
  disabled: {
    color: '#ccc',
  },
}); 