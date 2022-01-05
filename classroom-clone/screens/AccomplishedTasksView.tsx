import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store';
import { FetchSubmissionsList } from '../store/reducer/classroom/action';
import { authState, submissionsListState } from '../store/selectors';
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
    const token = useAppSelector(authState);

    const dispatch = useAppDispatch();
    const submissions = useAppSelector(submissionsListState);

    React.useEffect(() => {
        if (token !== null) FetchSubmissionsList(dispatch, token.data, id);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {submissions?.data.map((submission) => (
                    <MemberComponent
                        member={submission.user}
                        navigation={navigation}
                        submission={submission}
                        key={submission.id}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}
