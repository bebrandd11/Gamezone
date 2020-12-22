// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../src/screens/home';
import ReviewDetails from '../src/screens/reviewDetails';
import About from '../src/screens/about';
import DrawerContant from '../routes/drawer'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GameZone"
          component={drwr}
          options={{
            headerStyle: {
              backgroundColor: '#eee',
            },
            headerTintColor: '#444',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            headerStyle: {
              backgroundColor: '#eee',
            },
            headerTintColor: '#444',
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerStyle: {
              backgroundColor: '#eee',
            },
            headerTintColor: '#444',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const drwr = () => {
  return(
  <DrawerContant />
  )

}

export default App;