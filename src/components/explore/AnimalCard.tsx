import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { LocalImage } from '@/components/common/LocalImage';

interface AnimalCardProps {
  name: string;
  description: string;
  imageUrl: string;
  conservationStatus: string;
  onPress?: () => void;
}

export function AnimalCard({
  name,
  description,
  imageUrl,
  conservationStatus,
  onPress,
}: AnimalCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'endangered':
        return colors.ui.error;
      case 'vulnerable':
        return colors.ui.warning;
      case 'near threatened':
        return colors.ui.info;
      default:
        return colors.ui.success;
    }
  };

  const statusColor = getStatusColor(conservationStatus);

  const content = (
    <View style={styles.container}>
      <LocalImage
        source={imageUrl}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <View style={[styles.statusBadge, { backgroundColor: statusColor + '20' }]}>
            <Text style={[styles.statusText, { color: statusColor }]}>
              {conservationStatus}
            </Text>
          </View>
        </View>
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.learnMore}>
            Learn More
            <MaterialIcons
              name="arrow-forward"
              size={16}
              color={colors.primary.main}
              style={styles.arrowIcon}
            />
          </Text>
        </View>
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.touchable}
      >
        {content}
      </TouchableOpacity>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  touchable: {
    ...shadows.md,
  },
  container: {
    backgroundColor: colors.ui.background,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  name: {
    fontFamily: typography.fonts.heading,
    fontSize: typography.sizes.xl,
    color: colors.text.primary,
    flex: 1,
    marginRight: spacing.sm,
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  statusText: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
  },
  description: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.md,
    color: colors.text.secondary,
    lineHeight: typography.lineHeights.normal * typography.sizes.md,
    marginBottom: spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  learnMore: {
    fontFamily: typography.fonts.regular,
    fontSize: typography.sizes.sm,
    color: colors.primary.main,
    fontWeight: typography.weights.medium,
  },
  arrowIcon: {
    marginLeft: spacing.xs,
  },
}); 