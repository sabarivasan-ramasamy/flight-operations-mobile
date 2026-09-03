import { getFlightById, getFlights } from '../flightService';

test('returns assigned flights', async () => {
  const result = await getFlights();
  expect(result.length).toBeGreaterThan(0);
  expect(result[0]).toHaveProperty('flightNumber');
});

test('returns a flight by id', async () => {
  const result = await getFlightById('DL-1001');
  expect(result.flightNumber).toBe('DL 1001');
});

test('rejects for an unknown flight', async () => {
  await expect(getFlightById('UNKNOWN')).rejects.toThrow('Flight not found');
});
