import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useAppSelector } from '../store';
import { authState } from '../store/selectors';
import { JoinToClassroom } from '../store/service/classroom/ClassroomService';

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

export default function JoinClass() {
    const [joinCode, setJoinCode] = useState('');

    const token = useAppSelector(authState);

    const joinToClass = async () => {
        if (token) {
            JoinToClassroom(token.data, joinCode);
        }
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
            <View style={{ width: '100%' }}>
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
