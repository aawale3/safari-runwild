import { ItineraryDay } from '@/types/itinerary';

export const mockItineraryDays: ItineraryDay[] = [
  {
    id: 'day-1',
    day: 1,
    title: 'Arrival in Bulawayo',
    description: 'Welcome to Zimbabwe! Begin your safari adventure with a welcome dinner and orientation.',
    fullDescription: 'Your journey begins in Bulawayo, Zimbabwe\'s second-largest city. After settling into your accommodation, join us for a welcome dinner where you\'ll meet your fellow travelers and safari guides. We\'ll provide a comprehensive orientation about the upcoming days and answer any questions you may have.',
    imageUrl: 'https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/african-expedition-safari-loyqm1/assets/0ezhsvo4qrvu/afarm.webp',
    location: 'Bulawayo, Zimbabwe',
    activities: [
      'Airport Transfer',
      'Welcome Dinner',
      'Orientation Session',
      'Local Market Visit'
    ],
    timeSlots: [
      { time: '14:00', activity: 'Airport Arrival & Transfer' },
      { time: '16:00', activity: 'Hotel Check-in' },
      { time: '18:00', activity: 'Welcome Dinner' },
      { time: '19:30', activity: 'Orientation Session' }
    ],
    coordinates: {
      latitude: -20.1480,
      longitude: 28.5830
    }
  },
  {
    id: 'day-2',
    day: 2,
    title: 'Arnold Farm & UFE Project',
    description: 'Visit the historic Arnold Farm, explore UFE Project #1, and enjoy a walking tour and dinner.',
    fullDescription: 'Today we visit the historic Arnold Farm, where you\'ll learn about sustainable farming practices and conservation efforts. The farm serves as a model for UFE\'s agricultural initiatives. After lunch, we\'ll explore the surrounding area with a guided walking tour, learning about local flora and fauna.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop',
    location: 'Arnold Farm, Matabeleland',
    activities: [
      'Farm Museum Tour',
      'UFE Project Visit',
      'Walking Tour',
      'Traditional Dinner'
    ],
    timeSlots: [
      { time: '09:00', activity: 'Farm Museum Tour' },
      { time: '11:00', activity: 'UFE Project Overview' },
      { time: '13:00', activity: 'Lunch at Farm' },
      { time: '15:00', activity: 'Guided Walking Tour' },
      { time: '19:00', activity: 'Traditional Dinner' }
    ],
    coordinates: {
      latitude: -20.2000,
      longitude: 28.6000
    }
  },
  {
    id: 'day-3',
    day: 3,
    title: 'Wildlife Conservation Center',
    description: 'Experience hands-on conservation work and learn about local wildlife protection efforts.',
    fullDescription: 'Spend the day at the Wildlife Conservation Center, where you\'ll participate in various conservation activities. Learn about local wildlife, their habitats, and the challenges they face. You\'ll have the opportunity to work alongside conservation experts and contribute to ongoing protection efforts.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop',
    location: 'Wildlife Conservation Center',
    activities: [
      'Conservation Workshop',
      'Wildlife Tracking',
      'Habitat Restoration',
      'Evening Safari'
    ],
    timeSlots: [
      { time: '08:00', activity: 'Conservation Workshop' },
      { time: '10:30', activity: 'Wildlife Tracking Session' },
      { time: '13:00', activity: 'Lunch Break' },
      { time: '14:30', activity: 'Habitat Restoration' },
      { time: '16:30', activity: 'Evening Safari' }
    ],
    coordinates: {
      latitude: -20.2500,
      longitude: 28.6500
    }
  },
  {
    id: 'day-4',
    day: 4,
    title: 'Community Visits',
    description: 'Village/school visits, UFE Project #2, and learn about wildlife cohabitation.',
    fullDescription: 'Today we\'ll visit local communities to understand how they coexist with wildlife. You\'ll learn about UFE\'s community engagement initiatives and see firsthand how sustainable practices are being implemented.',
    imageUrl: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop',
    location: 'Surrounding Communities',
    activities: [
      'Village Tour',
      'School Visit',
      'UFE Project #2',
      'Community Workshop'
    ],
    timeSlots: [
      { time: '09:00', activity: 'Community Welcome' },
      { time: '10:30', activity: 'School Visit' },
      { time: '13:00', activity: 'Local Lunch' },
      { time: '14:30', activity: 'UFE Project Tour' },
      { time: '16:00', activity: 'Community Workshop' }
    ],
    coordinates: {
      latitude: -20.3000,
      longitude: 28.7000
    }
  },
  {
    id: 'day-5',
    day: 5,
    title: 'Farm Exploration',
    description: 'Tour Tiki Farm, UFE Project #3, and go on a game drive.',
    fullDescription: 'Visit Tiki Farm to learn about sustainable agriculture practices and wildlife-friendly farming methods. The afternoon brings an exciting game drive where you might spot various wildlife species in their natural habitat.',
    imageUrl: 'https://images.unsplash.com/photo-1503917995318-6b8aeed6a3f8?w=800&auto=format&fit=crop',
    location: 'Tiki Farm',
    activities: [
      'Farm Tour',
      'UFE Project #3',
      'Game Drive',
      'Sunset Viewing'
    ],
    timeSlots: [
      { time: '08:00', activity: 'Farm Tour' },
      { time: '11:00', activity: 'UFE Project Overview' },
      { time: '13:00', activity: 'Farm Lunch' },
      { time: '15:00', activity: 'Game Drive' },
      { time: '18:00', activity: 'Sunset Viewing' }
    ],
    coordinates: {
      latitude: -20.3500,
      longitude: 28.7500
    }
  },
  {
    id: 'day-6',
    day: 6,
    title: 'Wildlife Day',
    description: 'Bush walk, horseback safari, and game drive.',
    fullDescription: 'Experience wildlife up close with a guided bush walk, followed by a unique perspective from horseback. The day concludes with an evening game drive to spot nocturnal animals.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop',
    location: 'National Reserve',
    activities: [
      'Bush Walk',
      'Horseback Safari',
      'Game Drive',
      'Night Safari'
    ],
    timeSlots: [
      { time: '06:00', activity: 'Bush Walk' },
      { time: '10:00', activity: 'Horseback Safari' },
      { time: '13:00', activity: 'Lunch Break' },
      { time: '16:00', activity: 'Game Drive' },
      { time: '19:00', activity: 'Night Safari' }
    ],
    coordinates: {
      latitude: -20.4000,
      longitude: 28.8000
    }
  },
  {
    id: 'day-7',
    day: 7,
    title: 'Return to Bulawayo',
    description: 'Khami Ruins, market walk, and cultural immersion.',
    fullDescription: 'Return to Bulawayo to explore the historic Khami Ruins, a UNESCO World Heritage site. Experience the vibrant local markets and immerse yourself in the city\'s rich cultural heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop',
    location: 'Bulawayo',
    activities: [
      'Khami Ruins Tour',
      'Market Visit',
      'Cultural Workshop',
      'City Tour'
    ],
    timeSlots: [
      { time: '09:00', activity: 'Khami Ruins Tour' },
      { time: '12:00', activity: 'Local Lunch' },
      { time: '14:00', activity: 'Market Walk' },
      { time: '16:00', activity: 'Cultural Workshop' },
      { time: '18:00', activity: 'City Tour' }
    ],
    coordinates: {
      latitude: -20.1480,
      longitude: 28.5830
    }
  },
  {
    id: 'day-8',
    day: 8,
    title: 'Matopos + Seed Bank',
    description: 'Historical cave tour and seed bank ecological education.',
    fullDescription: 'Explore the ancient Matopos Hills, home to significant historical caves and rock art. Visit the seed bank to learn about conservation of indigenous plant species and their importance to local ecosystems.',
    imageUrl: 'https://images.unsplash.com/photo-1503917995318-6b8aeed6a3f8?w=800&auto=format&fit=crop',
    location: 'Matopos Hills',
    activities: [
      'Cave Tour',
      'Rock Art Viewing',
      'Seed Bank Visit',
      'Nature Walk'
    ],
    timeSlots: [
      { time: '08:00', activity: 'Cave Tour' },
      { time: '11:00', activity: 'Rock Art Viewing' },
      { time: '13:00', activity: 'Lunch Break' },
      { time: '14:30', activity: 'Seed Bank Tour' },
      { time: '16:00', activity: 'Nature Walk' }
    ],
    coordinates: {
      latitude: -20.5500,
      longitude: 28.5000
    }
  },
  {
    id: 'day-9',
    day: 9,
    title: 'Safari Camp',
    description: 'Campfire stories, group dinner, and wildlife safari.',
    fullDescription: 'Arrive at the safari camp in Hwange National Park. Experience the magic of the African bush with campfire stories, traditional dinner, and an evening wildlife safari.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop',
    location: 'Hwange Park',
    activities: [
      'Camp Setup',
      'Campfire Stories',
      'Group Dinner',
      'Night Safari'
    ],
    timeSlots: [
      { time: '10:00', activity: 'Camp Arrival' },
      { time: '12:00', activity: 'Camp Lunch' },
      { time: '15:00', activity: 'Camp Setup' },
      { time: '18:00', activity: 'Campfire Stories' },
      { time: '19:00', activity: 'Group Dinner' }
    ],
    coordinates: {
      latitude: -18.6500,
      longitude: 26.5000
    }
  },
  {
    id: 'day-10',
    day: 10,
    title: 'Full Safari Day',
    description: 'Explore the savanna with game drives, bush lunch, and sundowners.',
    fullDescription: 'A full day of safari activities in Hwange National Park. Experience multiple game drives, enjoy a bush lunch, and watch the sunset with traditional sundowners.',
    imageUrl: 'https://images.unsplash.com/photo-1503917995318-6b8aeed6a3f8?w=800&auto=format&fit=crop',
    location: 'Hwange',
    activities: [
      'Morning Game Drive',
      'Bush Lunch',
      'Afternoon Safari',
      'Sundowners'
    ],
    timeSlots: [
      { time: '06:00', activity: 'Morning Game Drive' },
      { time: '09:00', activity: 'Bush Breakfast' },
      { time: '13:00', activity: 'Bush Lunch' },
      { time: '16:00', activity: 'Afternoon Safari' },
      { time: '18:00', activity: 'Sundowners' }
    ],
    coordinates: {
      latitude: -18.7000,
      longitude: 26.5500
    }
  },
  {
    id: 'day-11',
    day: 11,
    title: 'Transfer + Reflection',
    description: 'Travel to Vic Falls and begin journaling, rest and wellness.',
    fullDescription: 'Transfer to Victoria Falls for a day of reflection and relaxation. Take time to journal your experiences and participate in wellness activities.',
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop',
    location: 'Victoria Falls',
    activities: [
      'Transfer to Vic Falls',
      'Journaling Session',
      'Wellness Activities',
      'Group Reflection'
    ],
    timeSlots: [
      { time: '08:00', activity: 'Transfer' },
      { time: '12:00', activity: 'Hotel Check-in' },
      { time: '14:00', activity: 'Journaling Session' },
      { time: '16:00', activity: 'Wellness Activities' },
      { time: '18:00', activity: 'Group Reflection' }
    ],
    coordinates: {
      latitude: -17.9248,
      longitude: 25.8566
    }
  },
  {
    id: 'day-12',
    day: 12,
    title: 'Victoria Falls Tour',
    description: 'Guided tour, craft shopping, and a river cruise.',
    fullDescription: 'Experience the majestic Victoria Falls with a guided tour. Explore local crafts and enjoy a sunset cruise on the Zambezi River.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop',
    location: 'Victoria Falls',
    activities: [
      'Falls Tour',
      'Craft Shopping',
      'River Cruise',
      'Sunset Viewing'
    ],
    timeSlots: [
      { time: '09:00', activity: 'Falls Tour' },
      { time: '12:00', activity: 'Local Lunch' },
      { time: '14:00', activity: 'Craft Shopping' },
      { time: '16:00', activity: 'River Cruise' },
      { time: '18:00', activity: 'Sunset Viewing' }
    ],
    coordinates: {
      latitude: -17.9248,
      longitude: 25.8566
    }
  },
  {
    id: 'day-13',
    day: 13,
    title: 'Final Reflections',
    description: 'Group wellness session and return logistics.',
    fullDescription: 'The final day includes a group wellness session, sharing of experiences, and preparation for departure. A perfect opportunity to reflect on the journey and plan future conservation efforts.',
    imageUrl: 'https://images.unsplash.com/photo-1503917995318-6b8aeed6a3f8?w=800&auto=format&fit=crop',
    location: 'Victoria Falls',
    activities: [
      'Wellness Session',
      'Group Sharing',
      'Farewell Lunch',
      'Departure Prep'
    ],
    timeSlots: [
      { time: '09:00', activity: 'Wellness Session' },
      { time: '11:00', activity: 'Group Sharing' },
      { time: '13:00', activity: 'Farewell Lunch' },
      { time: '15:00', activity: 'Departure Prep' },
      { time: '17:00', activity: 'Airport Transfer' }
    ],
    coordinates: {
      latitude: -17.9248,
      longitude: 25.8566
    }
  }
]; 