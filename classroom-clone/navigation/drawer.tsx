import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';
import ArchivedClasses from "../screens/ArchivedClasses";
import JoinClass from "../screens/JoinClass";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} options={{ title: 'Strona Główna' }} />
            <Drawer.Screen name="ArchivedClasses" component={ArchivedClasses} options={{ title: 'Zarchiwizowane klasy' }} />
            <Drawer.Screen name="JoinClass" component={JoinClass} options={{ title: 'Dołącz do klasy' }} />
        </Drawer.Navigator>
    );
};

export default MyDrawer;
