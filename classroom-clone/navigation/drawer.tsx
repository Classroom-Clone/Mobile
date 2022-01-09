import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';
import ArchivedClasses from '../screens/ArchivedClasses';
import JoinClass from '../screens/JoinClass';
import ClassView from '../screens/ClassPostView';
import MainPage from '../screens/MainPage';
import { authState } from '../store/selectors';
import { useAppSelector } from '../store';
import { MyTabs } from './router';
import OwnedClassrooms from '../screens/OwnedClassRooms';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    const token = useAppSelector(authState);

    return (
        <Drawer.Navigator>
            {token && token?.data.length > 0 ? (
                <React.Fragment>
                    <Drawer.Screen
                        name="HomeLogged"
                        component={MainPage}
                        options={{ title: 'Strona Główna' }}
                    />
                    <Drawer.Screen
                        name="OwnedClassrooms"
                        component={OwnedClassrooms}
                        options={{ title: 'Własne klasy' }}
                    />
                    <Drawer.Screen
                        name="ArchivedClasses"
                        component={ArchivedClasses}
                        options={{ title: 'Zarchiwizowane klasy' }}
                    />
                    <Drawer.Screen
                        name="JoinClass"
                        component={JoinClass}
                        options={{ title: 'Dołącz do klasy' }}
                    />
                </React.Fragment>
            ) : (
                <Drawer.Screen name="Home" component={Home} options={{ title: 'Strona Główna' }} />
            )}
        </Drawer.Navigator>
    );
};

export default MyDrawer;
