import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity,
  Modal 
} from 'react-native';

export default function GetStartedModalScreen({ navigation, visible = true, onClose }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
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
              accessibilityRole="button"
              accessibilityLabel="Select Buyer option"
            >
              <View style={[styles.illustration, styles.buyerIllustration]}>
                <View style={styles.personLeft} />
                <View style={styles.personRight} />
                <View style={styles.searchIcon} />
                <View style={styles.houseIcon} />
              </View>
              
              <Text style={styles.optionTitle}>I'm a Buyer</Text>
              <Text style={styles.optionDescription}>
                I want to discover the best properties available.
              </Text>
            </TouchableOpacity>

            {/* Agent Option */}
            <TouchableOpacity 
              style={styles.optionCard}
              onPress={() => navigation.navigate('HomeScreen')}
              accessibilityRole="button"
              accessibilityLabel="Select Agent option"
            >
              <View style={[styles.illustration, styles.agentIllustration]}>
                <View style={styles.agentPerson} />
                <View style={styles.clientPerson} />
                <View style={styles.handshakeIcon} />
                <View style={styles.briefcaseIcon} />
              </View>
              
              <Text style={styles.optionTitle}>I'm an Agent</Text>
              <Text style={styles.optionDescription}>
                I want to list and manage my properties on this platform.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.exploreButton}
              onPress={() => navigation.navigate('HomeScreen')}
              accessibilityRole="button"
              accessibilityLabel="Let's Explore"
            >
              <Text style={styles.exploreButtonText}>Let's Explore</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#4A90E2',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 15,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  optionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  illustration: {
    width: 280,
    height: 100,
    borderRadius: 12,
    marginBottom: 16,
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
    left: 50,
    top: 30,
    width: 30,
    height: 40,
    backgroundColor: '#4A90E2',
    borderRadius: 15,
  },
  personRight: {
    position: 'absolute',
    right: 50,
    top: 30,
    width: 30,
    height: 40,
    backgroundColor: '#4A90E2',
    borderRadius: 15,
  },
  searchIcon: {
    position: 'absolute',
    top: 25,
    width: 20,
    height: 20,
    backgroundColor: '#FFB74D',
    borderRadius: 10,
  },
  houseIcon: {
    position: 'absolute',
    bottom: 20,
    width: 25,
    height: 20,
    backgroundColor: '#333333',
    borderRadius: 4,
  },
  agentPerson: {
    position: 'absolute',
    left: 70,
    top: 25,
    width: 30,
    height: 40,
    backgroundColor: '#FF9800',
    borderRadius: 15,
  },
  clientPerson: {
    position: 'absolute',
    right: 70,
    top: 25,
    width: 30,
    height: 40,
    backgroundColor: '#4A90E2',
    borderRadius: 15,
  },
  handshakeIcon: {
    position: 'absolute',
    bottom: 25,
    width: 35,
    height: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 6,
  },
  briefcaseIcon: {
    position: 'absolute',
    top: 15,
    width: 20,
    height: 15,
    backgroundColor: '#795548',
    borderRadius: 3,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 6,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 8,
  },
  exploreButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignSelf: 'stretch',
    marginTop: 20,
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  exploreButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
