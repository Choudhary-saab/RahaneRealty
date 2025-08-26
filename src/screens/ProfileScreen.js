import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';

const { width } = Dimensions.get('window');

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage}>
            <Text style={styles.profileIcon}>👤</Text>
          </View>
        </View>
        
        <Text style={styles.mainText}>
          Grow your insight{'\n'}with inspiring news
        </Text>
        
        <Text style={styles.subText}>
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        </Text>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <TouchableOpacity 
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('SignInScreen2')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        
        {/* Social Login Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
            <Text style={styles.facebookText}>f</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.socialButton, styles.google]}>
            <Text style={styles.googleText}>G</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.socialButton, styles.apple]}>
            <Text style={styles.appleText}>🍎</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Dark background from Figma
  },
  profileSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  profileImageContainer: {
    marginBottom: 48,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#2A2A2A',
    borderWidth: 3,
    borderColor: '#4A90E2', // Primary blue from Figma
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    fontSize: 48,
    color: '#CCCCCC',
  },
  mainText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
    fontFamily: 'System', // Use system font for consistency
  },
  subText: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    marginBottom: 60,
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 50,
  },
  getStartedButton: {
    backgroundColor: '#4A90E2', // Primary blue
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 32,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  facebook: {
    backgroundColor: '#1877F2',
  },
  google: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  apple: {
    backgroundColor: '#000000',
  },
  facebookText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  googleText: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  appleText: {
    fontSize: 20,
  },
});
