import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

// Ignore specific warnings in development
LogBox.ignoreLogs([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

export default function App() {
  return (
    <>
      {/* Status Bar Configuration */}
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#FFFFFF" 
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      
      {/* Main Navigation */}
      <AppNavigator />
    </>
  );
}