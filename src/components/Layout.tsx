
import React, { Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Clock, ShoppingCart, User } from 'lucide-react';
import LoadingGlobe from './LoadingGlobe';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [taglineIndex, setTaglineIndex] = React.useState(0);
  const taglines = [
    "Connecting Journeys, Elevating Experiences.",
    "Where seamless travel meets exceptional service."
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((current) => (current + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-airport-light to-airport-medium">
      <header className="bg-airport-primary/90 backdrop-blur-sm text-white">
        <div className="container mx-auto px-4">
          <div className="py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">Cloud 9 International</Link>
            <p className="hidden md:block text-sm italic opacity-90 transition-opacity duration-1000">
              {taglines[taglineIndex]}
            </p>
            <nav className="flex gap-6">
              <Link to="/flights" className="flex items-center gap-2 hover:text-airport-light transition-colors">
                <Plane className="w-4 h-4" />
                <span className="hidden md:inline">Flights</span>
              </Link>
              <Link to="/shopping" className="flex items-center gap-2 hover:text-airport-light transition-colors">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden md:inline">Shopping</span>
              </Link>
              <Link to="/portal" className="flex items-center gap-2 hover:text-airport-light transition-colors">
                <User className="w-4 h-4" />
                <span className="hidden md:inline">Portal</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <Suspense fallback={<LoadingGlobe />}>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </Suspense>

      <footer className="bg-airport-primary/90 backdrop-blur-sm text-white mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <p className="text-sm">© 2024 Cloud 9 International Airport</p>
            <div className="flex gap-4">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Local Time: {new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
