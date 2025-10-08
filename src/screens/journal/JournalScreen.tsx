import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Animated,
} from "react-native";
import Slider from "@react-native-community/slider";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JournalEntry } from '@/types/journal';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants/theme';
import { MaterialIcons } from '@expo/vector-icons';

export default function JournalScreen() {
  const [mood, setMood] = useState(5);
  const [content, setContent] = useState("");
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const loadEntries = async () => {
      const stored = await AsyncStorage.getItem('journalEntries');
      if (stored) setEntries(JSON.parse(stored));
    };
    loadEntries();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('journalEntries', JSON.stringify(entries));
  }, [entries]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      mood,
      photoUri: photoUri || undefined,
      content,
      timestamp: new Date().toISOString(),
    };
    setEntries([newEntry, ...entries]);
    setContent("");
    setMood(5);
    setPhotoUri(null);
  };

  const handleNew = () => {
    setMood(5);
    setContent("");
    setPhotoUri(null);
  };

  const handleDelete = (id: string) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>New Journal Entry</Text>
            <Text style={styles.subtitle}>Capture your safari memories</Text>
          </View>

          <View style={styles.moodSection}>
            <Text style={styles.sectionTitle}>How was your day?</Text>
            <View style={styles.moodContainer}>
              <Text style={styles.moodLabel}>Mood: {mood}</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={10}
                step={1}
                value={mood}
                onValueChange={setMood}
                minimumTrackTintColor={colors.primary.main}
                maximumTrackTintColor={colors.earth.ochre}
              />
              <View style={styles.moodEmojis}>
                <Text style={styles.moodEmoji}>😞</Text>
                <Text style={styles.moodEmoji}>😐</Text>
                <Text style={styles.moodEmoji}>😊</Text>
                <Text style={styles.moodEmoji}>😄</Text>
              </View>
            </View>
          </View>

          <View style={styles.photoSection}>
            <Text style={styles.sectionTitle}>Add a photo</Text>
            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
              <MaterialIcons name="camera-alt" size={24} color={colors.primary.main} />
              <Text style={styles.uploadText}>Upload Photo</Text>
            </TouchableOpacity>
            {photoUri && (
              <Image source={{ uri: photoUri }} style={styles.imagePreview} />
            )}
          </View>

          <View style={styles.contentSection}>
            <Text style={styles.sectionTitle}>Share your experience</Text>
            <TextInput
              multiline
              value={content}
              onChangeText={setContent}
              style={styles.textArea}
              placeholder="Describe your day, animals spotted, how you felt..."
              placeholderTextColor={colors.text.secondary}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}
              disabled={!content.trim() || !mood}
            >
              <MaterialIcons name="save" size={20} color={colors.text.inverse} />
              <Text style={styles.buttonText}>Save Entry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.newButton]} onPress={handleNew}>
              <MaterialIcons name="add" size={20} color={colors.primary.main} />
              <Text style={[styles.buttonText, { color: colors.primary.main }]}>New Entry</Text>
            </TouchableOpacity>
          </View>

          {entries.length > 0 && (
            <View style={styles.entriesSection}>
              <TouchableOpacity
                style={styles.entriesHeader}
                onPress={() => setIsExpanded(!isExpanded)}
              >
                <Text style={styles.sectionTitle}>Previous Entries ({entries.length})</Text>
                <MaterialIcons
                  name={isExpanded ? "expand-less" : "expand-more"}
                  size={24}
                  color={colors.primary.main}
                />
              </TouchableOpacity>
              {isExpanded && (
                <ScrollView style={styles.entriesList}>
                  {entries.map((entry, index) => (
                    <TouchableOpacity
                      key={entry.id}
                      style={styles.entryCard}
                      onPress={() => navigation.navigate('JournalDetail', { entries, currentIndex: index })}
                    >
                      <View style={styles.entryHeader}>
                        <Text style={styles.entryDate}>{new Date(entry.timestamp).toLocaleDateString()}</Text>
                        <TouchableOpacity onPress={() => handleDelete(entry.id)}>
                          <MaterialIcons name="delete" size={20} color={colors.ui.error} />
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.entryMood}>Mood: {entry.mood}</Text>
                      {entry.photoUri && (
                        <Image source={{ uri: entry.photoUri }} style={styles.entryImage} />
                      )}
                      <Text style={styles.entryContent} numberOfLines={3}>{entry.content}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </View>
          )}
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: spacing.lg,
    paddingBottom: spacing['2xl'],
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing['2xl'],
  },
  title: {
    fontSize: typography.sizes['2xl'],
    fontWeight: typography.weights.bold,
    fontFamily: typography.fonts.heading,
    color: colors.text.primary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  moodSection: {
    marginBottom: spacing['2xl'],
  },
  sectionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  moodContainer: {
    backgroundColor: colors.ui.surface,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    ...shadows.sm,
  },
  moodLabel: {
    fontSize: typography.sizes.md,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  moodEmojis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
  },
  moodEmoji: {
    fontSize: 20,
  },
  photoSection: {
    marginBottom: spacing['2xl'],
  },
  uploadButton: {
    backgroundColor: colors.ui.surface,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    ...shadows.sm,
  },
  uploadText: {
    color: colors.text.primary,
    fontSize: typography.sizes.md,
    marginLeft: spacing.sm,
  },
  imagePreview: {
    marginTop: spacing.md,
    width: '100%',
    height: 200,
    borderRadius: borderRadius.lg,
  },
  contentSection: {
    marginBottom: spacing['2xl'],
  },
  textArea: {
    height: 140,
    borderColor: colors.earth.ochre,
    borderWidth: 1,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    textAlignVertical: 'top',
    backgroundColor: colors.ui.surface,
    fontSize: typography.sizes.md,
    color: colors.text.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing['2xl'],
  },
  button: {
    flex: 1,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: spacing.xs,
    ...shadows.sm,
  },
  buttonText: {
    color: colors.text.inverse,
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    marginLeft: spacing.xs,
  },
  saveButton: {
    backgroundColor: colors.primary.main,
  },
  newButton: {
    backgroundColor: colors.ui.surface,
    borderWidth: 1,
    borderColor: colors.primary.main,
  },
  entriesSection: {
    marginTop: spacing.lg,
  },
  entriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  entriesList: {
    maxHeight: 400,
  },
  entryCard: {
    backgroundColor: colors.ui.surface,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  entryDate: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    fontWeight: typography.weights.semibold,
  },
  entryMood: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  },
  entryImage: {
    height: 100,
    borderRadius: borderRadius.md,
    marginVertical: spacing.xs,
  },
  entryContent: {
    fontSize: typography.sizes.md,
    color: colors.text.primary,
    lineHeight: typography.lineHeights.normal * typography.sizes.md,
  },
}); 