import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';
import ArchivedClasses from "../screens/ArchivedClasses";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} options={{ title: 'Strona Główna' }} />
            <Drawer.Screen name="ArchivedClasses" component={ArchivedClasses} options={{ title: 'Zarchiwizowane klasy' }} />
        </Drawer.Navigator>
    );
};

export default MyDrawer;
