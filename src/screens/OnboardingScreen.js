import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity,
  StatusBar,
  Platform
} from 'react-native';

export default function OnboardingScreen({ navigation }) {
  const handleGetStarted = () => {
    navigation.navigate('SignInScreen1');
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#FBFBFB" />
      
      {/* Container with exact Figma dimensions */}
      <View style={styles.container}>
        
        {/* Image Placeholder Box - Exact positioning */}
        <View style={styles.imagePlaceholder} />

        {/* Blue Background Section - Exact positioning */}
        <View style={styles.blueBackground}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Grow your insight</Text>
            <Text style={styles.title}>with inspiring news</Text>
            
            <Text style={styles.subtitle}>
              Explore the world of analyzing news{'\n'}and sports where you will be{'\n'}submerged to games!
            </Text>

            {/* Get Start Button */}
            <TouchableOpacity 
              style={styles.getStartButton}
              onPress={handleGetStarted}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Get Start Now</Text>
              <View style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom Home Indicator */}
      <View style={styles.homeIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000', // Outside container background
  },

  // Main Container - Exact Figma Dimensions
  container: {
    width: 375,
    height: 812,
    borderRadius: 20,
    backgroundColor: '#FBFBFB', // Light gray background
    position: 'relative',
    overflow: 'hidden',
  },

  // Image Placeholder - Exact Figma Position
  imagePlaceholder: {
    position: 'absolute',
    width: 303,
    height: 334,
    borderRadius: 24,
    top: 97,
    left: 36,
    backgroundColor: '#C4C4C4', // Gray placeholder
    // Subtle shadow
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  // Blue Background Section - Exact Figma Position
  blueBackground: {
    position: 'absolute',
    width: 375,
    height: 527,
    backgroundColor: '#203B73', // Dark blue
    top: 285,
    left: 0,
    paddingTop: 120,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  // Text Container within Blue Background
  textContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },

  // Title Text - Perfect Typography
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 34,
    letterSpacing: -0.5,
  },

  // Subtitle Text - Perfect Typography  
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)', // 70% opacity
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
    letterSpacing: 0.1,
  },

  // Get Start Button - Perfect Styling
  getStartButton: {
    backgroundColor: '#5B88E3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    minWidth: 200,
    height: 56,
    marginTop: 20,
    // Enhanced shadow
    ...Platform.select({
      ios: {
        shadowColor: '#5B88E3',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  // Button Text
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },

  // Arrow Icon
  arrowIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 0,
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderLeftColor: '#FFFFFF',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },

  // Home Indicator
  homeIndicator: {
    position: 'absolute',
    bottom: 20,
    width: 134,
    height: 5,
    backgroundColor: '#000000',
    borderRadius: 3,
    alignSelf: 'center',
  },
});
