import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Text, View } from '../components/Themed';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        marginLeft: '5%',
        marginRight: '5%',
        textAlign: 'center',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%'
    },
    button: {
        padding: '5%',
    }
});

export default function Home({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Witamy w aplikacji do zarządzania klasą online</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.button}>
                <Button
                    title="Zaloguj się"
                    style={styles.button}
                    buttonStyle={{ backgroundColor: 'grey' }}
                    onPress={() =>
                        navigation.navigate('Login')
                    }
                />
            </View>
            <Text style={styles.title}>lub</Text>
            <View style={styles.button} >
                <Button
                    buttonStyle={{ backgroundColor: 'grey' }}
                    title="Zarejestruj się"
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('Registration')
                    }
                />
            </View>
        </View>
    );
}
