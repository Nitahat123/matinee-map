import { movies } from "@/data/movies";
import MovieCard from "@/components/MovieCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
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

      {/* Movie Categories */}
      <section className="container py-8">
        <div className="flex items-center gap-4 mb-6 overflow-x-auto pb-2">
          <Button variant="default">Movies</Button>
          <Button variant="outline">Stream</Button>
          <Button variant="outline">Events</Button>
          <Button variant="outline">Plays</Button>
          <Button variant="outline">Sports</Button>
          <Button variant="outline">Activities</Button>
        </div>
      </section>

      {/* Recommended Movies */}
      <section className="container pb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Recommended Movies</h2>
          <Button variant="ghost">
            See All
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
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
