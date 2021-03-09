/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as StoreProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { default as Home } from './screens/Home';
import store from './reducers/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import layouts from './assets/styles/layouts';

const ROOTSTACK = createStackNavigator();

function RootStack() {
  return (
    <ROOTSTACK.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Home'}
      detachInactiveScreens={false}
    >
      <ROOTSTACK.Screen name='Home' component={Home} options={{ swipeEnabled: false }} />
    </ROOTSTACK.Navigator>
  );
}

export default function App(){
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <SafeAreaView style={[ layouts.flex1 ]}>
          <RootStack />
        </SafeAreaView>
      </NavigationContainer>
    </StoreProvider>
  );
}

