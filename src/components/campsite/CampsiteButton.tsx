import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadows } from '@/constants/theme';

interface CampsiteButtonProps {
  onPress: () => void;
}

export const CampsiteButton: React.FC<CampsiteButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.icon}>🏕️</Text>
      <Text style={styles.text}>View Campsite</Text>
      <Text style={styles.subtext}>Zingweni Hwange National Park</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.earth.ochre,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.earth.brown,
  },
  icon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  text: {
    fontSize: typography.sizes.lg,
    fontFamily: typography.fonts.heading,
    fontWeight: typography.weights.bold,
    color: colors.text.inverse,
    marginBottom: spacing.xs,
  },
  subtext: {
    fontSize: typography.sizes.sm,
    fontFamily: typography.fonts.regular,
    color: colors.text.inverse,
    opacity: 0.9,
  },
});

export default CampsiteButton;
