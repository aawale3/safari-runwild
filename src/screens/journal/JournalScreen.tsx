import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import Slider from "@react-native-community/slider";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JournalEntry } from '@/types/journal';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function JournalScreen() {
  const [mood, setMood] = useState(5);
  const [content, setContent] = useState("");
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const navigation = useNavigation();

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
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>New Journal Entry</Text>
        <Text style={styles.label}>Mood (0 = 😞, 10 = 😄): {mood}</Text>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={mood}
          onValueChange={setMood}
          minimumTrackTintColor="#6B8E23"
          maximumTrackTintColor="#ccc"
        />
        <Text style={styles.label}>Upload a photo from your safari:</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadText}>📸 Upload Photo</Text>
        </TouchableOpacity>
        {photoUri && (
          <Image source={{ uri: photoUri }} style={styles.imagePreview} />
        )}
        <Text style={styles.label}>Write your experience:</Text>
        <TextInput
          multiline
          value={content}
          onChangeText={setContent}
          style={styles.textArea}
          placeholder="Describe your day, animals spotted, how you felt..."
        />
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={handleSave}
          disabled={!content.trim() || !mood}
        >
          <Text style={styles.buttonText}>💾 Save Journal Entry</Text>
        </TouchableOpacity>
        <View style={{ height: 10 }} />
        <Button title="➕ New Journal" onPress={handleNew} color="#6B8E23" />
        {/* Old Journal Entries */}
        <Text style={[styles.title, { marginTop: 30, fontSize: 20 }]}>Previous Entries</Text>
        <ScrollView style={{ marginTop: 10, maxHeight: 400 }}>
          {entries.map((entry, index) => (
            <TouchableOpacity
              key={entry.id}
              onPress={() => navigation.navigate('JournalDetail', { entries, currentIndex: index })}
            >
              <View style={{ marginBottom: 16, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, backgroundColor: '#fafafa' }}>
                <Text style={{ fontWeight: 'bold' }}>{new Date(entry.timestamp).toLocaleString()}</Text>
                <Text>Mood: {entry.mood}</Text>
                {entry.photoUri && (
                  <Image source={{ uri: entry.photoUri }} style={{ height: 100, marginVertical: 5, borderRadius: 8 }} />
                )}
                <Text>{entry.content}</Text>
                <TouchableOpacity onPress={() => handleDelete(entry.id)}>
                  <Text style={{ color: 'red', marginTop: 5 }}>Delete</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#1a1a1a',
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
    fontWeight: "500",
  },
  uploadButton: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  uploadText: {
    color: "#333",
  },
  imagePreview: {
    marginTop: 10,
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  textArea: {
    height: 140,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#354222",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
  saveButton: {
    backgroundColor: "#6B8E23",
  },
}); 