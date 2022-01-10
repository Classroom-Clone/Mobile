import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, View } from '../components/Themed';
import ClassContainer from '../components/ClassContainer';
import { useAppDispatch, useAppSelector } from '../store';
import { authState, ownedClassroomListState } from '../store/selectors';
import { FetchOwnedClassroomList } from '../store/reducer/classroom/action';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SpeedDial } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default function OwnedClassRooms({ navigation }: any) {
    const token = useAppSelector(authState);
    const dispatch = useAppDispatch();
    const classrooms = useAppSelector(ownedClassroomListState);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        if (token !== null) FetchOwnedClassroomList(dispatch, token.data);
    }, []);

    const renderClassContainer = ({ item }: { item: any }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('ClassView', { item: item, isOwner: true })}
        >
            <ClassContainer name={item.name} color={item.color} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={classrooms?.data?.filter((c) => !c.is_archived)}
                renderItem={renderClassContainer}
                keyExtractor={(item) => item.id}
            />
            <SpeedDial
                isOpen={open}
                icon={{ name: 'add', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
            >
                <SpeedDial.Action
                    icon={{ name: 'add', color: '#fff' }}
                    title="Dołącz do klasy"
                    onPress={() => navigation.navigate('JoinClass')}
                />
                <SpeedDial.Action
                    icon={{ name: 'add', color: '#fff' }}
                    title="Utwórz klasę"
                    onPress={() => navigation.navigate('AddComment')}
                />
            </SpeedDial>
        </View>
    );
}
