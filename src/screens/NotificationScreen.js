import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';

export default function NotificationScreen({ navigation }) {
  const notifications = [
    {
      id: '1',
      type: 'price_drop',
      title: 'Price Drop Alert!',
      message: 'Sobha City Sector 108, Gurgaon. Great ₹1.67 Cr! 2BHK Apartment',
      time: '2m',
      icon: '💰',
      color: '#FF6B35'
    },
    {
      id: '2',
      type: 'site_visit',
      title: 'Site Visit Scheduled',
      message: 'Your visit to Godrej Palm Retreat, Sector 150 is confirmed for tomorrow',
      time: '8m',
      icon: '📅',
      color: '#4A90E2'
    },
    {
      id: '3',
      type: 'feature_alert',
      title: 'New Feature Alert!',
      message: 'We\'re pleased to introduce the latest enhancements to our home-buying experience.',
      time: '14h',
      icon: '🚀',
      color: '#9C27B0'
    },
    {
      id: '4',
      type: 'property_update',
      title: 'Piyush Vira',
      message: 'We\'ve just added 12+ premium properties near Noida Expressway.',
      time: '14h',
      icon: '🏠',
      color: '#4CAF50'
    },
    {
      id: '5',
      type: 'featured_project',
      title: 'Featured Project',
      message: 'Exclusive Saya Southex Commercial Suites at Pari Chowk',
      time: '1d',
      icon: '⭐',
      color: '#FFC107'
    }
  ];

  const NotificationItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.notificationItem}
      accessibilityRole="button"
      accessibilityLabel={`Notification: ${item.title}`}
    >
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <Text style={styles.notificationIcon}>{item.icon}</Text>
      </View>
      
      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <View style={styles.timeContainer}>
            <Text style={styles.notificationTime}>{item.time}</Text>
            <TouchableOpacity 
              style={styles.moreButton}
              accessibilityRole="button"
              accessibilityLabel="More options"
            >
              <Text style={styles.moreText}>⋯</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        
        {item.type === 'price_drop' && (
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Check Now</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          accessibilityRole="button"
          accessibilityLabel="Go back"
        >
          <Text style={styles.backButton}>← Notification</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {notifications.map((item) => (
          <NotificationItem key={item.id} item={item} />
        ))}
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationIcon: {
    fontSize: 18,
  },
  contentContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
    marginRight: 8,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationTime: {
    fontSize: 12,
    color: '#666666',
    marginRight: 8,
  },
  moreButton: {
    padding: 4,
  },
  moreText: {
    fontSize: 16,
    color: '#CCCCCC',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
    marginBottom: 8,
  },
  actionButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});
