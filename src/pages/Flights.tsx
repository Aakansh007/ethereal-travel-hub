
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '../components/Layout';
import FlightList from '../components/flights/FlightList';

const Flights = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get('type') || 'arrivals';
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Layout>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-8"
      >
        <h1 className="text-4xl font-bold text-airport-primary mb-8">Flight Information</h1>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by flight number, destination, or airline..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-2 rounded-md hover:bg-gray-100">
            <Filter className="w-5 h-5" />
          </button>
        </div>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="arrivals">Arrivals</TabsTrigger>
            <TabsTrigger value="departures">Departures</TabsTrigger>
          </TabsList>
          <TabsContent value="arrivals" className="space-y-4">
            <FlightList type="arrival" searchTerm={searchTerm} />
          </TabsContent>
          <TabsContent value="departures" className="space-y-4">
            <FlightList type="departure" searchTerm={searchTerm} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </Layout>
  );
};

export default Flights;
