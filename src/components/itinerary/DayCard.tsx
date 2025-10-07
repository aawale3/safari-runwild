import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
  Modal,
  Dimensions,
} from 'react-native';
import { ItineraryDay } from '@/types/itinerary';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { LocalImage } from '@/components/common/LocalImage';

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
  const [showPopup, setShowPopup] = useState(false);
  const { width, height } = Dimensions.get('window');

  const handlePress = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onPress(day.id);
  }, [day.id, onPress]);

  const handleOverviewPress = useCallback(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

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
          {!isExpanded && day.fullDescription && (
            <View style={styles.moreIndicator}>
              <Text style={styles.moreText}>Tap to read more</Text>
              <MaterialIcons name="keyboard-arrow-down" size={16} color={colors.primary.main} />
            </View>
          )}
        </View>

        <LocalImage
          source={day.imageUrl}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {isExpanded && (
        <ScrollView 
          style={styles.expandedContent} 
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Large Image Display */}
          <View style={styles.expandedImageContainer}>
            <LocalImage
              source={day.imageUrl}
              style={styles.expandedImage}
              resizeMode="cover"
            />
          </View>

          {day.fullDescription && (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Overview</Text>
                <MaterialIcons name="info-outline" size={20} color={colors.primary.main} />
              </View>
              <TouchableOpacity onPress={handleOverviewPress} activeOpacity={0.7}>
                <Text style={styles.fullDescription} numberOfLines={3}>
                  {day.fullDescription}
                </Text>
                <View style={styles.readMoreContainer}>
                  <Text style={styles.readMoreText}>Read Full Overview</Text>
                  <MaterialIcons name="open-in-new" size={16} color={colors.primary.main} />
                </View>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Daily Schedule</Text>
              <MaterialIcons name="schedule" size={20} color={colors.primary.main} />
            </View>
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
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Activities</Text>
              <MaterialIcons name="check-circle-outline" size={20} color={colors.primary.main} />
            </View>
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
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Location</Text>
                <MaterialIcons name="map" size={20} color={colors.primary.main} />
              </View>
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

      {/* Overview Popup Modal */}
      <Modal
        visible={showPopup}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={handleClosePopup}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Day {day.day}: {day.title}</Text>
            <TouchableOpacity onPress={handleClosePopup} style={styles.closeButton}>
              <MaterialIcons name="close" size={24} color={colors.text.primary} />
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={true}>
            <View style={styles.modalImageContainer}>
              <LocalImage
                source={day.imageUrl}
                style={styles.modalImage}
                resizeMode="cover"
              />
            </View>
            
            <View style={styles.modalSection}>
              <Text style={styles.modalSectionTitle}>Overview</Text>
              <Text style={styles.modalDescription}>{day.fullDescription}</Text>
            </View>
            
            <View style={styles.modalSection}>
              <Text style={styles.modalSectionTitle}>Location</Text>
              <Text style={styles.modalLocation}>
                <MaterialIcons name="location-on" size={16} color={colors.primary.main} />
                {' '}{day.location}
              </Text>
            </View>
            
            <View style={styles.modalSection}>
              <Text style={styles.modalSectionTitle}>Activities</Text>
              {day.activities.map((activity, index) => (
                <View key={index} style={styles.activityItem}>
                  <MaterialIcons name="check-circle" size={16} color={colors.ui.success} />
                  <Text style={styles.modalActivityText}>{activity}</Text>
                </View>
              ))}
            </View>
            
            <View style={styles.modalSection}>
              <Text style={styles.modalSectionTitle}>Daily Schedule</Text>
              {day.timeSlots.map((slot, index) => (
                <View key={index} style={styles.timeSlotItem}>
                  <Text style={styles.timeText}>{slot.time}</Text>
                  <Text style={styles.modalActivityText}>{slot.activity}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </Modal>
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
  moreIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
    paddingVertical: spacing.xs,
  },
  moreText: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.primary.main,
    marginRight: spacing.xs,
    fontStyle: 'italic',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: borderRadius.lg,
    ...shadows.sm,
  },
  expandedContent: {
    maxHeight: 600,
    paddingBottom: spacing.lg,
  },
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  expandedImageContainer: {
    padding: spacing.md,
    alignItems: 'center',
  },
  expandedImage: {
    width: '100%',
    height: 200,
    borderRadius: borderRadius.lg,
    ...shadows.md,
  },
  section: {
    padding: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.ui.surface,
    marginBottom: spacing.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.lg,
    color: colors.text.primary,
  },
  fullDescription: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.relaxed * typography.sizes.md,
  },
  readMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
    paddingVertical: spacing.xs,
  },
  readMoreText: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.primary.main,
    marginRight: spacing.xs,
    fontStyle: 'italic',
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
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.earth.sand,
    borderBottomWidth: 1,
    borderBottomColor: colors.earth.ochre,
  },
  modalTitle: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    fontFamily: typography.fonts.heading,
    color: colors.text.primary,
    flex: 1,
  },
  closeButton: {
    padding: spacing.sm,
    borderRadius: borderRadius.md,
    backgroundColor: colors.ui.surface,
    ...shadows.sm,
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  modalImageContainer: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  modalImage: {
    width: '100%',
    height: 250,
    borderRadius: borderRadius.lg,
    ...shadows.md,
  },
  modalSection: {
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.ui.surface,
  },
  modalSectionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    fontFamily: typography.fonts.heading,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  modalDescription: {
    fontSize: typography.sizes.md,
    fontFamily: typography.fonts.regular,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.relaxed * typography.sizes.md,
  },
  modalLocation: {
    fontSize: typography.sizes.md,
    fontFamily: typography.fonts.regular,
    color: colors.text.secondary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  modalActivityText: {
    fontSize: typography.sizes.md,
    fontFamily: typography.fonts.regular,
    color: colors.text.secondary,
    marginLeft: spacing.sm,
    flex: 1,
  },
  timeSlotItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
    paddingVertical: spacing.xs,
  },
  timeText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
    fontFamily: typography.fonts.heading,
    color: colors.primary.main,
    width: 80,
  },
}); 