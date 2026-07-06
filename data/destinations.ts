export interface Destination {
  id: string;
  title: string;
  description: string;
  category: string;
}

export const popularDestinationsList: Destination[] = [
  {
    id: "goa",
    title: "Goa",
    description: "Famous for pristine sandy beaches, colonial historic architecture, and vibrant nightlife.",
    category: "Beach",
  },
  {
    id: "coorg",
    title: "Coorg",
    description: "Famous for its sweeping coffee plantations, misty hills, and lush green valleys.",
    category: "Nature",
  },
  {
    id: "manali",
    title: "Manali",
    description: "A gorgeous Himalayan destination famed for snowcapped peaks and adventure sports.",
    category: "Adventure",
  },
  {
    id: "mysore",
    title: "Mysore",
    description: "Famed for its majestic royal palaces, rich heritage block-printing silks, and historic festive celebrations.",
    category: "Historical",
  },
  {
    id: "hampi",
    title: "Hampi",
    description: "A UNESCO World Heritage site featuring breathtaking ancient ruins and monumental stone architecture.",
    category: "Historical",
  },
  {
    id: "gokarna",
    title: "Gokarna",
    description: "A serene coastal escape known for its sacred temples, rugged cliffs, and uncrowded beaches.",
    category: "Beach",
  },
];