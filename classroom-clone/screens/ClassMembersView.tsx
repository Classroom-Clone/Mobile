import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { FlatList, View } from '../components/Themed';
import { Text } from 'react-native-elements';
import ClassViewElement from '../components/ClassViewElement';
import { useAppDispatch, useAppSelector } from '../store';
import { FetchClassroomList, FetchMembersList } from '../store/reducer/classroom/action';
import { authState, membersListState } from '../store/selectors';
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

export default function ClassMembersView({ navigation, route }: any) {
    const { color, name, id } = route?.params.classe;

    const token = useAppSelector(authState);

    const dispatch = useAppDispatch();
    const members = useAppSelector(membersListState);

    React.useEffect(() => {
        if (token !== null) FetchMembersList(dispatch, token.data, id);
    }, []);

    console.log(members);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: '20%', backgroundColor: color }}>
                <Text h4 style={styles.lessonText}>
                    {name}
                </Text>
            </View>
            <ScrollView >
                {members?.data.map(member => <MemberComponent member={member} />)}
            </ScrollView>
        </SafeAreaView>
    );
}
