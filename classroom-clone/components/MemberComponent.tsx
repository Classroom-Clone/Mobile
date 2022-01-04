import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { MemberInterface } from '../store/interface/classroom/MemberInterface';

const styles = StyleSheet.create({
    class: {
        backgroundColor: 'grey',
        margin: '5%',
        height: '50px',
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
        color: 'white',
    },
});

interface IDefaultProps {
    member: MemberInterface;
}

export default function MemberComponent(prop: IDefaultProps) {
    const { member } = prop;
    return (
        <View style={styles.class}>
            <View style={styles.header}>
                <View
                    style={{ width: '70%', height: '100%', display: 'flex', flexDirection: 'row' }}
                >
                    <View style={{ marginTop: '5%', paddingLeft: '2%' }}>
                        <Icon color="aquamarine" name="circle" />
                    </View>
                    <Text style={styles.nameText}>{member.name}</Text>
                </View>
            </View>
        </View>
    );
}
