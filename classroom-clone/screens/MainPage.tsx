import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, View } from '../components/Themed';
import ClassContainer from '../components/ClassContainer';
import { useAppDispatch, useAppSelector } from '../store';
import { authState, classroomListState } from '../store/selectors';
import { FetchClassroomList } from '../store/reducer/classroom/action';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default function MainPage({ navigation }: any) {
    const token = useAppSelector(authState);

    const dispatch = useAppDispatch();
    const classrooms = useAppSelector(classroomListState);

    React.useEffect(() => {
        if (token !== null)
            FetchClassroomList(dispatch, token.data)
    }, []);

    const renderClassContainer = ({ item }: { item: any }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ClassView', item)}>
            <ClassContainer name={item.name} color={item.color} />
        </TouchableOpacity>
    );

    const test = ({ item }: { item: any }) => (
        <ClassContainer name={item.name} color={item.color} />
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={classrooms?.data?.filter(c => !c.is_archived)}
                renderItem={renderClassContainer}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
