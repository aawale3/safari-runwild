import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { colors, spacing, typography, borderRadius, shadows } from '@/constants/theme';

type AboutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'About'>;

export const AboutScreen: React.FC = () => {
  const navigation = useNavigation<AboutScreenNavigationProp>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={handleGoBack}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>About Your Expedition</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.descriptionText}>
            At Urban Farming Education, Harvesting Wisdom, and Run Wild Adventures, we believe that true understanding comes through hands-on experience — and that stewardship begins when we close the gap between learning and action. Together, we invite you on a remarkable journey into the living heart of Southern Africa, with Zimbabwe as our guidepost to resilience, community, and conservation.
            {'\n\n'}
            This is more than an expedition; it is a commitment to sustainable development, environmental education, and cultural exchange. Your participation supports the Joint Fund for Exploration and Conservation, investing directly in grassroots research, community capacity-building, and conservation projects across Southern Africa.
            {'\n\n'}
            As Zimbabwean conservationist Clive Stockil once said, "Conservation without communities is merely a conversation." Throughout this journey, you will not only witness Africa's wild beauty — you will become part of the story, working alongside the people who call these extraordinary landscapes home.
            {'\n\n'}
            Zimbabwe offers some of the most awe-inspiring biodiversity and cultural heritage on Earth. From the thundering majesty of Victoria Falls to the untamed savannahs teeming with life, you will encounter a landscape that demands reverence and action. As wilderness thinker Ian McCallum reminds us, "We are not protecting nature. We are nature protecting itself." Your steps here leave an imprint not just on the land, but on the future.
            {'\n\n'}
            This guide will equip you with everything you need to prepare for your expedition—travel details, itinerary highlights, and insights into the transformative experiences that await. We are honored you have chosen to walk this path with us, where education becomes empowerment and action becomes legacy.
            {'\n\n'}
            Welcome to your journey of impact.
          </Text>

          <View style={styles.partnersSection}>
            <Text style={styles.partnersTitle}>Our Partners</Text>
            <View style={styles.partnerItem}>
              <Text style={styles.partnerName}>Urban Farming Education</Text>
              <Text style={styles.partnerDescription}>
                Dedicated to sustainable agriculture and community development through hands-on education and practical application.
              </Text>
            </View>
            <View style={styles.partnerItem}>
              <Text style={styles.partnerName}>Harvesting Wisdom</Text>
              <Text style={styles.partnerDescription}>
                Committed to environmental stewardship and conservation education, bridging traditional knowledge with modern practices.
              </Text>
            </View>
            <View style={styles.partnerItem}>
              <Text style={styles.partnerName}>Run Wild Adventures</Text>
              <Text style={styles.partnerDescription}>
                Specializing in authentic safari experiences that promote wildlife conservation and cultural exchange in Southern Africa.
              </Text>
            </View>
          </View>

          <View style={styles.missionSection}>
            <Text style={styles.missionTitle}>Our Mission</Text>
            <Text style={styles.missionText}>
              To create transformative experiences that connect people with nature, foster environmental stewardship, and support local communities through sustainable tourism and conservation initiatives.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.earth.sand,
    borderBottomWidth: 1,
    borderBottomColor: colors.earth.ochre,
  },
  backButton: {
    backgroundColor: colors.primary.main,
    borderRadius: borderRadius.full,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    ...shadows.md,
    elevation: 4,
  },
  backButtonText: {
    color: colors.text.inverse,
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
  },
  title: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    fontFamily: typography.fonts.heading,
    color: colors.text.primary,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: spacing.lg,
  },
  descriptionText: {
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.relaxed * typography.sizes.md,
    fontFamily: typography.fonts.regular,
    marginBottom: spacing.xl,
  },
  partnersSection: {
    backgroundColor: colors.earth.sand,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    ...shadows.md,
    elevation: 4,
  },
  partnersTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    fontFamily: typography.fonts.heading,
    color: colors.text.primary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
  partnerItem: {
    marginBottom: spacing.lg,
  },
  partnerName: {
    fontSize: typography.sizes.md,
    fontWeight: typography.weights.semibold,
    fontFamily: typography.fonts.heading,
    color: colors.primary.main,
    marginBottom: spacing.xs,
  },
  partnerDescription: {
    fontSize: typography.sizes.sm,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.normal * typography.sizes.sm,
    fontFamily: typography.fonts.regular,
  },
  missionSection: {
    backgroundColor: colors.ui.background,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.earth.tan,
    ...shadows.sm,
    elevation: 2,
  },
  missionTitle: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    fontFamily: typography.fonts.heading,
    color: colors.text.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  missionText: {
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.normal * typography.sizes.md,
    fontFamily: typography.fonts.regular,
    textAlign: 'center',
  },
});

export default AboutScreen;
