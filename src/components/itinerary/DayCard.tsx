import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
} from 'react-native';
import { ItineraryDay } from '@/types/itinerary';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants/theme';
import { MaterialIcons } from '@expo/vector-icons';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface DayCardProps {
  day: ItineraryDay;
  isExpanded: boolean;
  onPress: (id: string) => void;
}

export function DayCard({ day, isExpanded, onPress }: DayCardProps) {
  const handlePress = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onPress(day.id);
  }, [day.id, onPress]);

  return (
    <TouchableOpacity
      style={[styles.container, isExpanded && styles.expandedContainer]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.dayInfo}>
          <Text style={styles.dayNumber}>Day {day.day}</Text>
          <Text style={styles.location}>
            <MaterialIcons name="location-on" size={16} color={colors.primary.main} />
            {' '}{day.location}
          </Text>
        </View>
        <MaterialIcons
          name={isExpanded ? 'expand-less' : 'expand-more'}
          size={24}
          color={colors.text.secondary}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.mainContent}>
          <Text style={styles.title}>{day.title}</Text>
          <Text style={styles.description} numberOfLines={isExpanded ? undefined : 2}>
            {day.description}
          </Text>
        </View>

        <Image
          source={{ uri: day.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {isExpanded && (
        <ScrollView style={styles.expandedContent}>
          {day.fullDescription && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Overview</Text>
              <Text style={styles.fullDescription}>{day.fullDescription}</Text>
            </View>
          )}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Daily Schedule</Text>
            <View style={styles.schedule}>
              {day.timeSlots.map((slot, index) => (
                <View key={index} style={styles.timeSlot}>
                  <View style={styles.timeContainer}>
                    <MaterialIcons name="schedule" size={16} color={colors.primary.main} />
                    <Text style={styles.time}>{slot.time}</Text>
                  </View>
                  <Text style={styles.activity}>{slot.activity}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Activities</Text>
            <View style={styles.activities}>
              {day.activities.map((activity, index) => (
                <View key={index} style={styles.activityTag}>
                  <MaterialIcons name="check-circle" size={16} color={colors.primary.main} />
                  <Text style={styles.activityText}>{activity}</Text>
                </View>
              ))}
            </View>
          </View>

          {day.coordinates && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Location</Text>
              <View style={styles.locationTag}>
                <MaterialIcons name="map" size={16} color={colors.primary.main} />
                <Text style={styles.coordinates}>
                  {day.coordinates.latitude.toFixed(4)}, {day.coordinates.longitude.toFixed(4)}
                </Text>
              </View>
            </View>
          )}
        </ScrollView>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ui.background,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    ...shadows.md,
  },
  expandedContainer: {
    ...shadows.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.ui.surface,
  },
  dayInfo: {
    flex: 1,
  },
  dayNumber: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.xl,
    color: colors.primary.main,
    marginBottom: spacing.xs,
  },
  location: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    padding: spacing.md,
  },
  mainContent: {
    flex: 1,
    marginRight: spacing.md,
  },
  title: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  description: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.normal * typography.sizes.md,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: borderRadius.md,
  },
  expandedContent: {
    maxHeight: 400,
  },
  section: {
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.ui.surface,
  },
  sectionTitle: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.lg,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  fullDescription: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.relaxed * typography.sizes.md,
  },
  schedule: {
    gap: spacing.sm,
  },
  timeSlot: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
  },
  time: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.primary.main,
    fontWeight: typography.weights.medium,
    marginLeft: spacing.xs,
  },
  activity: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    flex: 1,
  },
  activities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  activityTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary.light + '10',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  activityText: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.primary.main,
    marginLeft: spacing.xs,
  },
  locationTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary.light + '10',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  coordinates: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.primary.main,
    marginLeft: spacing.xs,
  },
}); 