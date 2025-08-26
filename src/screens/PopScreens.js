import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView, 
  Modal, 
  FlatList 
} from 'react-native';

const shareOptions = [
  { key: 'facebook', label: 'Facebook', color: '#3B5998', icon: 'f' },
  { key: 'instagram', label: 'Instagram', color: '#C13584', icon: '📷' },
  { key: 'twitter', label: 'Twitter', color: '#1DA1F2', icon: '🐦' },
  { key: 'whatsapp', label: 'WhatsApp', color: '#25D366', icon: '💬' },
  { key: 'linkedin', label: 'LinkedIn', color: '#0077B5', icon: '💼' },
  { key: 'pinterest', label: 'Pinterest', color: '#E60023', icon: '📌' },
];

const amenitiesList = [
  { key: 'carParking', label: 'Basement Car Parking', icon: '🚗' },
  { key: 'waterFeatures', label: 'Water Features', icon: '⭐' },
  { key: 'yogaArea', label: 'Yoga Area', icon: '🧘‍♂️' },
  { key: 'swimmingPool', label: 'Swimming Pool', icon: '🏊‍♂️' },
  { key: 'spa', label: 'Spa', icon: '💆‍♀️' },
  { key: 'sauna', label: 'Sauna', icon: '♨️' },
  { key: 'basketball', label: 'Basketball', icon: '🏀' },
  { key: 'joggingTrack', label: 'Jogging Track', icon: '🏃‍♂️' },
  { key: 'indoorGames', label: 'Indoor Games', icon: '🎲' },
  { key: 'lushGreen', label: 'Lush Green Surroundings', icon: '🌳' },
];

const keyHighlights = `Spread Across 5 Acres | Iconic Towers Only

Nestled in a serene and expansive estate, this premium development offers an exclusive living experience with only 3 significantly designed towers on 5 acres of prime land.

• Every Unit is a Corner Unit, offering ample natural light, cross ventilation, and privacy.
• 24/7 Water and Electricity Supply guaranteed for uninterrupted comfort.
• Grand Architectural Experience featuring a luxurious entrance lobby and elegant water fountains.
• 60,000 sqft Deodar Forest with sit-outs area surrounded by Deodar Large Trees and Private Park.
• Landscaped Central Lawn for entertainment, jogging, and fitness.
• Air-Conditioned Homes with a Private Balcony in every tower for fresh air and scenic views.

Amenities & Lifestyle Benefits:
• Swimming Pool, Convenience and Leisure
• Prime Tower Rooftop Courtyards
• Large Lawn Area and Peripheral Green Landscapes for outdoor sports
• Double-height Multipurpose Hall and a Basketball Court for sports enthusiasts
• Mini Football Court for recreational activities
• Kids Play Area, Reading Room, and peaceful zones for all age groups

This project is a perfect blend of urban luxury and natural tranquility - built to exceed everyday living expectations.`;

export default function PopUpScreens({ navigation }) {
  const [showShare, setShowShare] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  const [showHighlights, setShowHighlights] = useState(false);

  const ShareModal = () => (
    <Modal 
      visible={showShare} 
      transparent 
      animationType="fade"
      onRequestClose={() => setShowShare(false)}
    >
      <View style={styles.modalBackground}>
        <View style={styles.shareModalContent}>
          <Text style={styles.modalTitle}>Share to</Text>
          
          <View style={styles.shareGrid}>
            {shareOptions.map((item) => (
              <TouchableOpacity 
                key={item.key} 
                style={[styles.shareButton, { backgroundColor: item.color }]}
                accessibilityRole="button"
                accessibilityLabel={`Share to ${item.label}`}
              >
                <View style={styles.shareIconContainer}>
                  <Text style={styles.shareIcon}>{item.icon}</Text>
                </View>
                <Text style={styles.shareLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
          
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => setShowShare(false)}
            accessibilityRole="button"
            accessibilityLabel="Close share modal"
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const AmenitiesModal = () => (
    <Modal 
      visible={showAmenities} 
      transparent 
      animationType="slide"
      onRequestClose={() => setShowAmenities(false)}
    >
      <View style={styles.modalBackground}>
        <View style={styles.amenitiesModalContent}>
          <Text style={styles.modalTitle}>Amenities</Text>
          
          <FlatList
            data={amenitiesList}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <View style={styles.amenityItem}>
                <Text style={styles.amenityIcon}>{item.icon}</Text>
                <Text style={styles.amenityLabel}>{item.label}</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            style={styles.amenitiesList}
          />
          
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => setShowAmenities(false)}
            accessibilityRole="button"
            accessibilityLabel="Close amenities modal"
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  const HighlightsModal = () => (
    <Modal 
      visible={showHighlights} 
      transparent 
      animationType="slide"
      onRequestClose={() => setShowHighlights(false)}
    >
      <View style={styles.modalBackground}>
        <View style={styles.highlightsModalContent}>
          <Text style={styles.modalTitle}>Key Highlights</Text>
          
          <ScrollView 
            style={styles.highlightsScroll}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.highlightsText}>{keyHighlights}</Text>
          </ScrollView>
          
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => setShowHighlights(false)}
            accessibilityRole="button"
            accessibilityLabel="Close highlights modal"
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.screenTitle}>Property Pop-ups</Text>
        
        {/* Trigger Buttons */}
        <TouchableOpacity 
          style={styles.triggerButton} 
          onPress={() => setShowShare(true)}
          accessibilityRole="button"
          accessibilityLabel="Open share options"
        >
          <Text style={styles.triggerButtonText}>📤 Share To</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.triggerButton} 
          onPress={() => setShowAmenities(true)}
          accessibilityRole="button"
          accessibilityLabel="View amenities"
        >
          <Text style={styles.triggerButtonText}>🏊‍♂️ Amenities</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.triggerButton} 
          onPress={() => setShowHighlights(true)}
          accessibilityRole="button"
          accessibilityLabel="View key highlights"
        >
          <Text style={styles.triggerButtonText}>⭐ Key Highlights</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modals */}
      <ShareModal />
      <AmenitiesModal />
      <HighlightsModal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 30,
  },
  triggerButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  triggerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareModalContent: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 15,
  },
  amenitiesModalContent: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    maxHeight: '80%',
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 15,
  },
  highlightsModalContent: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    maxHeight: '85%',
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
    textAlign: 'center',
  },
  shareGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  shareButton: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  shareIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  shareIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  shareLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  amenitiesList: {
    maxHeight: 300,
    marginBottom: 20,
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    marginBottom: 8,
  },
  amenityIcon: {
    fontSize: 20,
    marginRight: 16,
    width: 24,
    textAlign: 'center',
  },
  amenityLabel: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  highlightsScroll: {
    maxHeight: 400,
    marginBottom: 20,
  },
  highlightsText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#444444',
    textAlign: 'left',
  },
  closeButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignSelf: 'center',
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
