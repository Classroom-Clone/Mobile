import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import NotFoundScreen from '../screens/NotFoundScreen';
import MyDrawer from './drawer';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import MainPage from '../screens/MainPage';
import ArchivedClasses from '../screens/ArchivedClasses';
import JoinClass from '../screens/JoinClass';
import ClassView from '../screens/ClassView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ClassVieww" component={ClassView} />
            <Tab.Screen name="Settings" component={ClassView} />
        </Tab.Navigator>
    );
}

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MyDrawer"
                    component={MyDrawer}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Login" component={Login} options={{ title: 'Logowanie' }} />
                <Stack.Screen
                    name="Registration"
                    component={Registration}
                    options={{ title: 'Rejestracja' }}
                />
                <Stack.Screen name="Start" component={Home} options={{ title: 'Strona Główna' }} />
                <Stack.Screen
                    name="ArchivedClasses"
                    component={ArchivedClasses}
                    options={{ title: 'Zarchiwizowane klasy' }}
                />
                <Stack.Screen
                    name="JoinClass"
                    component={JoinClass}
                    options={{ title: 'Dołącz do klasy' }}
                />
                <Stack.Screen
                    name="ClassView"
                    component={MyTabs}
                    options={{ headerShown: false, }}

                />
                <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;
