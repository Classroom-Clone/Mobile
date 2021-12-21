import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { API_URL } from '@env';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginTop: '20%',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '10%',
        textAlign: 'center'
    },
    input: {
        marginVertical: 10,
        textAlign: 'center',
        height: 1,
        width: '50%',
        color: 'grey'
    },
    button: {
        padding: '10%'
    },
    buttonStyle: {
        backgroundColor: 'grey'
    }
});

export default function JoinClass({ navigation }: any) {
    const [joinCode, setJoinCode] = useState('');

    const joinToClass = async () => {
        const URL = API_URL + 'me/classrooms/join';
        const USER_TOKEN = 'token';

        await fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + USER_TOKEN
            },
            body: JSON.stringify({
                join_code: joinCode
            })
        })
            .then(function (response: Response) {
                if (response.ok) {
                    navigation.navigate('MainPage');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Aby dołączyć do zajęć wpisz kod klasy, który otrzymałeś od prowadzącego
            </Text>
            <Input
                style={styles.input}
                placeholder="Kod zajęć"
                onChangeText={(value: string) => setJoinCode(value)}
            />
            <View style={styles.button}>
                <Button
                    title="Dodaj"
                    style={styles.button}
                    buttonStyle={styles.buttonStyle}
                    onPress={joinToClass}
                />
            </View>
        </View>
    );
}
