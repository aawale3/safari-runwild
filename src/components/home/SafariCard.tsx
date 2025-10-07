import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LocalImage } from '@/components/common/LocalImage';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants/theme';
import { FeaturedSafari } from '@/data/featuredSafaris';

interface SafariCardProps {
  safari: FeaturedSafari;
  onPress: () => void;
}

export function SafariCard({ safari, onPress }: SafariCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <LocalImage
        source={safari.image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.location}>{safari.location}</Text>
          <Text style={styles.title}>{safari.title}</Text>
          <Text style={styles.description}>{safari.description}</Text>
          <View style={styles.highlights}>
            {safari.highlights.slice(0, 2).map((highlight, index) => (
              <View key={index} style={styles.highlightTag}>
                <Text style={styles.highlightText}>{highlight}</Text>
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.exploreButton} onPress={onPress}>
          <Text style={styles.exploreButtonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 200,
    borderRadius: borderRadius.lg,
    marginRight: spacing.md,
    overflow: 'hidden',
    ...shadows.md,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-between',
    padding: spacing.md,
  },
  content: {
    flex: 1,
  },
  location: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.text.inverse,
    opacity: 0.9,
    marginBottom: spacing.xs,
  },
  title: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.lg,
    color: colors.text.inverse,
    fontWeight: typography.weights.bold,
    marginBottom: spacing.xs,
  },
  description: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.text.inverse,
    opacity: 0.9,
    marginBottom: spacing.sm,
  },
  highlights: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  highlightTag: {
    backgroundColor: colors.primary.main,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  highlightText: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.xs,
    color: colors.text.inverse,
    fontWeight: typography.weights.medium,
  },
  exploreButton: {
    backgroundColor: colors.text.inverse,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    alignSelf: 'flex-start',
  },
  exploreButtonText: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.primary.main,
    fontWeight: typography.weights.semibold,
  },
});
