
export type FlightStatus = 'On Time' | 'Delayed' | 'Boarding' | 'Departed' | 'Arrived' | 'Cancelled';

export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin?: string;
  destination?: string;
  scheduledTime: string;
  estimatedTime?: string;
  status: FlightStatus;
  terminal: string;
  gate: string;
}
