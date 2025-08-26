import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity 
} from 'react-native';

export default function GetStarted({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.subtitle}>
          Let's login to continue exploring properties.
        </Text>

        {/* Buyer Option */}
        <TouchableOpacity 
          style={styles.optionCard}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <View style={[styles.illustration, styles.buyerIllustration]}>
            <View style={styles.personLeft} />
            <View style={styles.personRight} />
            <View style={styles.searchIcon} />
            <View style={styles.houseIcon} />
          </View>
          
          <Text style={styles.optionTitle}>I'm a Buyer</Text>
          <Text style={styles.optionDescription}>
            I want to discover the best{'\n'}properties available.
          </Text>
        </TouchableOpacity>

        {/* Agent Option */}
        <TouchableOpacity 
          style={styles.optionCard}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <View style={[styles.illustration, styles.agentIllustration]}>
            <View style={styles.agentPerson} />
            <View style={styles.clientPerson} />
            <View style={styles.handshakeIcon} />
            <View style={styles.briefcaseIcon} />
          </View>
          
          <Text style={styles.optionTitle}>I'm an Agent</Text>
          <Text style={styles.optionDescription}>
            I want to list and manage my{'\n'}properties on this platform.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.exploreButton}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={styles.exploreButtonText}>Let's Explore</Text>
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 50,
    paddingHorizontal: 20,
    lineHeight: 22,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  illustration: {
    width: 300,
    height: 120,
    borderRadius: 16,
    marginBottom: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyerIllustration: {
    backgroundColor: '#E8F4FD',
  },
  agentIllustration: {
    backgroundColor: '#F0E6F7',
  },
  personLeft: {
    position: 'absolute',
    left: 60,
    top: 35,
    width: 35,
    height: 50,
    backgroundColor: '#4A90E2',
    borderRadius: 17,
  },
  personRight: {
    position: 'absolute',
    right: 60,
    top: 35,
    width: 35,
    height: 50,
    backgroundColor: '#4A90E2',
    borderRadius: 17,
  },
  searchIcon: {
    position: 'absolute',
    top: 30,
    width: 25,
    height: 25,
    backgroundColor: '#FFB74D',
    borderRadius: 12,
  },
  houseIcon: {
    position: 'absolute',
    bottom: 25,
    width: 30,
    height: 25,
    backgroundColor: '#333333',
    borderRadius: 4,
  },
  agentPerson: {
    position: 'absolute',
    left: 80,
    top: 30,
    width: 35,
    height: 50,
    backgroundColor: '#FF9800',
    borderRadius: 17,
  },
  clientPerson: {
    position: 'absolute',
    right: 80,
    top: 30,
    width: 35,
    height: 50,
    backgroundColor: '#4A90E2',
    borderRadius: 17,
  },
  handshakeIcon: {
    position: 'absolute',
    bottom: 30,
    width: 40,
    height: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  briefcaseIcon: {
    position: 'absolute',
    top: 20,
    width: 25,
    height: 20,
    backgroundColor: '#795548',
    borderRadius: 4,
  },
  optionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  exploreButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
