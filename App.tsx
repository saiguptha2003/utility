/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function App() {
  const Stack = createNativeStackNavigator();
  return (
      <View>
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
      </View>
  );
}

export default App;
