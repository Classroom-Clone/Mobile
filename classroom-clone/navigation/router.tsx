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
import ClassPostView from '../screens/ClassPostView';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ClassAssigmentsView from '../screens/ClassAssigmentsView';
import ClassMembersView from '../screens/ClassMembersView';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Entypo } from '@expo/vector-icons';
import AccomplishedTasksView from '../screens/AccomplishedTasksView';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

interface IDefaultProps {
    name: string;
    navigation: any;
}

function ClassHeader(props: IDefaultProps) {
    const { name, navigation } = props;
    return (
        <View style={{ flex: 1, flexDirection: 'row', paddingTop: '20px' }}>
            <Entypo name="home" size={24} color="black" onPress={() => navigation.navigate('HomeLogged')} />
            <Text style={{ paddingLeft: '30px' }} h4>{name}</Text>
        </View>
    );
}

export function MyTabs({ route, navigation }: any) {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Klasa"
                options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="black" />,
                    headerTitle: () => <ClassHeader navigation={navigation} name={'Klasa'} />
                }}
                initialParams={{ classe: route.params }}
                component={ClassPostView}
            />
            <Tab.Screen
                name="Zadania"
                options={{ tabBarIcon: () => <FontAwesome name="book" size={24} color="black" />, headerTitle: () => <ClassHeader navigation={navigation} name={'Zadania'} /> }}
                initialParams={{ classe: route.params }}
                component={ClassAssigmentsView}
            />
            <Tab.Screen
                name="Osoby"
                options={{
                    tabBarIcon: () => <Ionicons name="ios-people-sharp" size={24} color="black" />,
                    headerTitle: () => <ClassHeader navigation={navigation} name={'Osoby'} />
                }}
                initialParams={{ classe: route.params }}
                component={ClassMembersView}
            />
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
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AcccomplishedTasks"
                    component={AccomplishedTasksView}
                    options={{ title: 'Oddane zadania' }}
                />
                <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;
