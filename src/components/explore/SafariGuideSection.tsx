import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, typography, spacing } from '@/constants/theme';
import { AnimalCard } from '@/components/explore/AnimalCard';

const animals = [
  {
    id: 'lion',
    name: 'Lion',
    description: 'Lions are the only truly social big cats, living in prides that can include up to 30 individuals. They are apex predators and play a crucial role in maintaining the balance of their ecosystem.',
    imageUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&auto=format&fit=crop',
    conservationStatus: 'Vulnerable',
  },
  {
    id: 'elephant',
    name: 'African Elephant',
    description: 'African elephants are the largest land mammals on Earth. They are highly intelligent, social creatures that live in matriarchal herds and play a vital role in shaping their environment.',
    imageUrl: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=800&auto=format&fit=crop',
    conservationStatus: 'Endangered',
  },
  {
    id: 'giraffe',
    name: 'Giraffe',
    description: 'Giraffes are the tallest living terrestrial animals, with their long necks allowing them to reach leaves and buds in treetops that few other animals can access.',
    imageUrl: require('@/assets/images/giraffe.jpeg'),
    conservationStatus: 'Vulnerable',
  },
  {
    id: 'zebra',
    name: 'Zebra',
    description: 'Zebras are known for their distinctive black and white striped coats. Each zebra has a unique pattern of stripes, much like human fingerprints.',
    imageUrl: require('@/assets/images/zebrajpg.webp'),
    conservationStatus: 'Near Threatened',
  },
];

interface SafariGuideSectionProps {
  scrollable?: boolean;
}

export function SafariGuideSection({ scrollable = true }: SafariGuideSectionProps) {
  const content = (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Africa's Majestic Wildlife</Text>
      <Text style={styles.description}>
        Explore the incredible animals that roam the African savanna and learn about their habitats, behaviors, and conservation status.
      </Text>
      <View style={styles.cardsContainer}>
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            name={animal.name}
            description={animal.description}
            imageUrl={animal.imageUrl}
            conservationStatus={animal.conservationStatus}
          />
        ))}
      </View>
    </View>
  );

  if (scrollable) {
    return (
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {content}
      </ScrollView>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  container: {
    padding: spacing.md,
  },
  title: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['2xl'],
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  description: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.relaxed * typography.sizes.md,
    marginBottom: spacing.lg,
  },
  cardsContainer: {
    gap: spacing.md,
  },
}); 