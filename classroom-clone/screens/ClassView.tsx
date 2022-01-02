import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { FlatList, View } from '../components/Themed';
import { Text } from 'react-native-elements';
import ClassViewElement from '../components/ClassViewElement';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    nameText: {
        flexWrap: 'wrap',
        padding: '5%',
        fontWeight: 'bold',
        color: 'white'
    },
    lessonText: {
        flexWrap: 'wrap',
        padding: '5%',
        textAlign: 'center'
    },
});

export default function ClassView({ navigation, route }: any) {
    const [data, setData] = useState([]);

    // const { color, name, id } = route?.params;

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '20%', backgroundColor: 'color' }} >
                <Text h4 style={styles.lessonText}>{'name'}</Text>
            </View>
            <ClassViewElement navigation={navigation} />
        </View>
    );
}
