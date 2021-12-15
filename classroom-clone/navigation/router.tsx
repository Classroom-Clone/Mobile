import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import NotFoundScreen from '../screens/NotFoundScreen';
import MyDrawer from './drawer';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import MainPage from '../screens/MainPage';

const Stack = createNativeStackNavigator();

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
                <Stack.Screen
                    name="MainPage"
                    component={MainPage}
                    options={{ title: 'Strona Główna' }}
                />
                <Stack.Screen name="Start" component={Home} options={{ title: 'Strona Główna' }} />
                <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MyStack;
