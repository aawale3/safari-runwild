import React, { useState } from 'react';
import { 
  View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, 
  Dimensions, Modal, Animated 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants/theme';
import { CampsiteGallery } from '@/components/campsite/CampsiteGallery';
import { CampsiteButton } from '@/components/campsite/CampsiteButton';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Main'>;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [showCampsiteGallery, setShowCampsiteGallery] = useState(false);

  const handleCampsitePress = () => setShowCampsiteGallery(true);
  const handleCloseCampsiteGallery = () => setShowCampsiteGallery(false);

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* 🌍 Header / Logo Section */}
      <View style={styles.headerContainer}>
        <View style={styles.logoRow}>
          <Image source={require('@/assets/images/UFE_Logo.png')} style={styles.logo} />
          <Image source={require('@/assets/images/Harvesting_Wisdom.png')} style={styles.logo} />
        </View>
        <Text style={styles.welcomeText}>Welcome to Run Wild Safari</Text>
        <Text style={styles.subHeading}>Embark on an Extraordinary Journey 🌍</Text>
      </View>
      {/* 🏃 Run Wild Logo */}
      <View style={styles.runWildSection}>
        <Image source={require('@/assets/images/Runwild.png')} style={styles.runWildLogo} />
      </View>

      {/* 🎯 Catchy Intro */}
      <View style={styles.introSection}>
        <Text style={styles.catchyTitle}>Ready for Adventure? 🦁</Text>
        <Text style={styles.catchySubtitle}>
          Discover Zimbabwe's wild beauty, connect with local communities, and make a real difference in conservation.
        </Text>
        <View style={styles.highlightBox}>
          <Text style={styles.highlightText}>
            ✨ <Text style={styles.bold}>13 Days</Text> of unforgettable experiences
          </Text>
          <Text style={styles.highlightText}>
            🌍 <Text style={styles.bold}>Conservation</Text> meets adventure
          </Text>
          <Text style={styles.highlightText}>
            🤝 <Text style={styles.bold}>Community</Text> partnerships
          </Text>
        </View>
      </View>

      {/* 🔍 Quick Access */}
      <View style={styles.quickAccessSection}>
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.cardsRow}>
          <TouchableOpacity 
            style={styles.quickCard} 
            onPress={() => navigation.navigate('Main', { screen: 'Explorer' })}
            activeOpacity={0.85}
          >
            <Text style={styles.cardIcon}>🧭</Text>
            <Text style={styles.cardTitle}>Explore</Text>
            <Text style={styles.cardSubtitle}>Wildlife & Parks</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.quickCard} 
            onPress={() => navigation.navigate('Main', { screen: 'Journal' })}
            activeOpacity={0.85}
          >
            <Text style={styles.cardIcon}>📖</Text>
            <Text style={styles.cardTitle}>Journal</Text>
            <Text style={styles.cardSubtitle}>Save Memories</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.quickCard} 
            onPress={() => navigation.navigate('Main', { screen: 'Podcast' })}
            activeOpacity={0.85}
          >
            <Text style={styles.cardIcon}>🎧</Text>
            <Text style={styles.cardTitle}>Podcast</Text>
            <Text style={styles.cardSubtitle}>Listen & Learn</Text>
          </TouchableOpacity>
        </View>
        
        {/* Learn More Button under Explore section */}
        <TouchableOpacity 
          style={styles.learnMoreButton} 
          onPress={() => navigation.navigate('About')}
          activeOpacity={0.85}
        >
          <Text style={styles.learnMoreText}>Learn More About Our Mission →</Text>
        </TouchableOpacity>
      </View>

      {/* 🏕️ Campsite Button */}
      <View style={styles.campsiteSection}>
        <CampsiteButton onPress={handleCampsitePress} />
      </View>

      {/* 🚀 Call to Action */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Start Your Journey Today!</Text>
        <Text style={styles.ctaSubtitle}>
          Join us for an adventure that will change your perspective on conservation and community.
        </Text>
        <TouchableOpacity 
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Main', { screen: 'Itinerary' })}
          activeOpacity={0.85}
        >
          <Text style={styles.ctaButtonText}>Explore 13-Day Itinerary</Text>
          <Text style={styles.ctaButtonIcon}>→</Text>
        </TouchableOpacity>
      </View>

      {/* 📖 Read More */}
      <TouchableOpacity 
        style={styles.readMoreButton} 
        onPress={() => navigation.navigate('About')}
        activeOpacity={0.85}
      >
        <Text style={styles.readMoreText}>Read More About This Journey →</Text>
      </TouchableOpacity>

      {/* 🌄 Campsite Modal */}
      <Modal
        visible={showCampsiteGallery}
        animationType="slide"
        presentationStyle="fullScreen"
        onRequestClose={handleCloseCampsiteGallery}
      >
        <CampsiteGallery onClose={handleCloseCampsiteGallery} />
      </Modal>
    </ScrollView>
  );
};

// 💅 Modern Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F2',
  },
  content: {
    alignItems: 'center',
    paddingVertical: spacing['2xl'],
    paddingHorizontal: spacing.lg,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: spacing['3xl'],
    marginBottom: spacing.xl,
  },
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
  },
  logo: {
    width: 84,
    height: 84,
    marginHorizontal: 6,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 26,
    fontFamily: typography.fonts.heading,
    fontWeight: '700',
    color: '#2E3D24',
    textAlign: 'center',
    marginTop: spacing.md,
  },
  subHeading: {
    fontSize: 16,
    color: '#4B6043',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 6,
  },
  description: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
    textAlign: 'center',
    marginHorizontal: 16,
    marginBottom: spacing.lg,
  },
  bold: {
    fontWeight: '700',
    color: '#2E3D24',
  },
  runWildSection: {
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  runWildLogo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  introSection: {
    alignItems: 'center',
    marginVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  catchyTitle: {
    fontSize: 28,
    fontFamily: typography.fonts.heading,
    fontWeight: '700',
    color: '#2E3D24',
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  catchySubtitle: {
    fontSize: 16,
    color: '#4B6043',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  highlightBox: {
    backgroundColor: '#F0F4E8',
    borderRadius: 16,
    padding: spacing.lg,
    width: '100%',
    borderWidth: 1,
    borderColor: '#D4E6B5',
  },
  highlightText: {
    fontSize: 15,
    color: '#2E3D24',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  quickAccessSection: {
    width: '100%',
    marginTop: spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2E3D24',
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: '#DAD3C2',
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2E3D24',
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#6B6B6B',
  },
  campsiteSection: {
    marginTop: spacing['2xl'],
    marginBottom: spacing.xl,
  },
  ctaSection: {
    alignItems: 'center',
    marginVertical: spacing['2xl'],
    paddingHorizontal: spacing.lg,
  },
  ctaTitle: {
    fontSize: 24,
    fontFamily: typography.fonts.heading,
    fontWeight: '700',
    color: '#2E3D24',
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: '#4B6043',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: spacing.lg,
  },
  ctaButton: {
    backgroundColor: '#2E5D3E',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.lg,
    elevation: 8,
  },
  ctaButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginRight: spacing.sm,
  },
  ctaButtonIcon: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  learnMoreButton: {
    backgroundColor: '#4B6043',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: spacing.lg,
    alignSelf: 'center',
    ...shadows.sm,
    elevation: 4,
  },
  learnMoreText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  readMoreButton: {
    backgroundColor: '#385723',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 24,
    marginBottom: spacing['2xl'],
    ...shadows.lg,
    elevation: 8,
  },
  readMoreText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default HomeScreen;