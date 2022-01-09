import { Input } from 'react-native-elements';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { View } from '../components/Themed';
import { Register } from '../store/reducer/auth/action';
import { useAppDispatch } from '../store';
import Toast from 'react-native-toast-message';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    title: {
        fontSize: 20,
        marginLeft: '5%',
        marginRight: '5%',
        textAlign: 'center'
    },
    input: {
        marginVertical: 10,
        textAlign: 'center',
        height: 1,
        width: '50%',
        color: 'white'
    },
    button: {
        padding: '10%'
    },
    view: {
        marginTop: '10'
    }
});

export default function Registration() {
    const dispatch = useAppDispatch();

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const handleRegister = () => {
        if (
            login.length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0 &&
            firstName.length > 0 &&
            lastName.length > 0
        ) {
            if (password === confirmPassword) {
                Register(dispatch, {
                    email: login,
                    first_name: firstName,
                    last_name: lastName,
                    password: password,
                    password_confirmation: confirmPassword
                });
                setPassword('');
                setConfirmPassword('');
                setFirstName('');
                setLastName('');
                setLogin('');
            } else {
                Toast.show({
                    type: 'error',
                    text1: 'Hasła powinny być takie same'
                });
            }
        } else {
            Toast.show({
                type: 'error',
                text1: 'Usupełnij wszystkie pola'
            });
        }
    };
    return (
        <View style={styles.container}>
            <View>
                <Input
                    style={styles.input}
                    placeholder="Imię"
                    value={firstName}
                    onChangeText={(value) => setFirstName(value)}
                />

                <Input
                    style={styles.input}
                    placeholder="Nazwisko"
                    value={lastName}
                    onChangeText={(value) => setLastName(value)}
                />

                <Input
                    style={styles.input}
                    placeholder="Login"
                    value={login}
                    onChangeText={(value) => setLogin(value)}
                />

                <Input
                    style={styles.input}
                    placeholder="Hasło"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                />
                <Input
                    style={styles.input}
                    placeholder="Powtórz hasło"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(value) => setConfirmPassword(value)}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Zarejestruj"
                    style={styles.button}
                    buttonStyle={{ backgroundColor: 'grey' }}
                    onPress={() => handleRegister()}
                />
            </View>
        </View>
    );
}
