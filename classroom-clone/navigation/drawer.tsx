import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from '../screens/Home';
import NotFoundScreen from '../screens/NotFoundScreen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="NotFoundScreens" component={NotFoundScreen} />
        </Drawer.Navigator>
    );
};
export default MyDrawer;
