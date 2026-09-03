import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const FlightDetailsScreen = ({ navigation }) => {
  const flight = navigation.getParam('flight');
  const rows = [
    ['Status', flight.status],
    ['Departure', flight.departure],
    ['Arrival', flight.arrival],
    ['Gate', flight.gate],
    ['Aircraft', flight.aircraft],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.number}>{flight.flightNumber}</Text>
      <Text style={styles.route}>{flight.origin}  →  {flight.destination}</Text>
      <View style={styles.card}>
        {rows.map(([label, value]) => (
          <View key={label} style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.note}>Operational information is designed for quick mobile access by flight teams.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f4f6f8' },
  number: { fontSize: 30, fontWeight: '700', marginTop: 20 },
  route: { fontSize: 22, fontWeight: '600', marginTop: 8, marginBottom: 24 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 18, elevation: 2 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 13, borderBottomWidth: 1, borderBottomColor: '#eee' },
  label: { color: '#667085' },
  value: { fontWeight: '600' },
  note: { color: '#667085', marginTop: 20, lineHeight: 21 },
});

export default FlightDetailsScreen;
