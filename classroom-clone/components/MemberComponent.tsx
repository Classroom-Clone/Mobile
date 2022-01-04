import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { MemberInterface } from '../store/interface/classroom/MemberInterface';
import { SubmissionInterface } from '../store/interface/classroom/SubmissionsInterface';

const styles = StyleSheet.create({
    class: {
        backgroundColor: 'grey',
        margin: '5%',
        height: 50,
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
        color: 'white'
    }
});

interface IDefaultProps {
    member: MemberInterface;
    submission: SubmissionInterface | null;
    navigation?: any;
}

export default function MemberComponent(prop: IDefaultProps) {
    const { member, submission, navigation } = prop;

    console.log(submission)
    return (
        <View style={styles.class}>
            <View style={styles.header}>
                {submission !== null ? (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TaskEvaluatedView', submission)}
                    >
                        <View
                            style={{
                                width: '70%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                        >
                            <View style={{ marginTop: '5%', paddingLeft: '2%' }}>
                                <Icon color="aquamarine" name="circle" />
                            </View>
                            <Text style={styles.nameText}>{member.name}</Text>
                        </View>
                    </TouchableOpacity>
                ) : (
                    <View
                        style={{
                            width: '70%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <View style={{ marginTop: '5%', paddingLeft: '2%' }}>
                            <Icon color="aquamarine" name="circle" />
                        </View>
                        <Text style={styles.nameText}>{member.name}</Text>
                    </View>
                )}
            </View>
        </View>
    );
}
