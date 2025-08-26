module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Add this plugin - MUST BE LAST
    'react-native-worklets/plugin',
  ],
};
