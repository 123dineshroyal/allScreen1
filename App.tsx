
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider, TextInput} from 'react-native-paper';
import Screen1 from './src/navigation/stack/searchResult';
import Screen2 from './src/navigation/stack/paymentDetails';
import Screen3 from './src/navigation/stack/flightDetails';
import Screen4 from './src/navigation/stack/passengerDetails';
import Screen5 from './src/navigation/stack/paymentInformation';
import sajpeYatra from './src/navigation/stack/sajpeYatra';
import searchResult from './src/navigation/stack/searchResult';
import paymentDetails from './src/navigation/stack/paymentDetails';
import flightDetails from './src/navigation/stack/flightDetails';
import passengerDetails from './src/navigation/stack/passengerDetails';
import paymentInformation from './src/navigation/stack/paymentInformation';

const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name='searchResult_Screen' component={searchResult} options={{title:'Search Result Screen'}}></Stack.Screen>

        <Stack.Screen name='paymentDetails_Screen' component={paymentDetails} options={{title:'payment Details Screen'}}></Stack.Screen>

        <Stack.Screen name='flightDetails_Screen' component={flightDetails} options={{title:'flight Details Screen'}}></Stack.Screen>

        <Stack.Screen name='passengerDetails_Screen' component={passengerDetails} options={{title:'passenger Details Screen'}}></Stack.Screen>

        <Stack.Screen name='paymentInformation_Screen' component={paymentInformation} options={{title:'payment Information Screen'}}></Stack.Screen>
        
        <Stack.Screen name='sajpeYatra_Screen' component={sajpeYatra} options={{title:'Sajpe Yatra Screen'}}></Stack.Screen>

      </Stack.Navigator>
   </NavigationContainer>

  );
}

export default App;
