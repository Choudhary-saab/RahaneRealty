import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';

import { scale, verticalScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';



export default function SignInScreen1({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/Avatar_image.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>RAHANE REALTY</Text>
          <View style={styles.underline} />
        </View>

        {/* Welcome Section */}
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Let's login for explore continues</Text>

        {/* Form Section */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <View style={styles.emailIcon} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor="#B0B0B0"
            />
          </View>

          {/* Password Input */}
          <Text style={styles.inputLabel}>Passwords</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputIcon}>
              <View style={styles.lockIcon} />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Passwords"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor="#B0B0B0"
            />
            <TouchableOpacity style={styles.eyeButton}>
              <View style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>

          {/* Keep me signed in & Forgot password */}
          <View style={styles.optionsRow}>
            <TouchableOpacity 
              style={styles.checkboxContainer}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxActive]} />
              <Text style={styles.checkboxText}>Keep me signed in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen1')}>
              <Text style={styles.forgotText}>Forgot password</Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity 
            style={styles.signInButton}
            onPress={() => navigation.navigate('HomeScreen')}
            activeOpacity={0.9}
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
            <View style={styles.arrowIcon} />
          </TouchableOpacity>

          {/* Connect With Text */}
          <Text style={styles.connectText}>You can Connect with</Text>

          {/* Social Buttons */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
              <Text style={styles.facebookText}>f</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
              <Text style={styles.googleText}>G</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
              <Text style={styles.appleText}>🍎</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
              <Text style={styles.signUpLink}>Sign Up here</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    paddingHorizontal: 16,
    paddingTop: 40,
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

  // Welcome Section
  welcomeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#8E8E8E',
    textAlign: 'center',
    marginBottom: 32,
  },

  // Form Section
  formContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
  inputLabel: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 6,
    marginTop: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6FA',
    borderWidth: 1,
    borderColor: '#E1E5E9',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  emailIcon: {
    width: 16,
    height: 12,
    backgroundColor: '#6B7280',
    borderRadius: 2,
  },
  lockIcon: {
    width: 14,
    height: 16,
    backgroundColor: '#6B7280',
    borderRadius: 3,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    paddingVertical: 0,
  },
  eyeButton: {
    padding: 4,
  },
  eyeIcon: {
    width: 20,
    height: 12,
    backgroundColor: '#6B7280',
    borderRadius: 10,
  },

  // Options Row
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 3,
    marginRight: 8,
    backgroundColor: '#FFFFFF',
  },
  checkboxActive: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  checkboxText: {
    fontSize: 15,
    color: '#6B7280',
  },
  forgotText: {
    fontSize: 18,
    color: '#3B82F6',
    fontWeight: '500',
  },

  // Sign In Button
  signInButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 32,
    ...Platform.select({
      ios: {
        shadowColor: '#4A90E2',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginRight: 8,
  },
  arrowIcon: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 0,
    borderBottomWidth: 4,
    borderTopWidth: 4,
    borderLeftColor: '#FFFFFF',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },

  // Connect Text
  connectText: {
    fontSize: 16,
    color: '#8E8E8E',
    textAlign: 'center',
    marginBottom: 24,
  },

  // Social Buttons
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
    marginBottom: 32,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E5E9',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  facebookText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  googleText: {
    color: '#4285F4',
    fontSize: 18,
    fontWeight: 'bold',
  },
  appleText: {
    fontSize: 20,
  },

  // Sign Up Section
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  signUpText: {
    fontSize: 16,
    color: '#8E8E8E',
  },
  signUpLink: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '500',
  },
});
