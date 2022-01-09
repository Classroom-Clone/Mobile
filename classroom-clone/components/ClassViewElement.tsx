import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { PostInterface } from '../store/interface/classroom/PostInterface';
import { AntDesign } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '../store';
import { authState } from '../store/selectors';
import { FetchPostCommentsList } from '../store/reducer/comment/action';

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
        borderBottomWidth: 2,
        height: 80
    },
    nameText: {
        flexWrap: 'wrap',
        padding: '5%',
        fontWeight: 'bold',
        color: 'white'
    },
    redirectToDetails: {
        height: 20,
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
    const dispatch = useAppDispatch();
    const token = useAppSelector(authState);

    const handlePress = () => {
        if (token) {
            FetchPostCommentsList(dispatch, token.data, post.id);
            navigation.navigate('AddComment', { id: post.id, type: 'post' });
        }
    };

    return (
        <View style={styles.class}>
            <TouchableOpacity onPress={() => navigation.navigate('PostDetails', { post: post })}>
                <View style={styles.header}>
                    <View style={{ width: 90, display: 'flex', flexDirection: 'row' }}>
                        <View style={{ marginTop: '5%', paddingLeft: '2%' }}>
                            <Icon color="white" name="circle" />
                        </View>
                        <Text style={styles.nameText}>{post.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress()}>
                <View style={styles.redirectToDetails}>
                    <AntDesign name="arrowright" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    );
}
