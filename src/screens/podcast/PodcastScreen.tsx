import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Linking,
  Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants/theme';
import { MaterialIcons } from '@expo/vector-icons';

export function PodcastScreen() {
  const handleOpenYouTube = () => {
    Linking.openURL('https://www.youtube.com/channel/UCPD8Z8NFn3j1CTU0vGu6ujg');
  };

  const handleOpenWebsite = () => {
    Linking.openURL('https://www.harvestingwisdompodcast.com/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Safari Podcasts</Text>
          <Text style={styles.subtitle}>Listen to safari stories and insights from experts</Text>
        </View>

        {/* Harvesting Wisdom Podcast Section */}
        <View style={styles.podcastSection}>
          <View style={styles.podcastCard}>
            <View style={styles.podcastHeader}>
              <MaterialIcons name="mic" size={32} color={colors.primary.main} />
              <Text style={styles.podcastTitle}>Harvesting Wisdom</Text>
            </View>
            
            <Text style={styles.podcastDescription}>
              Join expert Michael McMahon on a journey through agriculture, policy, and sustainable innovation. 
              The #1 Podcast on Global Sustainable Agriculture featuring thought leaders, industry innovators, 
              and policy shapers sharing insights on sustainable farming and conservation.
            </Text>

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>119k</Text>
                <Text style={styles.statLabel}>Listeners</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>20.7k</Text>
                <Text style={styles.statLabel}>Subscribers</Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={[styles.button, styles.youtubeButton]} 
                onPress={handleOpenYouTube}
                activeOpacity={0.8}
              >
                <MaterialIcons name="play-circle-filled" size={24} color={colors.text.inverse} />
                <Text style={styles.buttonText}>Watch on YouTube</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={[styles.button, styles.websiteButton]} 
                onPress={handleOpenWebsite}
                activeOpacity={0.8}
              >
                <MaterialIcons name="web" size={24} color={colors.text.inverse} />
                <Text style={styles.buttonText}>Visit Website</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.featuredEpisode}>
              <Text style={styles.featuredTitle}>Latest Episode</Text>
              <Text style={styles.episodeTitle}>
                Episode 84: Sipping Sustainability: The Fair Trade Journey of Stephanie Vasquez
              </Text>
              <Text style={styles.episodeDescription}>
                Stephanie Vasquez, founder of Fair Trade Cafe and Empowering Latina Leaders in Arizona (ELLA), 
                shares her journey from middle school science teacher to pioneering entrepreneur and sustainability advocate.
              </Text>
            </View>
          </View>
        </View>

        {/* Additional Podcasts Section */}
        <View style={styles.additionalSection}>
          <Text style={styles.sectionTitle}>More Safari Content</Text>
          <Text style={styles.comingSoon}>
            More safari and conservation podcasts coming soon...
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  content: {
    padding: spacing.lg,
  },
  header: {
    marginBottom: spacing['2xl'],
    alignItems: 'center',
  },
  title: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['3xl'],
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  subtitle: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.lg,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  podcastSection: {
    marginBottom: spacing['2xl'],
  },
  podcastCard: {
    backgroundColor: colors.ui.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    ...shadows.md,
    elevation: 4,
  },
  podcastHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  podcastTitle: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.xl,
    color: colors.text.primary,
    marginLeft: spacing.sm,
    fontWeight: typography.weights.bold,
  },
  podcastDescription: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.relaxed * typography.sizes.md,
    marginBottom: spacing.lg,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.earth.sand,
    borderRadius: borderRadius.md,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['2xl'],
    color: colors.primary.main,
    fontWeight: typography.weights.bold,
  },
  statLabel: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    marginTop: spacing.xs,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    marginHorizontal: spacing.xs,
  },
  youtubeButton: {
    backgroundColor: '#FF0000',
  },
  websiteButton: {
    backgroundColor: colors.primary.main,
  },
  buttonText: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.md,
    color: colors.text.inverse,
    marginLeft: spacing.sm,
  },
  featuredEpisode: {
    backgroundColor: colors.earth.tan,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary.main,
  },
  featuredTitle: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.sm,
    color: colors.primary.main,
    marginBottom: spacing.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  episodeTitle: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.md,
    color: colors.text.primary,
    marginBottom: spacing.sm,
    fontWeight: typography.weights.semibold,
  },
  episodeDescription: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.normal * typography.sizes.sm,
  },
  additionalSection: {
    alignItems: 'center',
    paddingVertical: spacing['2xl'],
  },
  sectionTitle: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.lg,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  comingSoon: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
  },
}); 