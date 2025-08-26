import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';

export default function PropertyDetailsScreen({ navigation, route }) {
  const property = route?.params?.property || {
    name: 'Eldeco 3BHK flats at Yamuna Expressway',
    location: 'Pari Chowk, Noida',
    price: '₹1.67 Cr - ₹2.67 Cr',
    bedrooms: '03 BHK',
    floor: '4',
    bathrooms: '03'
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerAction}>
            <Text style={styles.headerActionIcon}>📤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerAction}>
            <Text style={styles.headerActionIcon}>♡</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Property Image */}
        <View style={styles.imageContainer}>
          <View style={styles.propertyImage} />
          
          {/* Property Tags */}
          <View style={styles.tagsContainer}>
            <View style={[styles.tag, styles.reraTag]}>
              <Text style={styles.tagText}>🏛️ RERA Approved</Text>
            </View>
            <View style={[styles.tag, styles.residentialTag]}>
              <Text style={styles.tagText}>🏠 Residential</Text>
            </View>
            <View style={[styles.tag, styles.launchTag]}>
              <Text style={styles.tagText}>🚀 New Launch</Text>
            </View>
          </View>
        </View>

        {/* Property Information */}
        <View style={styles.infoContainer}>
          <Text style={styles.propertyTitle}>{property.name}</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.locationIcon}>📍</Text>
            <Text style={styles.locationText}>{property.location}</Text>
            <TouchableOpacity style={styles.mapButton}>
              <Text style={styles.mapButtonText}>View on Map</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.priceText}>{property.price}</Text>

          {/* Property Details */}
          <View style={styles.detailsSection}>
            <Text style={styles.detailsTitle}>Property Details</Text>
            
            <View style={styles.detailsGrid}>
              <View style={styles.detailItem}>
                <Text style={styles.detailIcon}>🛏️</Text>
                <Text style={styles.detailLabel}>Bedrooms</Text>
                <Text style={styles.detailValue}>{property.bedrooms}</Text>
              </View>
              
              <View style={styles.detailItem}>
                <Text style={styles.detailIcon}>🏢</Text>
                <Text style={styles.detailLabel}>Floor</Text>
                <Text style={styles.detailValue}>{property.floor}</Text>
              </View>
              
              <View style={styles.detailItem}>
                <Text style={styles.detailIcon}>🚿</Text>
                <Text style={styles.detailLabel}>Bathrooms</Text>
                <Text style={styles.detailValue}>{property.bathrooms}</Text>
              </View>
            </View>
          </View>

          {/* WhatsApp Contact */}
          <TouchableOpacity style={styles.whatsappButton}>
            <Text style={styles.whatsappIcon}>📱</Text>
            <Text style={styles.whatsappText}>WhatsApp</Text>
            <Text style={styles.enquireText}>Enquire Now</Text>
          </TouchableOpacity>
        </View>
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
  backButton: {
    fontSize: 24,
    color: '#4A90E2',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerAction: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerActionIcon: {
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
  },
  propertyImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#E8F4FD',
  },
  tagsContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  reraTag: {
    backgroundColor: '#E8F5E8',
  },
  residentialTag: {
    backgroundColor: '#F0E6F7',
  },
  launchTag: {
    backgroundColor: '#FFF3E0',
  },
  tagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  infoContainer: {
    padding: 20,
  },
  propertyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  locationText: {
    fontSize: 14,
    color: '#666666',
    flex: 1,
  },
  mapButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  mapButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 24,
  },
  detailsSection: {
    marginBottom: 24,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  detailsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    alignItems: 'center',
    flex: 1,
  },
  detailIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  whatsappIcon: {
    fontSize: 18,
  },
  whatsappText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  enquireText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
