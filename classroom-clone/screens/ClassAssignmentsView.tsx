import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { FAB, Text } from 'react-native-elements';
import AssignmentComponent from '../components/AssignmentComponent';
import { useAppDispatch, useAppSelector } from '../store';
import { assignmentsListState, authState } from '../store/selectors';
import { FetchAssignmentsList } from '../store/reducer/classroom/action';

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

export default function ClassAssignmentsView({ navigation, route }: any) {
    const { classe, isOwner } = route?.params;
    const token = useAppSelector(authState);

    const dispatch = useAppDispatch();
    const assignments = useAppSelector(assignmentsListState);

    React.useEffect(() => {
        if (token !== null) FetchAssignmentsList(dispatch, token.data, classe.id);
    }, []);

    const renderButton = () => {
        if (isOwner) {
            return (
                <FAB
                    style={{ paddingTop: 10 }}
                    icon={{ name: 'add', color: '#C0C0C0' }}
                    color="#3E3E3E"
                    placement="right"
                />
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: '20%', backgroundColor: classe.color }}>
                <Text h4 style={styles.lessonText}>
                    {classe.name}
                </Text>
            </View>
            <ScrollView>
                {assignments?.data.map((assignment) => (
                    <AssignmentComponent
                        navigation={navigation}
                        assignment={assignment}
                        key={assignment.id}
                        isOwner={isOwner}
                    />
                ))}
            </ScrollView>
            {renderButton()}
        </SafeAreaView>
    );
}
