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
import { scale, verticalScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';


export default function ForgotPasswordScreen1({ navigation }) {
  const [email, setEmail] = useState('nisha@rahanerealty.com');

  const handleSendCode = () => {
    navigation.navigate('ConfirmVerificationScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.keyboardView}
      >
        {/* Rahane Realty Logo */}
        <View style={styles.logoContainer}>
          <Image
                                  source={require('../../assets/images/Avatar_image.png')}
                                  style={styles.logo}
                                  resizeMode="contain"
                                />
          <Text style={styles.logoText}>RAHANE REALTY</Text>
          <View style={styles.underline} />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Reset Your Password</Text>
          <Text style={styles.subtitle}>
            Please enter your email address below,{'\n'}and we'll send you instructions via a link.
          </Text>

          {/* Illustration */}
          <View style={styles.illustrationContainer}>
            <View style={styles.illustration}>
              <View style={styles.person} />
              <View style={styles.lock} />
              <View style={styles.shield} />
              <View style={styles.key} />
            </View>
          </View>

          <Text style={styles.inputLabel}>Phone Number</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.emailIcon}>📧</Text>
            <TextInput
              style={styles.input}
              placeholder="nisha@rahanerealty.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#333333"
            />
          </View>

          <TouchableOpacity 
            style={styles.button} 
            onPress={handleSendCode}
          >
            <Text style={styles.buttonText}>Send Verification Code</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  // Logo Section
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
  content: {
    flex: 1,
    justifyContent: 'center',
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
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  illustration: {
    width: 220,
    height: 140,
    backgroundColor: '#F0F7FF',
    borderRadius: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  person: {
    width: 55,
    height: 80,
    backgroundColor: '#4A90E2',
    borderRadius: 27,
    position: 'absolute',
    left: 35,
  },
  lock: {
    width: 45,
    height: 45,
    backgroundColor: '#333333',
    borderRadius: 12,
    position: 'absolute',
    right: 35,
    bottom: 25,
  },
  shield: {
    width: 35,
    height: 35,
    backgroundColor: '#4CAF50',
    borderRadius: 17,
    position: 'absolute',
    top: 25,
    right: 45,
  },
  key: {
    width: 25,
    height: 35,
    backgroundColor: '#FFB74D',
    borderRadius: 6,
    position: 'absolute',
    top: 35,
    left: 100,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#F8F9FA',
    marginBottom: 32,
  },
  emailIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
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
});
