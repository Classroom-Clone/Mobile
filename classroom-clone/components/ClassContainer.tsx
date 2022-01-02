import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    class: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'grey',
        margin: '10%',
        height: '100px',
        flexWrap: 'wrap'
    },
    nameText: {
        flexWrap: 'wrap',
        height: '100%',
        width: '100%',
        padding: '5%',
        fontWeight: 'bold'
    },
    teacherText: {
        padding: '5%',
        textAlign: 'right'
    }
});

export default function ClassContainer(props: any) {
    const { name, teacher, color } = props;

    return (
        <TouchableOpacity style={styles.class}>
            <View style={{ width: '40%', height: '100%', backgroundColor: color }} />
            <View style={{ height: '100%', width: '60%' }}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.teacherText}>{teacher}</Text>
            </View>
        </TouchableOpacity >
    );
}
