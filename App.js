import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import {OnBoarding, SignIn, SignUp, ForgotPassword, Otp} from './src';
import {
  FoodDetail,
  Checkout,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
  Map
} from './src/screens';

import CustomDrawer from './src/navigation/CustomDrawer';

import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/stores/rootReducer';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {

	React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'OnBoarding'}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Home" component={CustomDrawer} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Otp" component={Otp} />
          <Stack.Screen name="FoodDetail" component={FoodDetail} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen
            name="Success"
            component={Success}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="MyCard" component={MyCard} />
          <Stack.Screen
            name="DeliveryStatus"
            component={DeliveryStatus}
            options={{gestureEnabled: false}}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
