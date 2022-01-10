import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../store';
import { AssignmentInterface } from '../store/interface/classroom/AssignmentInterface';
import { FetchAssignmentCommentsList } from '../store/reducer/comment/action';
import { authState } from '../store/selectors';

const styles = StyleSheet.create({
    class: {
        backgroundColor: 'grey',
        margin: '5%',
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
        width: '100%',
        paddingBottom: 5,
        minHeight: 90
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
    assignment: AssignmentInterface;
    navigation: any;
    isOwner: boolean;
}

export default function AssignmentComponent(props: IDefaultProps) {
    const { assignment, navigation, isOwner } = props;
    const dispatch = useAppDispatch();
    const token = useAppSelector(authState);

    const handlePress = () => {
        if (token) {
            FetchAssignmentCommentsList(dispatch, token.data, assignment.id);
            navigation.navigate('AddComment', { id: assignment.id, type: 'assignments' });
        }
    };

    const handleMainPress = () => {
        if (isOwner) {
            navigation.navigate('AcccomplishedTasks', assignment);
        } else {
            navigation.navigate('AssignmentDetails', { assignment: assignment });
        }
    };

    return (
        <View style={styles.class}>
            <TouchableOpacity onPress={() => handleMainPress()}>
                <View style={styles.header}>
                    <View
                        style={{
                            width: '90%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <View style={{ marginTop: '5%', paddingLeft: '2%' }}>
                            <Icon color="white" name="details" />
                        </View>
                        <Text style={styles.nameText}>{assignment.title}</Text>
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
