
import React from 'react';
import { motion } from 'framer-motion';
import { PlaneLanding, PlaneTakeoff } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Flight } from '@/types/flight';

interface FlightListProps {
  type: 'arrival' | 'departure';
  searchTerm: string;
}

const FlightList: React.FC<FlightListProps> = ({ type, searchTerm }) => {
  // Simulated flight data - replace with real data later
  const flights: Flight[] = [
    {
      id: '1',
      flightNumber: 'EK203',
      airline: 'Emirates',
      origin: type === 'arrival' ? 'Dubai' : 'Cloud 9',
      destination: type === 'departure' ? 'Dubai' : 'Cloud 9',
      scheduledTime: '10:00',
      status: 'On Time',
      terminal: 'T1',
      gate: 'A1'
    },
    // Add more flight data as needed
  ];

  return (
    <div className="space-y-4">
      {flights.map((flight, index) => (
        <motion.div
          key={flight.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                {type === 'arrival' ? (
                  <PlaneLanding className="w-6 h-6 text-airport-primary" />
                ) : (
                  <PlaneTakeoff className="w-6 h-6 text-airport-primary" />
                )}
                <div>
                  <h3 className="font-semibold text-lg">{flight.flightNumber}</h3>
                  <p className="text-gray-600">{flight.airline}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{type === 'arrival' ? flight.origin : flight.destination}</p>
                <p className="text-sm text-gray-500">{flight.scheduledTime}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">Terminal {flight.terminal}</p>
                <p className="text-sm text-gray-500">Gate {flight.gate}</p>
              </div>
              <div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium
                  ${flight.status === 'On Time' ? 'bg-green-100 text-green-800' : 
                    flight.status === 'Delayed' ? 'bg-red-100 text-red-800' : 
                    'bg-blue-100 text-blue-800'}`}>
                  {flight.status}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default FlightList;
