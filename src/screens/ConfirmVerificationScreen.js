import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';

export default function ConfirmVerificationScreen({ navigation }) {
  const [code, setCode] = useState(['', '', '', '']);

  const handleCodeChange = (digit, index) => {
    const newCode = [...code];
    newCode[index] = digit;
    setCode(newCode);
    
    // Auto-focus next input
    if (digit && index < 3) {
      // You can implement auto-focus logic here
    }
  };

  const handleVerify = () => {
    navigation.navigate('GetStartedScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Confirm Verification Code</Text>
        <Text style={styles.subtitle}>
          We've sent 4 digits verification code{'\n'}to +91 98072 XXXXX
        </Text>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.illustration}>
            <View style={styles.person} />
            <View style={styles.computer} />
            <View style={styles.envelope} />
            <View style={styles.shield} />
            <View style={styles.checkmark} />
            <View style={styles.notification} />
          </View>
        </View>

        <Text style={styles.codeLabel}>Enter Verification Code</Text>

        {/* Code Input Fields */}
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
              placeholder="0"
              placeholderTextColor="#CCCCCC"
            />
          ))}
        </View>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleVerify}
        >
          <Text style={styles.buttonText}>Verify and Create Account</Text>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },
  illustrationContainer: {
    marginBottom: 40,
  },
  illustration: {
    width: 320,
    height: 200,
    backgroundColor: '#F0F7FF',
    borderRadius: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  person: {
    position: 'absolute',
    left: 40,
    top: 70,
    width: 45,
    height: 70,
    backgroundColor: '#4A90E2',
    borderRadius: 22,
  },
  computer: {
    position: 'absolute',
    right: 40,
    top: 60,
    width: 120,
    height: 80,
    backgroundColor: '#333333',
    borderRadius: 10,
  },
  envelope: {
    position: 'absolute',
    top: 50,
    left: 140,
    width: 45,
    height: 30,
    backgroundColor: '#FFB74D',
    borderRadius: 5,
  },
  shield: {
    position: 'absolute',
    bottom: 50,
    left: 140,
    width: 35,
    height: 40,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  checkmark: {
    position: 'absolute',
    top: 30,
    right: 70,
    width: 28,
    height: 28,
    backgroundColor: '#4CAF50',
    borderRadius: 14,
  },
  notification: {
    position: 'absolute',
    bottom: 30,
    right: 60,
    width: 20,
    height: 20,
    backgroundColor: '#FF5722',
    borderRadius: 10,
  },
  codeLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 40,
    width: '100%',
  },
  codeInput: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    backgroundColor: '#F8F9FA',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignSelf: 'stretch',
    marginHorizontal: 20,
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
    textAlign: 'center',
  },
});
