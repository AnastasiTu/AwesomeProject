import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {CustomDrawer} from './src/navigation/CustomDrawer';

import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/stores/rootReducer';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
		<Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={CustomDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
		</Provider>
  );
}
