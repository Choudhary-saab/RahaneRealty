import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image
} from 'react-native';



export default function CreateAccount1({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('98072 XXXXX');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header with Logo */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
             <Image
                        source={require('../../assets/images/Avatar_image.png')}
                        style={styles.logo}
                        resizeMode="contain"
                      />
            <Text style={styles.logoText}>RAHANE REALTY</Text>
            <View style={styles.underline} />
          </View>
          
          <Text style={styles.welcomeText}>Create Your Account</Text>
          <Text style={styles.subtitle}>Save, Connect, Discover: Your Login perks await!</Text>
        </View>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.illustration}>
            <View style={styles.person} />
            <View style={styles.phone} />
            <View style={styles.lock} />
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          <Text style={styles.inputLabel}>Phone Number</Text>
          <View style={styles.phoneContainer}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>+91</Text>
              <Text style={styles.dropdownArrow}>▼</Text>
            </View>
            <TextInput
              style={styles.phoneInput}
              placeholder="98072 XXXXX"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              placeholderTextColor="#333333"
            />
            <TouchableOpacity style={styles.checkButton}>
              <Text style={styles.checkText}>✓</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.continueButton}
            onPress={() => navigation.navigate('ConfirmVerificationScreen')}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <Text style={styles.connectText}>You can Connect with</Text>

          {/* Social Login */}
          <View style={styles.socialSection}>
            <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
              <Text style={styles.socialText}>f</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.socialButton, styles.google]}>
              <Text style={styles.socialText}>G</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.socialButton, styles.apple]}>
              <Text style={styles.socialText}>🍎</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signUpRow}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>Sign Up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E4A72',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  underline: {
    width: 120,
    height: 2,
    backgroundColor: '#1E4A72',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  illustrationContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  illustration: {
    width: 200,
    height: 150,
    backgroundColor: '#F0F7FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  person: {
    width: 60,
    height: 80,
    backgroundColor: '#4A90E2',
    borderRadius: 30,
    position: 'absolute',
    left: 30,
  },
  phone: {
    width: 80,
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E5E5E5',
    position: 'absolute',
    right: 30,
  },
  lock: {
    width: 40,
    height: 40,
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  formSection: {
    flex: 1,
    paddingHorizontal: 24,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
    marginTop: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginRight: 12,
    backgroundColor: '#F8F9FA',
  },
  countryCodeText: {
    fontSize: 16,
    color: '#000000',
    marginRight: 8,
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#666666',
  },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 16,
    backgroundColor: '#F8F9FA',
    marginRight: 12,
    color: '#000000',
  },
  checkButton: {
    width: 48,
    height: 48,
    backgroundColor: '#4A90E2',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  connectText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999999',
    marginBottom: 24,
  },
  socialSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebook: {
    backgroundColor: '#1877F2',
  },
  google: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#EEEEEE',
  },
  apple: {
    backgroundColor: '#000000',
  },
  socialText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signUpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 16,
    color: '#666666',
  },
  signUpLink: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '600',
  },
});
