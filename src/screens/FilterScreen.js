import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  TextInput, 
  ScrollView 
} from 'react-native';

export default function FilterScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('City');
  const [selectedBuildingType, setSelectedBuildingType] = useState('Residential');
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);

  const togglePropertyType = (type) => {
    setSelectedPropertyTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const cities = [
    { name: 'Noida', icon: '🏛️' },
    { name: 'Greater Noida', icon: '🏢' },
    { name: 'Ghaziabad', icon: '🏘️' },
    { name: 'Yeida', icon: '💎' },
    { name: 'Delhi NCR', icon: '🏙️' },
    { name: 'Gurgaon', icon: '🏗️' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>← Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.clearText}>🔄 Clear</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            placeholder="Search Property"
            style={styles.searchInput}
            placeholderTextColor="#999999"
          />
          <TouchableOpacity style={styles.filterIcon}>
            <Text style={styles.filterText}>⚙️</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.micButton}>
          <Text style={styles.micText}>🎤</Text>
        </TouchableOpacity>
      </View>

      {/* City/Map Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'City' && styles.selectedTab]}
          onPress={() => setSelectedTab('City')}
        >
          <Text style={[styles.tabText, selectedTab === 'City' && styles.selectedTabText]}>
            City
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Map' && styles.selectedTab]}
          onPress={() => setSelectedTab('Map')}
        >
          <Text style={[styles.tabText, selectedTab === 'Map' && styles.selectedTabText]}>
            Map
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* City Icons */}
        <View style={styles.cityGrid}>
          {cities.map((city, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.cityCard}
            >
              <View style={styles.cityIconContainer}>
                <Text style={styles.cityIcon}>{city.icon}</Text>
              </View>
              <Text style={styles.cityName}>{city.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Building Type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Building Type</Text>
          <View style={styles.buildingTypeContainer}>
            {['Residential', 'Commercial'].map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.buildingTypeButton,
                  selectedBuildingType === type && styles.buildingTypeButtonActive
                ]}
                onPress={() => setSelectedBuildingType(type)}
              >
                <Text style={[
                  styles.buildingTypeText,
                  selectedBuildingType === type && styles.buildingTypeTextActive
                ]}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Property Type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Property Type</Text>
          <View style={styles.propertyTypeContainer}>
            {(selectedBuildingType === 'Residential' 
              ? ['Apartment', 'Plot', 'Villa', 'Ind Floor', 'Studio'] 
              : ['Office Space', 'Retail Shop']
            ).map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.propertyTypeButton,
                  selectedPropertyTypes.includes(type) && styles.propertyTypeButtonActive
                ]}
                onPress={() => togglePropertyType(type)}
              >
                <Text style={[
                  styles.propertyTypeText,
                  selectedPropertyTypes.includes(type) && styles.propertyTypeTextActive
                ]}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Set Filter Button */}
        <TouchableOpacity 
          style={styles.setFilterButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.setFilterText}>Set Filter</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A90E2',
  },
  clearText: {
    fontSize: 16,
    color: '#4A90E2',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  filterIcon: {
    padding: 4,
  },
  filterText: {
    fontSize: 16,
  },
  micButton: {
    backgroundColor: '#4A90E2',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  micText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#4A90E2',
    marginHorizontal: 4,
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor: '#4A90E2',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
  },
  selectedTabText: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  cityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  cityCard: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  cityIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#F0F7FF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cityIcon: {
    fontSize: 24,
  },
  cityName: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
    fontWeight: '500',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  buildingTypeContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  buildingTypeButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#4A90E2',
    alignItems: 'center',
  },
  buildingTypeButtonActive: {
    backgroundColor: '#4A90E2',
  },
  buildingTypeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
  },
  buildingTypeTextActive: {
    color: '#FFFFFF',
  },
  propertyTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  propertyTypeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4A90E2',
    marginBottom: 8,
  },
  propertyTypeButtonActive: {
    backgroundColor: '#4A90E2',
  },
  propertyTypeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A90E2',
  },
  propertyTypeTextActive: {
    color: '#FFFFFF',
  },
  setFilterButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 18,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  setFilterText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
