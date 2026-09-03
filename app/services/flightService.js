import { flights } from '../data/flights';

// Mock REST-style service. The interface can be replaced by fetch/axios
// when connected to a real flight operations API.
export const getFlights = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(flights), 400);
  });

export const getFlightById = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const flight = flights.find((item) => item.id === id);
      if (flight) resolve(flight);
      else reject(new Error('Flight not found'));
    }, 250);
  });
