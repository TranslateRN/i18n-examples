import React from 'react';
import { Platform, StatusBar, View, StyleSheet, Text } from 'react-native';
import AppNavigator from './src/AppNavigator';

import "./i18n";

const App = () => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <AppNavigator />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});