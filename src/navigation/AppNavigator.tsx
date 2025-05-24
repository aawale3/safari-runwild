import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, MainTabParamList } from '@/types/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens (we'll create these next)
import { HomeScreen } from '@/screens/home/HomeScreen';
import { ItineraryScreen } from '@/screens/itinerary/ItineraryScreen';
import { ExplorerScreen } from '@/screens/explorer/ExplorerScreen';
import JournalScreen from '@/screens/journal/JournalScreen';
import { PodcastScreen } from '@/screens/podcast/PodcastScreen';
import { GuideScreen } from '@/screens/guide/GuideScreen';
import { ResourcesScreen } from '@/screens/resources/ResourcesScreen';
import JournalDetailScreen from '@/screens/JournalDetailScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2E5D3E',
        tabBarInactiveTintColor: '#4B5563',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          // Add icons here when we have them
        }}
      />
      <Tab.Screen
        name="Itinerary"
        component={ItineraryScreen}
        options={{
          tabBarLabel: 'Itinerary',
        }}
      />
      <Tab.Screen
        name="Explorer"
        component={ExplorerScreen}
        options={{
          tabBarLabel: 'Explore',
        }}
      />
      <Tab.Screen
        name="Journal"
        component={JournalScreen}
        options={{
          tabBarLabel: 'Journal',
        }}
      />
      <Tab.Screen
        name="Podcast"
        component={PodcastScreen}
        options={{
          tabBarLabel: 'Podcast',
        }}
      />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#FFFFFF' },
          }}
        >
         
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name="Guide" component={GuideScreen} />
          <Stack.Screen name="Resources" component={ResourcesScreen} />
          <Stack.Screen name="JournalDetail" component={JournalDetailScreen} />
      
          {/* Add other stack screens as we create them */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
} 