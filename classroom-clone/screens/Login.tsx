import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Text, View } from '../components/Themed';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    title: {
        fontSize: 20,
        marginLeft: '5%',
        marginRight: '5%',
        textAlign: 'center',
    },
    input: {
        marginVertical: 10,
        textAlign: 'center',
        height: 1,
        width: '50%'
    },
    button: {
        padding: '10%',
    },
    viwew: {
        marginTop: '10',
    }
});

export default function Login({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View>
                <Input
                    style={styles.input}
                    placeholder="Login"
                    //onChangeText={value => this.setState({ comment: value })}
                />

                <Input
                    style={styles.input}
                    placeholder="Hasło"
                    secureTextEntry={true} 
                    //onChangeText={value => this.setState({ comment: value })}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Zaloguj się"
                    style={styles.button}
                    buttonStyle={{ backgroundColor: 'grey' }}
                    onPress={() =>
                        navigation.navigate('MainPage')
                    }
                />
            </View>
        </View>
    );
}