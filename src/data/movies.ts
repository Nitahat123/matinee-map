export interface Movie {
  id: string;
  title: string;
  genre: string[];
  language: string;
  duration: number;
  rating: number;
  votes: number;
  releaseDate: string;
  poster: string;
  banner: string;
  description: string;
  cast: string[];
  director: string;
}

export interface ShowTime {
  id: string;
  movieId: string;
  theaterId: string;
  date: string;
  time: string;
  price: number;
  availableSeats: number;
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  facilities: string[];
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Dune: Part Two",
    genre: ["Action", "Sci-Fi", "Adventure"],
    language: "English",
    duration: 166,
    rating: 8.8,
    votes: 45000,
    releaseDate: "2024-03-01",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    banner: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=400&fit=crop",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Josh Brolin"],
    director: "Denis Villeneuve"
  },
  {
    id: "2",
    title: "Oppenheimer",
    genre: ["Biography", "Drama", "History"],
    language: "English",
    duration: 180,
    rating: 8.6,
    votes: 52000,
    releaseDate: "2024-02-15",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    banner: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=400&fit=crop",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    cast: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr.", "Matt Damon"],
    director: "Christopher Nolan"
  },
  {
    id: "3",
    title: "Inception Remastered",
    genre: ["Action", "Sci-Fi", "Thriller"],
    language: "English",
    duration: 148,
    rating: 8.8,
    votes: 67000,
    releaseDate: "2024-03-10",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
    banner: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=400&fit=crop",
    description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    director: "Christopher Nolan"
  },
  {
    id: "4",
    title: "The Batman Returns",
    genre: ["Action", "Crime", "Drama"],
    language: "English",
    duration: 176,
    rating: 8.2,
    votes: 48000,
    releaseDate: "2024-03-05",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    banner: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&h=400&fit=crop",
    description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano", "Colin Farrell"],
    director: "Matt Reeves"
  },
  {
    id: "5",
    title: "Interstellar Redux",
    genre: ["Adventure", "Drama", "Sci-Fi"],
    language: "English",
    duration: 169,
    rating: 8.7,
    votes: 71000,
    releaseDate: "2024-02-28",
    poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop",
    banner: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=400&fit=crop",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    director: "Christopher Nolan"
  },
  {
    id: "6",
    title: "Blade Runner 2099",
    genre: ["Sci-Fi", "Thriller", "Drama"],
    language: "English",
    duration: 155,
    rating: 8.4,
    votes: 39000,
    releaseDate: "2024-03-12",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    banner: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&h=400&fit=crop",
    description: "A young blade runner's discovery leads him on a quest to find a former runner who's been missing for decades.",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas", "Jared Leto"],
    director: "Denis Villeneuve"
  }
];

export const theaters: Theater[] = [
  {
    id: "t1",
    name: "PVR Cinemas",
    location: "Phoenix Marketcity, Mumbai",
    facilities: ["Dolby Atmos", "Recliner Seats", "Food Court", "Parking"]
  },
  {
    id: "t2",
    name: "INOX Megaplex",
    location: "Inorbit Mall, Mumbai",
    facilities: ["IMAX", "4DX", "Premium Lounge", "Parking"]
  },
  {
    id: "t3",
    name: "Cinepolis",
    location: "Viviana Mall, Thane",
    facilities: ["VIP Seats", "Dolby Atmos", "Cafe", "Parking"]
  },
  {
    id: "t4",
    name: "Carnival Cinemas",
    location: "R City Mall, Ghatkopar",
    facilities: ["Premium Seats", "Food & Beverage", "Wheelchair Access"]
  }
];

export const showTimes: ShowTime[] = [
  // Dune: Part Two
  { id: "s1", movieId: "1", theaterId: "t1", date: "2024-03-15", time: "10:00 AM", price: 250, availableSeats: 120 },
  { id: "s2", movieId: "1", theaterId: "t1", date: "2024-03-15", time: "2:30 PM", price: 300, availableSeats: 95 },
  { id: "s3", movieId: "1", theaterId: "t1", date: "2024-03-15", time: "6:45 PM", price: 350, availableSeats: 45 },
  { id: "s4", movieId: "1", theaterId: "t2", date: "2024-03-15", time: "11:30 AM", price: 400, availableSeats: 80 },
  { id: "s5", movieId: "1", theaterId: "t2", date: "2024-03-15", time: "4:00 PM", price: 450, availableSeats: 60 },
  { id: "s6", movieId: "1", theaterId: "t3", date: "2024-03-15", time: "9:00 PM", price: 320, availableSeats: 110 },
  
  // Oppenheimer
  { id: "s7", movieId: "2", theaterId: "t1", date: "2024-03-15", time: "1:00 PM", price: 280, availableSeats: 140 },
  { id: "s8", movieId: "2", theaterId: "t2", date: "2024-03-15", time: "3:30 PM", price: 350, availableSeats: 75 },
  { id: "s9", movieId: "2", theaterId: "t3", date: "2024-03-15", time: "7:15 PM", price: 300, availableSeats: 55 },
  { id: "s10", movieId: "2", theaterId: "t4", date: "2024-03-15", time: "5:00 PM", price: 250, availableSeats: 130 },
  
  // Inception
  { id: "s11", movieId: "3", theaterId: "t1", date: "2024-03-15", time: "12:00 PM", price: 270, availableSeats: 100 },
  { id: "s12", movieId: "3", theaterId: "t2", date: "2024-03-15", time: "6:00 PM", price: 380, availableSeats: 40 },
  { id: "s13", movieId: "3", theaterId: "t3", date: "2024-03-15", time: "9:30 PM", price: 310, availableSeats: 85 },
  
  // The Batman
  { id: "s14", movieId: "4", theaterId: "t2", date: "2024-03-15", time: "1:45 PM", price: 320, availableSeats: 90 },
  { id: "s15", movieId: "4", theaterId: "t3", date: "2024-03-15", time: "5:30 PM", price: 290, availableSeats: 105 },
  { id: "s16", movieId: "4", theaterId: "t4", date: "2024-03-15", time: "8:00 PM", price: 260, availableSeats: 125 },
  
  // Interstellar
  { id: "s17", movieId: "5", theaterId: "t1", date: "2024-03-15", time: "3:00 PM", price: 300, availableSeats: 70 },
  { id: "s18", movieId: "5", theaterId: "t2", date: "2024-03-15", time: "8:30 PM", price: 420, availableSeats: 35 },
  { id: "s19", movieId: "5", theaterId: "t4", date: "2024-03-15", time: "2:00 PM", price: 280, availableSeats: 115 },
  
  // Blade Runner
  { id: "s20", movieId: "6", theaterId: "t1", date: "2024-03-15", time: "7:30 PM", price: 330, availableSeats: 50 },
  { id: "s21", movieId: "6", theaterId: "t3", date: "2024-03-15", time: "4:15 PM", price: 295, availableSeats: 95 },
  { id: "s22", movieId: "6", theaterId: "t4", date: "2024-03-15", time: "10:00 PM", price: 270, availableSeats: 135 }
];
