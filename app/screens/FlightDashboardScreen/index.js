import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getFlights } from '../../services/flightService';

const statusStyle = (status) => (status === 'Boarding' ? styles.boarding : status === 'Completed' ? styles.completed : styles.scheduled);

const FlightDashboardScreen = ({ navigation }) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFlights()
      .then(setFlights)
      .catch(() => setError('Unable to load flight information.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <View style={styles.center}><ActivityIndicator size="large" /></View>;
  if (error) return <View style={styles.center}><Text>{error}</Text><TouchableOpacity onPress={() => navigation.replace('Dashboard')}><Text style={styles.link}>Retry</Text></TouchableOpacity></View>;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Flight Operations</Text>
      <Text style={styles.subtitle}>{flights.length} assigned flights</Text>
      <FlatList
        data={flights}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('FlightDetails', { flight: item })}>
            <View style={styles.row}>
              <Text style={styles.flight}>{item.flightNumber}</Text>
              <Text style={[styles.status, statusStyle(item.status)]}>{item.status}</Text>
            </View>
            <Text style={styles.route}>{item.origin}  →  {item.destination}</Text>
            <Text style={styles.meta}>Departure {item.departure}  •  Gate {item.gate}</Text>
            <Text style={styles.meta}>{item.aircraft}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6f8' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '700', marginHorizontal: 20, marginTop: 24 },
  subtitle: { fontSize: 15, color: '#667085', marginHorizontal: 20, marginTop: 6 },
  list: { padding: 20 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, elevation: 2 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  flight: { fontSize: 18, fontWeight: '700' },
  status: { paddingHorizontal: 9, paddingVertical: 5, borderRadius: 10, overflow: 'hidden', fontSize: 12 },
  boarding: { backgroundColor: '#e8f5e9' },
  scheduled: { backgroundColor: '#eef2ff' },
  completed: { backgroundColor: '#f2f4f7' },
  route: { fontSize: 22, fontWeight: '600', marginTop: 12 },
  meta: { color: '#667085', marginTop: 6 },
  link: { marginTop: 12, fontWeight: '700' },
});

export default FlightDashboardScreen;
