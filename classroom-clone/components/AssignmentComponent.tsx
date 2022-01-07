import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { AssignmentInterface } from '../store/interface/classroom/AssignmentInterface';

const styles = StyleSheet.create({
    class: {
        backgroundColor: 'grey',
        margin: '5%',
        height: 100,
        flexWrap: 'wrap'
    },
    header: {
        display: 'flex',
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'grey',
        borderBottomColor: 'white',
        borderBottomWidth: 2
    },
    nameText: {
        flexWrap: 'wrap',
        padding: '5%',
        fontWeight: 'bold',
        color: 'white'
    },
    redirectToDetails: {
        textAlign: 'center',
        alignItems: 'center'
    }
});
interface IDefaultProps {
    assignment: AssignmentInterface;
    navigation: any;
}

export default function AssignmentComponent(props: IDefaultProps) {
    const { assignment, navigation } = props;

    return (
        <View style={styles.class}>
            <View style={styles.header}>
                <View
                    style={{ width: '90%', height: '100%', display: 'flex', flexDirection: 'row' }}
                >
                    <View style={{ marginTop: '5%', paddingLeft: '2%' }}>
                        <Icon color="white" name="details" />
                    </View>
                    <Text style={styles.nameText}>{assignment.title}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AcccomplishedTasks', assignment)}>
                <View style={styles.redirectToDetails}>
                    <AntDesign name="arrowright" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    );
}
