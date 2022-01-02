import { Input } from 'react-native-elements';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { View } from '../components/Themed';
import { FetchLogin } from '../store/reducer/auth/action';
import { useAppDispatch, useAppSelector } from '../store';
import { authState } from '../store/selectors';

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

export default function Login({ navigation }: any) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const dispatch = useAppDispatch();

    const token = useAppSelector(authState);

    const handleLoginButton = () => {
        FetchLogin(dispatch, { email, password });
        if (token !== null) {
            navigation.navigate('HomeLogged');
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Input
                    style={styles.input}
                    placeholder="Login"
                    onChangeText={(value) => setEmail(value)}
                />

                <Input
                    style={styles.input}
                    placeholder="Hasło"
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Zaloguj"
                    style={styles.button}
                    buttonStyle={{ backgroundColor: 'grey' }}
                    onPress={() => handleLoginButton()}
                />
            </View>
        </View>
    );
}
