import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';

const styles = StyleSheet.create({
    class: {
        backgroundColor: 'grey',
        margin: '10%',
        height: '100px',
        flexWrap: 'wrap'
    },
    header: {
        display: 'flex',
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'grey',
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    nameText: {
        flexWrap: 'wrap',
        padding: '5%',
        fontWeight: 'bold',
        color: 'white'
    },
    teacherText: {
        flexWrap: 'wrap',
        color: 'white'
    }
});

export default function ClassViewElement({ navigation }: any) {
    const [isAnnouncement, setIsAnnouncement] = useState(false);

    return (
        <View style={styles.class}>
            <View style={styles.header} >
                <View style={{ width: '60%', height: '100%', display: 'flex', flexDirection: 'row' }}>
                    <View style={{ marginTop: '5%', paddingLeft: '2%' }}>
                        {isAnnouncement ?
                            <Icon
                                color='white'
                                name='circle'
                            />
                            :
                            <Icon
                                color='white'
                                name='details'
                            />}
                    </View>
                    <Text style={styles.nameText}>Ogłoszenie</Text>
                </View>
                <View style={{ width: '40%', height: '100%' }}>
                    <Text style={styles.teacherText}>Termin:</Text>
                    <Text style={styles.teacherText}>11.10.2023</Text>
                </View>
            </View>
            <View>
                <Text>Dodaj komentarz</Text>
                <Button onPress={() => navigation.navigate('HomeLogged')}></Button>
            </View>
        </View>
    );
}
