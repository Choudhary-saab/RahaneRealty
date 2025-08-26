import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

export default function PropertyListScreen({ navigation, route }) {
  const { searchQuery = '', filterType = 'All' } = route?.params || {};
  
  const properties = [
    { id: '1', name: 'Sobha Apartment', location: 'Noida', price: '₹52.15 lac', type: 'Apartment' },
    { id: '2', name: 'Godrej Project', location: 'Gurgaon', price: '₹1.67 Cr', type: 'Villa' },
    { id: '3', name: 'DLF Phase 2', location: 'Delhi NCR', price: '₹89.50 lac', type: 'Apartment' },
    // Add more properties
  ];

  const PropertyItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.propertyItem}
      onPress={() => navigation.navigate('PropertyDetailsScreen', { property: item })}
    >
      <View style={styles.propertyImage} />
      <View style={styles.propertyInfo}>
        <Text style={styles.propertyName}>{item.name}</Text>
        <Text style={styles.propertyLocation}>📍 {item.location}</Text>
        <Text style={styles.propertyPrice}>{item.price}</Text>
        <Text style={styles.propertyType}>{item.type}</Text>
      </View>
      <TouchableOpacity style={styles.favoriteIcon}>
        <Text style={styles.favoriteText}>♡</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Properties</Text>
        </TouchableOpacity>
        <Text style={styles.resultCount}>{properties.length} Results</Text>
      </View>
      
      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PropertyItem item={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#E5E5E5' },
  backButton: { fontSize: 18, fontWeight: '600', color: '#4A90E2' },
  resultCount: { fontSize: 16, color: '#666666' },
  listContainer: { padding: 20 },
  propertyItem: { flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 12, marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  propertyImage: { width: 100, height: 100, backgroundColor: '#F0F7FF', borderTopLeftRadius: 12, borderBottomLeftRadius: 12 },
  propertyInfo: { flex: 1, padding: 12 },
  propertyName: { fontSize: 16, fontWeight: 'bold', color: '#000000', marginBottom: 4 },
  propertyLocation: { fontSize: 14, color: '#666666', marginBottom: 4 },
  propertyPrice: { fontSize: 16, fontWeight: '600', color: '#4A90E2', marginBottom: 4 },
  propertyType: { fontSize: 12, color: '#999999' },
  favoriteIcon: { position: 'absolute', top: 12, right: 12, width: 32, height: 32, backgroundColor: '#FFFFFF', borderRadius: 16, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
  favoriteText: { fontSize: 16, color: '#999999' }
});
