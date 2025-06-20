import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  useWindowDimensions,
  Image,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants/theme';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

export function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Your Journey Starts Here</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Row of Images */}
        <View style={styles.imageRow}>
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/UFE_Logo.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/Run_Wild_Safari.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/Harvesting_Wisdom.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Welcome Text */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome to the African Expedition</Text>
          <Text style={styles.welcomeSubtitle}>
            Discover the wonders of Africa through an immersive journey of conservation and education
          </Text>
        </View>

        {/* Start Journey Button */}
        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('Main', { screen: 'Itinerary' })}
          >
            <Text style={styles.startButtonText}>Start Your Expedition Journey</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Safari Image */}
        <View style={styles.featuredImageContainer}>
          <Image
            source={require('@/assets/images/Run_Wild_Safari.png')}
            style={styles.featuredImage}
            resizeMode="cover"
          />
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
  appBar: {
    backgroundColor: colors.primary.main,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    ...shadows.md,
  },
  appBarTitle: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['2xl'],
    color: colors.text.inverse,
    fontWeight: typography.weights.bold,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  imageRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
    gap: spacing.sm,
  },
  imageContainer: {
    flex: 1,
    height: 130,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    ...shadows.sm,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  welcomeSection: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes['2xl'],
    color: colors.earth.brown,
    textAlign: 'center',
    marginBottom: spacing.md,
    fontWeight: typography.weights.bold,
  },
  welcomeSubtitle: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.lg,
    color: colors.text.secondary,
    textAlign: 'center',
    lineHeight: typography.lineHeights.relaxed * typography.sizes.lg,
  },
  buttonSection: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  startButton: {
    backgroundColor: colors.primary.main,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    ...shadows.md,
  },
  startButtonText: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.lg,
    color: colors.text.inverse,
    fontWeight: typography.weights.semibold,
  },
  featuredImageContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    alignItems: 'center',
  },
  featuredImage: {
    width: 282,
    height: 379,
    borderRadius: borderRadius.md,
    ...shadows.lg,
  },
}); 