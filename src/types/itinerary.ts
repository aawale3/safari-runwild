export interface ItineraryDay {
  id: string;
  day: number;
  title: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  location: string;
  activities: string[];
  timeSlots: {
    time: string;
    activity: string;
  }[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface ItineraryState {
  expandedDayId: string | null;
  isLoading: boolean;
  error: string | null;
  days: ItineraryDay[];
} 