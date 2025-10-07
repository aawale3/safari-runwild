import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Modal,
  SafeAreaView,
} from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants/theme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface CampsiteImage {
  id: string;
  source: any;
  title: string;
  description: string;
}

const campsiteImages: CampsiteImage[] = [
  {
    id: '1',
    source: require('@/assets/images/Campsite/ZV Campsite - 9329.jpg'),
    title: 'Main Campsite Area',
    description: 'The central area of Zingweni Campsite featuring spacious tent sites with natural shade and easy access to facilities.',
  },
  {
    id: '2',
    source: require('@/assets/images/Campsite/ZV Campsite -7290.jpg'),
    title: 'Tent Setup Area',
    description: 'Designated tent areas with level ground, perfect for comfortable camping with stunning views of the surrounding wilderness.',
  },
  {
    id: '3',
    source: require('@/assets/images/Campsite/ZV Campsite -7296.jpg'),
    title: 'Natural Shade',
    description: 'Beautiful natural canopy providing shade and protection while maintaining the authentic bush camping experience.',
  },
  {
    id: '4',
    source: require('@/assets/images/Campsite/ZV Campsite -7302.jpg'),
    title: 'Campfire Circle',
    description: 'Traditional campfire area where guests gather for evening stories, meals, and to experience the magic of African nights.',
  },
  {
    id: '5',
    source: require('@/assets/images/Campsite/ZV Campsite -7304.jpg'),
    title: 'Wildlife Viewing Spot',
    description: 'Strategic location offering excellent wildlife viewing opportunities with minimal disturbance to the natural environment.',
  },
  {
    id: '6',
    source: require('@/assets/images/Campsite/ZV Campsite -7306.jpg'),
    title: 'Sunset Views',
    description: 'Breathtaking sunset views over the Hwange landscape, perfect for photography and peaceful reflection.',
  },
  {
    id: '7',
    source: require('@/assets/images/Campsite/ZV Campsite -7310.jpg'),
    title: 'Morning Light',
    description: 'Early morning light filtering through the trees, creating a magical atmosphere for starting your safari day.',
  },
  {
    id: '8',
    source: require('@/assets/images/Campsite/ZV Campsite -7311.jpg'),
    title: 'Dining Area',
    description: 'Open-air dining area where guests enjoy meals prepared with fresh, local ingredients in the heart of nature.',
  },
  {
    id: '9',
    source: require('@/assets/images/Campsite/ZV Campsite -7315.jpg'),
    title: 'Relaxation Zone',
    description: 'Comfortable seating area for relaxation, reading, or simply enjoying the sounds and sights of the African bush.',
  },
  {
    id: '10',
    source: require('@/assets/images/Campsite/ZV Campsite -9324.jpg'),
    title: 'Camp Layout',
    description: 'Well-organized camp layout ensuring privacy while maintaining the communal spirit of safari camping.',
  },
  {
    id: '11',
    source: require('@/assets/images/Campsite/ZV Campsite -9327.jpg'),
    title: 'Natural Pathways',
    description: 'Natural pathways winding through the campsite, designed to minimize environmental impact while providing easy navigation.',
  },
  {
    id: '12',
    source: require('@/assets/images/Campsite/ZV Campsite -9331.jpg'),
    title: 'Evening Ambiance',
    description: 'The campsite transforms into a magical space as evening falls, with soft lighting and the sounds of the African night.',
  },
  {
    id: '13',
    source: require('@/assets/images/Campsite/ZV Campsite -9336.jpg'),
    title: 'Starry Skies',
    description: 'Unobstructed views of the African night sky, perfect for stargazing and connecting with the vastness of the wilderness.',
  },
];

interface CampsiteGalleryProps {
  onClose: () => void;
}

export const CampsiteGallery: React.FC<CampsiteGalleryProps> = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleImagePress = (index: number) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % campsiteImages.length;
    setCurrentIndex(nextIndex);
    scrollViewRef.current?.scrollTo({
      x: nextIndex * (screenWidth * 0.8 + spacing.md),
      animated: true,
    });
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex === 0 ? campsiteImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    scrollViewRef.current?.scrollTo({
      x: prevIndex * (screenWidth * 0.8 + spacing.md),
      animated: true,
    });
  };

  const renderThumbnail = (image: CampsiteImage, index: number) => (
    <TouchableOpacity
      key={image.id}
      style={styles.thumbnailContainer}
      onPress={() => handleImagePress(index)}
      activeOpacity={0.8}
    >
      <Image source={image.source} style={styles.thumbnail} resizeMode="cover" />
      <View style={styles.thumbnailOverlay}>
        <Text style={styles.thumbnailTitle}>{image.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderFullScreenModal = () => (
    <Modal
      visible={isFullScreen}
      animationType="fade"
      onRequestClose={() => setIsFullScreen(false)}
    >
      <SafeAreaView style={styles.fullScreenContainer}>
        <View style={styles.fullScreenHeader}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsFullScreen(false)}
          >
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.fullScreenContent}>
          <Image
            source={campsiteImages[currentIndex].source}
            style={styles.fullScreenImage}
            resizeMode="contain"
          />
          
          <View style={styles.imageInfo}>
            <Text style={styles.imageTitle}>{campsiteImages[currentIndex].title}</Text>
            <Text style={styles.imageDescription}>{campsiteImages[currentIndex].description}</Text>
          </View>
          
          <View style={styles.navigationButtons}>
            <TouchableOpacity style={styles.navButton} onPress={handlePrevious}>
              <Text style={styles.navButtonText}>‹</Text>
            </TouchableOpacity>
            <Text style={styles.imageCounter}>
              {currentIndex + 1} / {campsiteImages.length}
            </Text>
            <TouchableOpacity style={styles.navButton} onPress={handleNext}>
              <Text style={styles.navButtonText}>›</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.header}
        onPress={onClose}
        activeOpacity={0.9}
      >
        <TouchableOpacity 
          style={styles.closeButton} 
          onPress={() => {
            console.log('Close button pressed');
            onClose();
          }}
          activeOpacity={0.7}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={styles.closeButtonText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Zingweni Hwange National Park Campsite</Text>
        <Text style={styles.subtitle}>Experience authentic safari camping in the heart of Zimbabwe's premier wildlife reserve</Text>
      </TouchableOpacity>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.thumbnailScroll}
        contentContainerStyle={styles.thumbnailScrollContent}
      >
        {campsiteImages.map((image, index) => renderThumbnail(image, index))}
      </ScrollView>

      <TouchableOpacity 
        style={styles.currentImageContainer}
        onPress={() => setIsFullScreen(true)}
        activeOpacity={0.9}
      >
        <Image
          source={campsiteImages[currentIndex].source}
          style={styles.currentImage}
          resizeMode="cover"
        />
        <View style={styles.currentImageOverlay}>
          <Text style={styles.currentImageTitle}>{campsiteImages[currentIndex].title}</Text>
          <Text style={styles.currentImageDescription}>{campsiteImages[currentIndex].description}</Text>
          <Text style={styles.tapToEnlarge}>Tap to enlarge</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.navButton} onPress={handlePrevious}>
          <Text style={styles.navButtonText}>‹ Previous</Text>
        </TouchableOpacity>
        <Text style={styles.imageCounter}>
          {currentIndex + 1} / {campsiteImages.length}
        </Text>
        <TouchableOpacity style={styles.navButton} onPress={handleNext}>
          <Text style={styles.navButtonText}>Next ›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.campsiteInfo}>
        <Text style={styles.infoTitle}>About Zingweni Campsite</Text>
        <Text style={styles.infoText}>
          Located in the heart of Hwange National Park, Zingweni Campsite offers an authentic safari camping experience 
          surrounded by pristine wilderness. Our eco-friendly campsite features spacious tent areas, natural shade, 
          and modern amenities while maintaining the traditional bush camping atmosphere.
        </Text>
        <Text style={styles.infoText}>
          The campsite is strategically positioned for excellent wildlife viewing opportunities, with elephants, 
          lions, and other iconic African species frequently spotted in the area. Our experienced guides ensure 
          your safety while providing insights into the local ecosystem and conservation efforts.
        </Text>
      </View>

      {renderFullScreenModal()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  header: {
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    backgroundColor: colors.earth.sand,
    borderBottomWidth: 1,
    borderBottomColor: colors.earth.ochre,
  },
  title: {
    fontSize: typography.sizes.xl,
    fontFamily: typography.fonts.heading,
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
    marginTop: spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.sizes.sm,
    fontFamily: typography.fonts.regular,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.normal * typography.sizes.sm,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    backgroundColor: colors.ui.error,
    borderRadius: borderRadius.full,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.lg,
    elevation: 8,
    zIndex: 1000,
    borderWidth: 2,
    borderColor: colors.text.inverse,
  },
  closeButtonText: {
    color: colors.text.inverse,
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    textAlign: 'center',
  },
  thumbnailScroll: {
    maxHeight: 120,
  },
  thumbnailScrollContent: {
    paddingHorizontal: spacing.md,
  },
  thumbnailContainer: {
    marginRight: spacing.md,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...shadows.sm,
  },
  thumbnail: {
    width: 100,
    height: 80,
  },
  thumbnailOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: spacing.xs,
  },
  thumbnailTitle: {
    color: colors.text.inverse,
    fontSize: typography.sizes.xs,
    fontFamily: typography.fonts.semibold,
    textAlign: 'center',
  },
  currentImageContainer: {
    margin: spacing.lg,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    ...shadows.lg,
  },
  currentImage: {
    width: '100%',
    height: 250,
  },
  currentImageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: spacing.lg,
  },
  currentImageTitle: {
    color: colors.text.inverse,
    fontSize: typography.sizes.lg,
    fontFamily: typography.fonts.heading,
    fontWeight: typography.weights.bold,
    marginBottom: spacing.xs,
  },
  currentImageDescription: {
    color: colors.text.inverse,
    fontSize: typography.sizes.sm,
    fontFamily: typography.fonts.regular,
    lineHeight: typography.lineHeights.normal * typography.sizes.sm,
    marginBottom: spacing.xs,
  },
  tapToEnlarge: {
    color: colors.primary.light,
    fontSize: typography.sizes.xs,
    fontFamily: typography.fonts.semibold,
    textAlign: 'center',
    marginTop: spacing.xs,
    fontStyle: 'italic',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  navButton: {
    backgroundColor: colors.primary.main,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.md,
    ...shadows.sm,
  },
  navButtonText: {
    color: colors.text.inverse,
    fontSize: typography.sizes.md,
    fontFamily: typography.fonts.semibold,
  },
  imageCounter: {
    fontSize: typography.sizes.md,
    fontFamily: typography.fonts.regular,
    color: colors.text.secondary,
  },
  campsiteInfo: {
    padding: spacing.lg,
    backgroundColor: colors.earth.tan,
    margin: spacing.lg,
    borderRadius: borderRadius.lg,
    ...shadows.sm,
  },
  infoTitle: {
    fontSize: typography.sizes.xl,
    fontFamily: typography.fonts.heading,
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    marginBottom: spacing.md,
  },
  infoText: {
    fontSize: typography.sizes.md,
    fontFamily: typography.fonts.regular,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.relaxed * typography.sizes.md,
    marginBottom: spacing.md,
  },
  fullScreenContainer: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  fullScreenHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: spacing.lg,
  },
  fullScreenContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: screenWidth,
    height: screenHeight * 0.6,
  },
  imageInfo: {
    padding: spacing.lg,
    backgroundColor: colors.earth.sand,
    margin: spacing.lg,
    borderRadius: borderRadius.lg,
  },
  imageTitle: {
    fontSize: typography.sizes.xl,
    fontFamily: typography.fonts.heading,
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
  },
  imageDescription: {
    fontSize: typography.sizes.md,
    fontFamily: typography.fonts.regular,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.normal * typography.sizes.md,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    marginTop: spacing.lg,
  },
});

export default CampsiteGallery;
