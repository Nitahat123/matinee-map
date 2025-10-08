import { useParams, Link } from "react-router-dom";
import { movies, showTimes, theaters } from "@/data/movies";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Calendar } from "lucide-react";
import { format } from "date-fns";

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const movieShowTimes = showTimes.filter((st) => st.movieId === id);
  const theaterIds = [...new Set(movieShowTimes.map((st) => st.theaterId))];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Movie Banner */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={movie.banner}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-48 h-72 object-cover rounded-lg shadow-2xl"
              />

              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-3">{movie.title}</h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-primary/10 rounded px-3 py-1">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="text-lg font-semibold">{movie.rating}/10</span>
                  </div>
                  <span className="text-muted-foreground">
                    {movie.votes.toLocaleString()} votes
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {movie.genre.map((g) => (
                    <Badge key={g} variant="secondary">
                      {g}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{Math.floor(movie.duration / 60)}h {movie.duration % 60}m</span>
                  </div>
                  <span>•</span>
                  <span>{movie.language}</span>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{format(new Date(movie.releaseDate), "MMM d, yyyy")}</span>
                  </div>
                </div>

                <p className="text-lg mb-4 max-w-3xl">{movie.description}</p>

                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold">Director:</span> {movie.director}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Cast:</span> {movie.cast.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show Times */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Book Tickets</h2>

        <div className="space-y-6">
          {theaterIds.map((theaterId) => {
            const theater = theaters.find((t) => t.id === theaterId);
            const theaterShows = movieShowTimes.filter((st) => st.theaterId === theaterId);

            return (
              <Card key={theaterId}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{theater?.name}</h3>
                      <p className="text-sm text-muted-foreground">{theater?.location}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {theater?.facilities.map((facility) => (
                          <Badge key={facility} variant="outline" className="text-xs">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {theaterShows.map((show) => (
                      <Link key={show.id} to={`/book/${show.id}`}>
                        <Button
                          variant="outline"
                          className="flex flex-col items-start h-auto py-3 px-4 hover:border-primary"
                        >
                          <span className="font-semibold">{show.time}</span>
                          <span className="text-xs text-muted-foreground">
                            ₹{show.price}
                          </span>
                        </Button>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
