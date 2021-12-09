import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import NotFoundScreen from '../screens/NotFoundScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from './drawer';

const Stack = createNativeStackNavigator();



const MyStack = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;