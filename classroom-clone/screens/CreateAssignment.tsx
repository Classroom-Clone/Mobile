import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { useAppSelector } from '../store';
import { authState } from '../store/selectors';
import { API_URL } from '@env';
import { Text, View } from '../components/Themed';
import { Input } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-elements/dist/buttons/Button';

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
        marginTop: 40,
        marginLeft: 40,
        fontSize: 17
    },
    points: {
        width: '25%',
        color: 'white',
        textAlign: 'center'
    },
    pointsInputContainer: {
        width: '25%',
        marginTop: 30,
        borderColor: 'white'
    },
    datePicker: {
        height: 40,
        marginTop: 31,
        marginLeft: 10,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderColor: 'white'
    },
    attachments: {
        marginTop: 30,
        marginLeft: 20,
        fontSize: 17
    },
    button: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 100,
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20
    }
});

export default function CreateAssignment({ navigation }: any) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [points, setPoints] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const formatDate = (anyDate: any) => {
        return (
            ('0' + anyDate.getDate()).slice(-2) +
            '.' +
            ('0' + (anyDate.getMonth() + 1)).slice(-2) +
            '.' +
            anyDate.getFullYear()
        );
    };

    const [buttonText, setButtonText] = useState(formatDate(new Date(Date.now() + 6.048e8)));

    const token = useAppSelector(authState);

    const redirectToAssignment = () => {
        navigation.navigate('AssignmentDetails');
    };

    const createAssignment = async () => {
        const url = API_URL + '/classrooms//assignments';

        await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                title: title,
                content: content,
                points: points,
                due_date: dueDate
            })
        }).then(redirectToAssignment);
    };

    const handleInputChange = (text: string) => {
        if ((/^\d+$/.test(text) || text === '') && +text <= 100) {
            setPoints(text);
        }
        console.log(new Date().toLocaleDateString());
    };

    const onDateChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || dueDate;
        setShow(Platform.OS === 'ios');
        setDueDate(currentDate);
        let tempDate = new Date(currentDate);
        setButtonText(formatDate(tempDate));
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                placeholder="Tytuł zadania"
                inputContainerStyle={styles.inputContainer}
                onChangeText={(value: string) => setTitle(value)}
            />
            <Input
                style={styles.input}
                placeholder="Opis"
                inputContainerStyle={styles.inputContainer}
                onChangeText={(value: string) => setContent(value)}
            />
            <View style={[{ backgroundColor: 'transparent' }, { flexDirection: 'row' }]}>
                <Text style={styles.text}>Punkty:</Text>
                <Input
                    style={styles.points}
                    placeholder={'Podaj ilość'}
                    value={points}
                    inputContainerStyle={styles.pointsInputContainer}
                    onChangeText={handleInputChange}
                    keyboardType="numeric"
                    maxLength={3}
                />
            </View>
            <View style={[{ backgroundColor: 'transparent' }, { flexDirection: 'row' }]}>
                <Text style={styles.text}>Termin:</Text>
                <View style={styles.datePicker}>
                    <Button style={{ margin: 0 }} title={buttonText} onPress={showDatepicker} />
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={dueDate}
                            minimumDate={new Date()}
                            mode="date"
                            display="calendar"
                            onChange={onDateChange}
                        />
                    )}
                </View>
            </View>
            <Text style={styles.attachments}>Załączniki:</Text>
            <Button title="Utwórz" style={styles.button} onPress={createAssignment} />
        </View>
    );
}