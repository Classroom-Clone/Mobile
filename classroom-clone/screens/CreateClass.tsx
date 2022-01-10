import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store';
import { authState } from '../store/selectors';
import { API_URL } from '@env';
import { View, Text } from '../components/Themed';
import { Input, Slider } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { CreateClassroom } from '../store/reducer/classroom/action';
import StyledButtonComponent from '../components/StyledButtonComponent';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282424'
    },
    input: {
        width: '50%',
        height: 1,
        color: 'white'
    },
    inputContainer: {
        marginHorizontal: 30,
        marginTop: 50,
        borderColor: 'white'
    },
    text: {
        marginTop: 30,
        marginLeft: 15,
        fontSize: 17
    },
    colorSection: {
        backgroundColor: 'transparent',
        marginHorizontal: '5%'
    },
    colorDisplay: {
        flex: 1,
        width: '50%',
        alignSelf: 'center',
        marginTop: 15,
        padding: 30
    },
    slider: {
        width: '75%',
        alignSelf: 'center',
        color: 'white'
    },
});

export default function CreateClass({ navigation }: any) {
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    let [accentColor] = useState('#ff0000');
    const [sliderValue, setSliderValue] = useState(0);

    const token = useAppSelector(authState);

    const redirectToClassroom = () => {
        navigation.navigate('HomeLogged');
    };

    const createClass = async () => {
        await CreateClassroom(dispatch, token.data, { name: name, description: description, accent_color: accentColor }).then(() => redirectToClassroom());
    };

    const hslToHex = (h: any) => {
        let s = 100;
        let l = 50 / 100;
        const a = (s * Math.min(l, 1 - l)) / 100;
        const f = (n: any) => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color)
                .toString(16)
                .padStart(2, '0');
        };
        return (accentColor = `#${f(0)}${f(8)}${f(4)}`);
    };

    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                placeholder="Nazwa zajęć"
                inputContainerStyle={styles.inputContainer}
                onChangeText={(value: string) => setName(value)}
            />
            <Input
                style={styles.input}
                placeholder="Opis"
                inputContainerStyle={styles.inputContainer}
                onChangeText={(value: string) => setDescription(value)}
            />
            <View style={styles.colorSection}>
                <Text style={styles.text}>Wybierz kolor</Text>
                <View style={[styles.colorDisplay, { backgroundColor: hslToHex(sliderValue) }]} />
                <Slider
                    style={styles.slider}
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    maximumValue={360}
                    minimumValue={0}
                    step={1}
                    allowTouchTrack
                    trackStyle={{ height: 5 }}
                    thumbStyle={{ height: 20, width: 20 }}
                    thumbTintColor={hslToHex(sliderValue)}
                />
            </View>
            <StyledButtonComponent
                method={() => createClass()}
                title="Utwórz"
                width={100}
            />
        </View>
    );
}
