import { useState } from "react";
import { movies, ContentType } from "@/data/movies";
import MovieCard from "@/components/MovieCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<ContentType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter(movie => {
    const matchesCategory = selectedCategory === 'all' || movie.type === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />
      
      {/* Hero Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&h=400&fit=crop"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to BookMyShow
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              Book tickets for the latest movies, events, and shows
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="container py-8">
        <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2">
          <Button 
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </Button>
          <Button 
            variant={selectedCategory === 'movies' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('movies')}
          >
            Movies
          </Button>
          <Button 
            variant={selectedCategory === 'stream' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('stream')}
          >
            Stream
          </Button>
          <Button 
            variant={selectedCategory === 'events' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('events')}
          >
            Events
          </Button>
          <Button 
            variant={selectedCategory === 'plays' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('plays')}
          >
            Plays
          </Button>
          <Button 
            variant={selectedCategory === 'sports' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('sports')}
          >
            Sports
          </Button>
          <Button 
            variant={selectedCategory === 'activities' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('activities')}
          >
            Activities
          </Button>
        </div>
      </section>

      {/* Content Grid */}
      <section className="container pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {searchQuery ? `Results for "${searchQuery}"` : 
             selectedCategory === 'all' ? 'All Content' : 
             selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h2>
          {!searchQuery && (
            <Button variant="ghost">
              See All
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
        
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No results found</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Movies Now Showing</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Dune: Part Two</li>
                <li>Oppenheimer</li>
                <li>The Batman Returns</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Help</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">BookMyShow</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 BookMyShow. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
