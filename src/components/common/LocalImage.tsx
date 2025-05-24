import React, { useState, useCallback } from 'react';
import {
  ImageStyle,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { Image, ImageContentFit } from 'expo-image';
import { colors } from '@/constants/theme';

interface LocalImageProps {
  source: string | number;
  style?: ImageStyle;
  resizeMode?: ImageContentFit;
  priority?: 'low' | 'normal' | 'high';
  onLoad?: () => void;
  onError?: () => void;
}

export function LocalImage({
  source,
  style,
  resizeMode = 'cover',
  priority = 'normal',
  onLoad,
  onError,
}: LocalImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  // Determine the correct image source for expo-image
  let imageSource;
  if (typeof source === 'string') {
    imageSource = { uri: source };
  } else {
    imageSource = source; // local require
  }

  return (
    <View style={[styles.container, style]}>
      <Image
        source={imageSource}
        style={[styles.image, style]}
        contentFit={resizeMode}
        transition={200}
        cachePolicy="memory-disk"
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
      />
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={colors.primary.main} />
        </View>
      )}
      {hasError && (
        <View style={[styles.errorContainer, style]}>
          <View style={styles.placeholderBackground} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.ui.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.ui.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.ui.surface,
  },
}); 