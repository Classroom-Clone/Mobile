import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Header from '../components/Layout/Header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }: any) => {
            return {
                headerTitle: () => <Header title='Strona główna' navigation={navigation} />
            }
        },
    },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle: { backgroundColor: '#000', height: 90 }
    }
});

export default HomeStack;