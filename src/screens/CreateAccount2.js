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
  ScrollView
} from 'react-native';

export default function CreateAccount2({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('98072 XXXXX');
  const [email, setEmail] = useState('nisha@rahanerealty.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header with Logo */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <View style={styles.logoIcon}>
                <View style={[styles.diamond, styles.diamond1]} />
                <View style={[styles.diamond, styles.diamond2]} />
                <View style={[styles.diamond, styles.diamond3]} />
                <View style={[styles.diamond, styles.diamond4]} />
                <View style={[styles.diamond, styles.diamond5]} />
                <View style={[styles.diamond, styles.diamond6]} />
                <View style={[styles.diamond, styles.diamond7]} />
                <View style={[styles.diamond, styles.diamond8]} />
                <View style={[styles.diamond, styles.diamond9]} />
              </View>
              <Text style={styles.logoText}>RAHANE REALTY</Text>
              <View style={styles.underline} />
            </View>
            
            <Text style={styles.welcomeText}>Create Your Account</Text>
            <Text style={styles.subtitle}>Create account for exploring news</Text>
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
            </View>

            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputIcon}>📧</Text>
              <TextInput
                style={styles.input}
                placeholder="nisha@rahanerealty.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor="#333333"
              />
            </View>

            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputIcon}>🔒</Text>
              <TextInput
                style={styles.input}
                placeholder="........"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#CCCCCC"
              />
              <TouchableOpacity style={styles.eyeIcon}>
                <Text style={styles.eyeText}>👁</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.inputLabel}>Confirm Passwords</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputIcon}>🔒</Text>
              <TextInput
                style={styles.input}
                placeholder="........"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholderTextColor="#CCCCCC"
              />
              <TouchableOpacity style={styles.eyeIcon}>
                <Text style={styles.eyeText}>👁</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={styles.continueButton}
              onPress={() => navigation.navigate('ConfirmVerificationScreen')}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    marginBottom: 30,
  },
  logoIcon: {
    width: 80,
    height: 80,
    position: 'relative',
    marginBottom: 16,
  },
  diamond: {
    position: 'absolute',
    width: 14,
    height: 14,
    backgroundColor: '#4A90E2',
    transform: [{ rotate: '45deg' }],
  },
  diamond1: { top: 8, left: 32 },
  diamond2: { top: 22, left: 18 },
  diamond3: { top: 22, left: 32 },
  diamond4: { top: 22, left: 46 },
  diamond5: { top: 36, left: 18 },
  diamond6: { top: 36, left: 32 },
  diamond7: { top: 36, left: 46 },
  diamond8: { top: 50, left: 32 },
  diamond9: { top: 64, left: 32, width: 20, height: 20 },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4A90E2',
    letterSpacing: 1,
  },
  underline: {
    width: 80,
    height: 3,
    backgroundColor: '#4A90E2',
    marginTop: 4,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#999999',
  },
  formSection: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
    marginTop: 16,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
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
    paddingVertical: 16,
    fontSize: 16,
    backgroundColor: '#F8F9FA',
    color: '#000000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#F8F9FA',
    marginBottom: 8,
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  eyeIcon: {
    padding: 4,
  },
  eyeText: {
    fontSize: 18,
    color: '#CCCCCC',
  },
  continueButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
