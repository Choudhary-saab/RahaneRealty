import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity,
  Image
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { RFValue } from 'react-native-responsive-fontsize';


export default function ForgotPassword3({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSetPassword = () => {
    // Validate passwords match and set new password
    navigation.navigate('SignInScreen1'); // Navigate back to sign-in
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Reset Your Password</Text>
        <Text style={styles.subtitle}>
          Choose a strong password with a mix of{'\n'}uppercase, lowercase, numbers, and symbols.
        </Text>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.illustration}>
            <View style={styles.person} />
            <View style={styles.lock} />
            <View style={styles.shield} />
            <View style={styles.key} />
            <View style={styles.checkmark} />
          </View>
        </View>

        <Text style={styles.inputLabel}>New Password</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.lockIcon}>🔒</Text>
          <TextInput
            style={styles.input}
            placeholder="........"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={!showNewPassword}
            placeholderTextColor="#CCCCCC"
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setShowNewPassword(!showNewPassword)}
          >
            <Text style={styles.eyeText}>{showNewPassword ? '👁' : '👁‍🗨'}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.inputLabel}>Confirm Password</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.lockIcon}>🔒</Text>
          <TextInput
            style={styles.input}
            placeholder="........"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            placeholderTextColor="#CCCCCC"
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Text style={styles.eyeText}>{showConfirmPassword ? '👁' : '👁‍🗨'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleSetPassword}
        >
          <Text style={styles.buttonText}>Set New Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
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
    marginBottom: 40,
    lineHeight: 20,
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
  checkmark: {
    width: 25,
    height: 25,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    position: 'absolute',
    bottom: 35,
    left: 100,
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
  lockIcon: {
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
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 32,
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
