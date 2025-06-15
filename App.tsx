
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
import Screen1 from './src/navigation/stack/Screen1';
import Screen2 from './src/navigation/stack/Screen2';
import Screen3 from './src/navigation/stack/Screen3';
import Screen4 from './src/navigation/stack/Screen4';
import Screen5 from './src/navigation/stack/Screen5';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='ScreenTask1' component={Screen1} options={{title:'ScreenTask1'}}></Stack.Screen>
        <Stack.Screen name='ScreenTask2' component={Screen2} options={{title:'ScreenTask2'}}></Stack.Screen>
        <Stack.Screen name='ScreenTask3' component={Screen3} options={{title:'ScreenTask3'}}></Stack.Screen>
        <Stack.Screen name='ScreenTask4' component={Screen4} options={{title:'ScreenTask4'}}></Stack.Screen>
        <Stack.Screen name='ScreenTask5' component={Screen5} options={{title:'ScreenTask5'}}></Stack.Screen>
      </Stack.Navigator>
   </NavigationContainer>
  );
}

export default App;
