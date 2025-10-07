import { NavigatorScreenParams } from '@react-navigation/native';
import type { JournalEntry } from './journal';

// Stack navigation across the app
export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
  Guide: undefined;
  Resources: undefined;
  ProjectDetails: { projectId: string };
  AnimalProfile: { animalId: string };
  SiteDetails: { siteId: string };
  JournalEntry: { entryId?: string };
  PodcastEpisode: { episodeId: string };
  Pledge: undefined;

  // Journal Detail screen shows full journal entry and arrows to navigate
  JournalDetail: {
    entries: JournalEntry[];
    currentIndex: number;
  };
  About: undefined;
};

// Bottom tab navigation
export type MainTabParamList = {
  Home: undefined;
  Itinerary: undefined;
  Explorer: undefined;
  Journal: undefined;
  Podcast: undefined;
};

// Optional nested stack for guide-related screens
export type GuideStackParamList = {
  GuideHome: undefined;
  AnimalList: undefined;
  SiteList: undefined;
  SafetyTips: undefined;
  GuideProfiles: undefined;
};

// Optional nested stack for resources
export type ResourcesStackParamList = {
  ResourcesHome: undefined;
  PackingList: undefined;
  TravelTips: undefined;
  Insurance: undefined;
  Excursions: undefined;
};

// Ensure TypeScript knows these types apply globally
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
