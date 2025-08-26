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

export default function SignInScreen2({ navigation }) {
  const [email, setEmail] = useState('nisha@rahanerealty.com');
  const [password, setPassword] = useState('••••••••••');
  const [rememberMe, setRememberMe] = useState(true);

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
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.logoText}>RAHANE REALTY</Text>
            <View style={styles.underline} />
          </View>
          
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.subtitle}>Let's login for explore continues</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
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
            <TouchableOpacity style={styles.checkIcon}>
              <Text style={styles.checkText}>✓</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.inputLabel}>Passwords</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              style={styles.input}
              placeholder="••••••••••"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor="#333333"
            />
            <TouchableOpacity style={styles.eyeIcon}>
              <Text style={styles.eyeText}>👁</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionsRow}>
            <TouchableOpacity 
              style={styles.checkboxContainer}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                {rememberMe && <Text style={styles.checkboxTick}>✓</Text>}
              </View>
              <Text style={styles.checkboxText}>Remember me</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen1')}>
              <Text style={styles.forgotPassword}>Forgot password</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.signInButton}
            onPress={() => navigation.navigate('HomeScreen')}
          >
            <Text style={styles.buttonText}>Sign In</Text>
            <Text style={styles.arrowText}>→</Text>
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
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
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
    paddingBottom: 30,
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
    fontSize: 32,
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
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
    marginTop: 16,
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
  checkIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  eyeIcon: {
    padding: 4,
  },
  eyeText: {
    fontSize: 18,
    color: '#CCCCCC',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    borderRadius: 6,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  checkboxTick: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxText: {
    fontSize: 14,
    color: '#666666',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
  },
  signInButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 18,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
  arrowText: {
    color: '#FFFFFF',
    fontSize: 16,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  facebook: {
    backgroundColor: '#1877F2',
  },
  google: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
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
