import React, { useState, useCallback } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '@/constants/theme';
import { DayCard } from '@/components/itinerary/DayCard';
import { mockItineraryDays } from '@/data/itinerary';
import { ItineraryDay } from '@/types/itinerary';

export function ItineraryScreen() {
  const [expandedDayId, setExpandedDayId] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDayPress = useCallback((id: string) => {
    setExpandedDayId(currentId => currentId === id ? null : id);
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // Simulate data refresh
    await new Promise<void>(resolve => setTimeout(() => resolve(), 1000));
    setIsRefreshing(false);
  }, []);

  const renderItem = useCallback(({ item }: { item: ItineraryDay }) => (
    <DayCard
      day={item}
      isExpanded={expandedDayId === item.id}
      onPress={handleDayPress}
    />
  ), [expandedDayId, handleDayPress]);

  const keyExtractor = useCallback((item: ItineraryDay) => item.id, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary.main} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockItineraryDays}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={[colors.primary.main]}
            tintColor={colors.primary.main}
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ui.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ui.background,
  },
  listContent: {
    padding: spacing.md,
  },
}); 