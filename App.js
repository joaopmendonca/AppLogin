import React from 'react';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import CreateUser from './src/screens/CreateUser/CreateUser';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.appContainer}>
        <StatusBar barStyle={'dark-content'} />
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateUser" component={CreateUser} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#E8E9F2',
  },
});

export default App;
