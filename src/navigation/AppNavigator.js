import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import all your screens
import ConfirmVerificationScreen from '../screens/ConfirmVerificationScreen';
import CreateAccount from '../screens/CreateAccount';
import CreateAccount2 from '../screens/CreateAccount2';
import FilterScreen from '../screens/FilterScreen';
import ForgotPasswordScreen1 from '../screens/ForgotPasswordScreen1';
import ForgotPasswordScreen2 from '../screens/ForgotPasswordScreen2';
import ForgotPasswordScreen3 from '../screens/ForgotPasswordScreen3';
import GetStartedModalScreen from '../screens/GetStartedModalScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import PopScreens from '../screens/PopScreens';
import ProfileScreen_main from '../screens/ProfileScreen_main';
import ProfileScreen from '../screens/ProfileScreen';
import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';
import PropertyListScreen from '../screens/PropertyListScreen';
import SavedScreen from '../screens/SavedScreen';
import SignInScreen1 from '../screens/SignInScreen1';
import SignInScreen2 from '../screens/SignInScreen2';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="OnboardingScreen"
        screenOptions={{ 
          headerShown: false,
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      >
        {/* Onboarding Flow */}
        <Stack.Screen 
          name="OnboardingScreen" 
          component={OnboardingScreen}
          options={{ title: 'Welcome' }}
        />
        
        {/* Main Profile Entry */}
        <Stack.Screen 
          name="ProfileScreen_main" 
          component={ProfileScreen_main}
          options={{ title: 'Profile Main' }}
        />

        {/* Authentication Flow */}
        <Stack.Screen 
          name="SignInScreen1" 
          component={SignInScreen1}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen 
          name="SignInScreen2" 
          component={SignInScreen2}
          options={{ title: 'Sign In Enhanced' }}
        />
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccount}
          options={{ title: 'Create Account' }}
        />
        <Stack.Screen 
          name="CreateAccount2" 
          component={CreateAccount2}
          options={{ title: 'Create Account Full' }}
        />
        <Stack.Screen 
          name="ConfirmVerificationScreen" 
          component={ConfirmVerificationScreen}
          options={{ title: 'Verify Code' }}
        />

        {/* Password Reset Flow */}
        <Stack.Screen 
          name="ForgotPasswordScreen1" 
          component={ForgotPasswordScreen1}
          options={{ title: 'Reset Password' }}
        />
        <Stack.Screen 
          name="ForgotPasswordScreen2" 
          component={ForgotPasswordScreen2}
          options={{ title: 'Verify Reset Code' }}
        />
        <Stack.Screen 
          name="ForgotPasswordScreen3" 
          component={ForgotPasswordScreen3}
          options={{ title: 'Set New Password' }}
        />

        {/* Get Started Flow */}
        <Stack.Screen 
          name="GetStartedScreen" 
          component={GetStartedScreen}
          options={{ title: 'Get Started' }}
        />
        <Stack.Screen 
          name="GetStartedModalScreen" 
          component={GetStartedModalScreen}
          options={{ 
            title: 'Role Selection',
            presentation: 'modal',
            cardStyleInterpolator: ({ current, layouts }) => ({
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                ],
              },
            }),
          }}
        />

        {/* Main App Flow */}
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name="FilterScreen" 
          component={FilterScreen}
          options={{ title: 'Filters' }}
        />
        <Stack.Screen 
          name="PropertyListScreen" 
          component={PropertyListScreen}
          options={{ title: 'Properties' }}
        />
        <Stack.Screen 
          name="PropertyDetailsScreen" 
          component={PropertyDetailsScreen}
          options={{ title: 'Property Details' }}
        />
        <Stack.Screen 
          name="SavedScreen" 
          component={SavedScreen}
          options={{ title: 'Saved Properties' }}
        />

        {/* User & Settings */}
        <Stack.Screen 
          name="ProfileScreen" 
          component={ProfileScreen}
          options={{ title: 'Profile Settings' }}
        />
        <Stack.Screen 
          name="NotificationScreen" 
          component={NotificationScreen}
          options={{ title: 'Notifications' }}
        />

        {/* Modal Screens */}
        <Stack.Screen 
          name="PopScreens" 
          component={PopScreens}
          options={{ 
            title: 'Pop Up',
            presentation: 'modal',
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                opacity: current.progress,
              },
              overlayStyle: {
                opacity: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                }),
              },
            }),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
