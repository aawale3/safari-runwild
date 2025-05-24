import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@/constants/theme';
import { SafariGuideSection } from '@/components/explore/SafariGuideSection';

export function ExplorerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SafariGuideSection />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
}); 