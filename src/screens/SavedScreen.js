import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';

export default function SavedScreen({ navigation }) {
  const savedProperties = [
    {
      id: '1',
      name: 'Sobha Apartment',
      location: 'Noida',
      price: '₹52.15 lac',
      type: 'Apartment',
      area: '1225',
      bedrooms: '3BHK',
      isFavorite: true
    },
    {
      id: '2',
      name: 'Sobha Apartment',
      location: 'Noida',
      price: '₹52.15 lac',
      type: 'Apartment',
      area: '1225',
      bedrooms: '3BHK',
      isFavorite: true
    }
  ];

  const PropertyCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.propertyCard}
      onPress={() => navigation.navigate('PropertyDetailsScreen', { property: item })}
    >
      <View style={styles.propertyImage}>
        <TouchableOpacity style={styles.favoriteIcon}>
          <Text style={styles.favoriteText}>❤️</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.propertyInfo}>
        <Text style={styles.propertyName}>{item.name}</Text>
        <Text style={styles.propertyLocation}>📍 {item.location}</Text>
        <Text style={styles.propertyPrice}>{item.price}</Text>
        
        <View style={styles.propertyTags}>
          <View style={styles.tag}>
            <Text style={styles.tagIcon}>🏠</Text>
            <Text style={styles.tagText}>{item.type}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagIcon}>📐</Text>
            <Text style={styles.tagText}>{item.area}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagIcon}>🛏️</Text>
            <Text style={styles.tagText}>{item.bedrooms}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>← Saved</Text>
        </TouchableOpacity>
      </View>

      {/* Property List */}
      <FlatList
        data={savedProperties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PropertyCard item={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📋</Text>
          <Text style={styles.navText}>Tools</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
          <Text style={styles.navIcon}>♡</Text>
          <Text style={[styles.navText, styles.activeNavText]}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A90E2',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 100,
  },
  propertyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  propertyImage: {
    height: 160,
    backgroundColor: '#E8F4FD',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
  },
  favoriteIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  favoriteText: {
    fontSize: 16,
  },
  propertyInfo: {
    padding: 16,
  },
  propertyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  propertyLocation: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  propertyPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
    marginBottom: 12,
  },
  propertyTags: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F7FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#4A90E2',
    fontWeight: '500',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  activeNavItem: {
    // Active state for Save tab
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
    color: '#666666',
  },
  activeNavText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#4A90E2',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
