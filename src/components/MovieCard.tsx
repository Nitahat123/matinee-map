import { Star, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Movie } from "@/data/movies";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">
        <div className="relative aspect-[2/3] overflow-hidden">
          <img 
            src={movie.image} 
            alt={movie.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          <Button 
            size="icon" 
            variant="ghost" 
            className="absolute top-2 right-2 bg-black/40 hover:bg-black/60 text-white"
          >
            <Heart className="h-4 w-4" />
          </Button>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1 bg-black/60 rounded px-2 py-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium text-white">{movie.rating}/10</span>
              </div>
              <span className="text-xs text-white/80">{movie.votes}</span>
            </div>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{movie.title}</h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {movie.genre.slice(0, 2).map((g) => (
              <Badge key={g} variant="secondary" className="text-xs">
                {g}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {movie.language} • {movie.duration}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MovieCard;
