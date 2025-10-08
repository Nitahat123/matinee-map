export type ContentType = 'movies' | 'stream' | 'events' | 'plays' | 'sports' | 'activities';

export interface Movie {
  id: string;
  title: string;
  image: string;
  rating: number;
  votes: string;
  genre: string[];
  description: string;
  duration: string;
  language: string;
  releaseDate: string;
  type: ContentType;
  theaters?: Theater[];
}

export interface ShowTime {
  time: string;
  price: number;
  showId: string;
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  showTimes: ShowTime[];
}

export const movies: Movie[] = [
  {
    id: "1",
    type: "movies",
    title: "Dune: Part Two",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
    rating: 9.2,
    votes: "234.5K",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    duration: "2h 46m",
    language: "English",
    releaseDate: "1 Mar, 2024",
    theaters: [
      {
        id: "t1",
        name: "PVR: Phoenix Mall",
        location: "Lower Parel, Mumbai",
        showTimes: [
          { time: "10:30 AM", price: 250, showId: "d2-t1-1030" },
          { time: "2:15 PM", price: 300, showId: "d2-t1-1415" },
          { time: "6:45 PM", price: 350, showId: "d2-t1-1845" },
          { time: "10:30 PM", price: 300, showId: "d2-t1-2230" },
        ],
      },
      {
        id: "t2",
        name: "INOX: Nariman Point",
        location: "Nariman Point, Mumbai",
        showTimes: [
          { time: "11:00 AM", price: 280, showId: "d2-t2-1100" },
          { time: "3:30 PM", price: 320, showId: "d2-t2-1530" },
          { time: "7:00 PM", price: 380, showId: "d2-t2-1900" },
        ],
      },
    ],
  },
  {
    id: "2",
    type: "movies",
    title: "Oppenheimer",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    rating: 8.9,
    votes: "189.2K",
    genre: ["Biography", "Drama", "History"],
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    duration: "3h 0m",
    language: "English",
    releaseDate: "21 Jul, 2023",
    theaters: [
      {
        id: "t1",
        name: "PVR: Phoenix Mall",
        location: "Lower Parel, Mumbai",
        showTimes: [
          { time: "9:45 AM", price: 230, showId: "op-t1-0945" },
          { time: "1:30 PM", price: 280, showId: "op-t1-1330" },
          { time: "5:15 PM", price: 320, showId: "op-t1-1715" },
        ],
      },
    ],
  },
  {
    id: "3",
    type: "stream",
    title: "Stranger Things S5",
    image: "https://images.unsplash.com/photo-1574267432644-f74f8ec44368?w=300&h=450&fit=crop",
    rating: 8.7,
    votes: "456.3K",
    genre: ["Sci-Fi", "Horror", "Drama"],
    description: "The final season of the beloved sci-fi horror series.",
    duration: "8 Episodes",
    language: "English",
    releaseDate: "Coming Soon",
  },
  {
    id: "4",
    type: "stream",
    title: "The Crown - Final Season",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    rating: 8.4,
    votes: "234.1K",
    genre: ["Drama", "History"],
    description: "The final chapter of the royal saga.",
    duration: "10 Episodes",
    language: "English",
    releaseDate: "16 Nov, 2023",
  },
  {
    id: "5",
    type: "events",
    title: "Coldplay: Music of the Spheres",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&h=450&fit=crop",
    rating: 9.5,
    votes: "123.4K",
    genre: ["Concert", "Live Music"],
    description: "Experience Coldplay live in an unforgettable concert.",
    duration: "3h 0m",
    language: "English",
    releaseDate: "19 Jan, 2025",
    theaters: [
      {
        id: "e1",
        name: "DY Patil Stadium",
        location: "Navi Mumbai",
        showTimes: [
          { time: "7:00 PM", price: 2500, showId: "cp-e1-1900" },
        ],
      },
    ],
  },
  {
    id: "6",
    type: "events",
    title: "Diljit Dosanjh Live",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=450&fit=crop",
    rating: 9.1,
    votes: "89.2K",
    genre: ["Concert", "Punjabi Music"],
    description: "An electrifying live performance by Diljit Dosanjh.",
    duration: "2h 30m",
    language: "Punjabi/Hindi",
    releaseDate: "10 Feb, 2025",
    theaters: [
      {
        id: "e2",
        name: "Mahalaxmi Race Course",
        location: "Mumbai",
        showTimes: [
          { time: "6:30 PM", price: 1500, showId: "dd-e2-1830" },
        ],
      },
    ],
  },
  {
    id: "7",
    type: "plays",
    title: "The Lion King Musical",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=300&h=450&fit=crop",
    rating: 9.4,
    votes: "67.8K",
    genre: ["Musical", "Family", "Drama"],
    description: "Disney's award-winning musical comes to life on stage.",
    duration: "2h 45m",
    language: "English",
    releaseDate: "15 Dec, 2024",
    theaters: [
      {
        id: "p1",
        name: "NCPA Theatre",
        location: "Nariman Point, Mumbai",
        showTimes: [
          { time: "7:00 PM", price: 1200, showId: "lk-p1-1900" },
          { time: "3:00 PM", price: 1000, showId: "lk-p1-1500" },
        ],
      },
    ],
  },
  {
    id: "8",
    type: "plays",
    title: "Much Ado About Nothing",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=300&h=450&fit=crop",
    rating: 8.6,
    votes: "34.5K",
    genre: ["Comedy", "Romance", "Theatre"],
    description: "Shakespeare's beloved comedy brought to modern stage.",
    duration: "2h 15m",
    language: "English",
    releaseDate: "5 Jan, 2025",
    theaters: [
      {
        id: "p2",
        name: "Prithvi Theatre",
        location: "Juhu, Mumbai",
        showTimes: [
          { time: "8:00 PM", price: 600, showId: "ma-p2-2000" },
        ],
      },
    ],
  },
  {
    id: "9",
    type: "sports",
    title: "IPL 2025: MI vs CSK",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300&h=450&fit=crop",
    rating: 9.0,
    votes: "234.2K",
    genre: ["Cricket", "Sports"],
    description: "The epic clash between Mumbai Indians and Chennai Super Kings.",
    duration: "3h 30m",
    language: "Hindi/English",
    releaseDate: "25 Mar, 2025",
    theaters: [
      {
        id: "s1",
        name: "Wankhede Stadium",
        location: "Marine Lines, Mumbai",
        showTimes: [
          { time: "7:30 PM", price: 800, showId: "ipl-s1-1930" },
        ],
      },
    ],
  },
  {
    id: "10",
    type: "sports",
    title: "Indian Super League Final",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=450&fit=crop",
    rating: 8.3,
    votes: "56.7K",
    genre: ["Football", "Sports"],
    description: "The ultimate showdown in Indian football.",
    duration: "2h 0m",
    language: "Hindi/English",
    releaseDate: "20 Feb, 2025",
    theaters: [
      {
        id: "s2",
        name: "DY Patil Stadium",
        location: "Navi Mumbai",
        showTimes: [
          { time: "6:00 PM", price: 500, showId: "isl-s2-1800" },
        ],
      },
    ],
  },
  {
    id: "11",
    type: "activities",
    title: "Escape Room Adventure",
    image: "https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?w=300&h=450&fit=crop",
    rating: 8.8,
    votes: "12.3K",
    genre: ["Adventure", "Puzzle", "Team Activity"],
    description: "Test your problem-solving skills in this thrilling escape room experience.",
    duration: "1h 30m",
    language: "English/Hindi",
    releaseDate: "Open Daily",
    theaters: [
      {
        id: "a1",
        name: "Mystery Rooms",
        location: "Andheri, Mumbai",
        showTimes: [
          { time: "11:00 AM", price: 800, showId: "er-a1-1100" },
          { time: "2:00 PM", price: 800, showId: "er-a1-1400" },
          { time: "5:00 PM", price: 900, showId: "er-a1-1700" },
          { time: "8:00 PM", price: 900, showId: "er-a1-2000" },
        ],
      },
    ],
  },
  {
    id: "12",
    type: "activities",
    title: "Virtual Reality Gaming",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=300&h=450&fit=crop",
    rating: 9.1,
    votes: "18.9K",
    genre: ["Gaming", "VR", "Entertainment"],
    description: "Immerse yourself in the latest VR gaming experiences.",
    duration: "1h 0m",
    language: "English/Hindi",
    releaseDate: "Open Daily",
    theaters: [
      {
        id: "a2",
        name: "SMAAASH",
        location: "Lower Parel, Mumbai",
        showTimes: [
          { time: "12:00 PM", price: 600, showId: "vr-a2-1200" },
          { time: "3:00 PM", price: 600, showId: "vr-a2-1500" },
          { time: "6:00 PM", price: 700, showId: "vr-a2-1800" },
        ],
      },
    ],
  },
];
