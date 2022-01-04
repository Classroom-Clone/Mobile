import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { PostInterface } from '../store/interface/classroom/PostInterface';
import { AntDesign } from '@expo/vector-icons';

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
    post: PostInterface;
    navigation: any;
}

export default function ClassViewElement(props: IDefaultProps) {
    const { post, navigation } = props;

    console.log(post);
    return (
        <View style={styles.class}>
            <View style={styles.header}>
                <View
                    style={{ width: '90%', height: '100%', display: 'flex', flexDirection: 'row' }}
                >
                    <View style={{ marginTop: '5%', paddingLeft: '2%' }}>
                        <Icon color="white" name="circle" />
                        {/* <Icon color="white" name="details" /> */}
                    </View>
                    <Text style={styles.nameText}>{post.title}</Text>
                </View>
            </View>
            <View style={styles.redirectToDetails}>
                <AntDesign name="arrowright" size={24} color="black" />
            </View>
        </View>
    );
}
