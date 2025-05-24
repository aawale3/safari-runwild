export type JournalEntry = {
  id: string;
  mood: number;
  photoUri?: string;
  content: string;
  timestamp: string; // ISO string
}; 