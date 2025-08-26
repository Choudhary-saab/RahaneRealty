import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView, 
  Switch, 
  TouchableOpacity, 
  Image 
} from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleDarkTheme = () => setDarkTheme(previousState => !previousState);
  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {/* Blue Header Background */}
        <View style={styles.headerBackground} />
        
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' }} 
              style={styles.avatar} 
            />
            <TouchableOpacity 
              style={styles.editIcon}
              accessibilityRole="button"
              accessibilityLabel="Edit profile"
            >
              <Text style={styles.editIconText}>✏️</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Kavya Sharma</Text>
          <Text style={styles.contact}>kavya@gmail.com | +91 934 000 880</Text>
        </View>

        {/* Status Cards */}
        <View style={styles.statusContainer}>
          <TouchableOpacity 
            style={[styles.statusCard, { backgroundColor: '#FFC107' }]}
            accessibilityRole="button"
            accessibilityLabel="View shortlisted properties"
          >
            <Text style={styles.statusTitle}>Shortlisted</Text>
            <Text style={styles.statusCount}>10</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.statusCard, { backgroundColor: '#4CAF50' }]}
            accessibilityRole="button"
            accessibilityLabel="View viewed properties"
          >
            <Text style={styles.statusTitle}>Viewed</Text>
            <Text style={styles.statusCount}>18</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.statusCard, { backgroundColor: '#9C27B0' }]}
            accessibilityRole="button"
            accessibilityLabel="View recent searches"
          >
            <Text style={styles.statusTitle}>Recent</Text>
            <Text style={styles.statusCount}>5</Text>
          </TouchableOpacity>
        </View>

        {/* Settings Menu */}
        <View style={styles.settingsContainer}>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>🌐</Text>
              <Text style={styles.settingLabel}>Language</Text>
            </View>
            <Text style={styles.settingValue}>English</Text>
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>🔔</Text>
              <Text style={styles.settingLabel}>Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
              thumbColor={notificationsEnabled ? '#4A90E2' : '#CCCCCC'}
              trackColor={{ false: '#E5E5E5', true: '#A8D5FF' }}
              accessibilityRole="switch"
              accessibilityLabel="Toggle notifications"
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>🔒</Text>
              <Text style={styles.settingLabel}>Security</Text>
            </View>
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>🌙</Text>
              <Text style={styles.settingLabel}>Dark Theme</Text>
            </View>
            <Switch
              value={darkTheme}
              onValueChange={toggleDarkTheme}
              thumbColor={darkTheme ? '#4A90E2' : '#CCCCCC'}
              trackColor={{ false: '#E5E5E5', true: '#A8D5FF' }}
              accessibilityRole="switch"
              accessibilityLabel="Toggle dark theme"
            />
          </View>

          <TouchableOpacity 
            style={styles.settingItem}
            accessibilityRole="button"
            accessibilityLabel="Help and support"
          >
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>❓</Text>
              <Text style={styles.settingLabel}>Help & Support</Text>
            </View>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.settingItem}
            accessibilityRole="button"
            accessibilityLabel="Contact us"
          >
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>📞</Text>
              <Text style={styles.settingLabel}>Contact Us</Text>
            </View>
            <Text style={styles.settingArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.settingItem}
            accessibilityRole="button"
            accessibilityLabel="Privacy policy"
          >
            <View style={styles.settingLeft}>
              <Text style={styles.settingIcon}>📋</Text>
              <Text style={styles.settingLabel}>Privacy Policy</Text>
            </View>
            <Text style={styles.settingArrow}>›</Text>
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
  contentContainer: {
    paddingBottom: 40,
  },
  headerBackground: {
    backgroundColor: '#4A90E2',
    height: 140,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -70,
    paddingHorizontal: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  editIconText: {
    fontSize: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  contact: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  statusCard: {
    width: 100,
    height: 80,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  statusTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  statusCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  settingsContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    fontSize: 20,
    marginRight: 16,
    width: 24,
    textAlign: 'center',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  settingValue: {
    fontSize: 16,
    color: '#666666',
  },
  settingArrow: {
    fontSize: 20,
    color: '#CCCCCC',
  },
});
