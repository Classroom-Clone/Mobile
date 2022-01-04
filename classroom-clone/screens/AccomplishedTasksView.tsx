import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { FlatList, View } from '../components/Themed';
import { Text } from 'react-native-elements';
import ClassViewElement from '../components/ClassViewElement';
import { useAppDispatch, useAppSelector } from '../store';
import {
    FetchClassroomList,
    FetchMembersList,
    FetchSubmissionsList
} from '../store/reducer/classroom/action';
import { authState, membersListState, submissionsListState } from '../store/selectors';
import MemberComponent from '../components/MemberComponent';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282424'
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
    }
});

export default function AccomplishedTasksView({ navigation, route }: any) {
    const { id } = route?.params;
    console.log(route);
    const token = useAppSelector(authState);

    const dispatch = useAppDispatch();
    const submissions = useAppSelector(submissionsListState);

    React.useEffect(() => {
        if (token !== null) FetchSubmissionsList(dispatch, token.data, id);
    }, []);

    console.log(submissions);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {submissions?.data.map((submission) => (
                    <MemberComponent member={submission.user} navigation={navigation} submission={submission} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
