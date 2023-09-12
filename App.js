import React from 'react';

import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import Login from './src/screens/Login/Login';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle={'dark-content'} />
      <Login />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#E8E9F2',
  },
});

export default App;
