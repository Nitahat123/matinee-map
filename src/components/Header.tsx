import { Search, MapPin, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold text-transparent">
              BookMyShow
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-2 w-96">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search for Movies, Events, Plays, Sports" 
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Mumbai
          </Button>
          
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Sign In</span>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
