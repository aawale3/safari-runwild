import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants/theme';

interface QuickAccessTileProps {
  emoji: string;
  title: string;
  subtitle: string;
  onPress: () => void;
}

export function QuickAccessTile({ emoji, title, subtitle, onPress }: QuickAccessTileProps) {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    backgroundColor: colors.ui.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    marginHorizontal: spacing.xs,
    ...shadows.sm,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary.light,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  emoji: {
    fontSize: 24,
  },
  title: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.md,
    color: colors.text.primary,
    fontWeight: typography.weights.semibold,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    textAlign: 'center',
  },
});
