export interface FeaturedSafari {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  highlights: string[];
}

export const featuredSafaris: FeaturedSafari[] = [
  {
    id: '1',
    title: 'Serengeti National Park',
    description: 'Witness the great migration and vast plains',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    location: 'Tanzania',
    highlights: ['Great Migration', 'Big Five', 'Endless Plains']
  },
  {
    id: '2',
    title: 'Maasai Mara National Reserve',
    description: 'Experience the most spectacular wildlife viewing',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    location: 'Kenya',
    highlights: ['River Crossings', 'Maasai Culture', 'Predator Action']
  },
  {
    id: '3',
    title: 'Amboseli National Park',
    description: 'Iconic views of elephants with Mount Kilimanjaro',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    location: 'Kenya',
    highlights: ['Elephant Herds', 'Kilimanjaro Views', 'Wetlands']
  },
  {
    id: '4',
    title: 'Kruger National Park',
    description: 'South Africa\'s premier wildlife destination',
    image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop',
    location: 'South Africa',
    highlights: ['Self-Drive Safaris', 'Diverse Wildlife', 'Luxury Lodges']
  },
  {
    id: '5',
    title: 'Okavango Delta',
    description: 'Explore the world\'s largest inland delta',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    location: 'Botswana',
    highlights: ['Mokoro Rides', 'Water Safaris', 'Bird Watching']
  }
];
