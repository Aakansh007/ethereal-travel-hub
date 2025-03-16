
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlaneLanding, PlaneTakeoff, ShoppingBag, User } from 'lucide-react';
import Layout from '../components/Layout';

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-12 animate-fade-in">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-airport-primary">
            Your Gateway to the World
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience world-class service and seamless connections at Cloud 9 International Airport.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
          {[
            { icon: PlaneLanding, text: "View Arrivals", path: "/flights?type=arrivals" },
            { icon: PlaneTakeoff, text: "View Departures", path: "/flights?type=departures" },
            { icon: ShoppingBag, text: "Duty-Free Shopping", path: "/shopping" },
            { icon: User, text: "Login for Services", path: "/portal" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className="group relative overflow-hidden rounded-xl bg-white/40 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-airport-primary/10 to-airport-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex flex-col items-center gap-4">
                <item.icon className="w-8 h-8 text-airport-primary" />
                <span className="text-gray-800 font-medium">{item.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
