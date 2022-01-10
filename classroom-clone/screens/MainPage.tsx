import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, View } from '../components/Themed';
import ClassContainer from '../components/ClassContainer';
import { useAppDispatch, useAppSelector } from '../store';
import { authState, classroomListState } from '../store/selectors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SpeedDial } from 'react-native-elements';
import { FetchClassroomList } from '../store/reducer/classroom/action';
import { ClassroomListInterface } from '../store/interface/classroom/ClassroomInterface';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default function MainPage({ navigation }: any) {
    const token = useAppSelector(authState);

    const dispatch = useAppDispatch();
    const classrooms: ClassroomListInterface = useAppSelector(classroomListState);
    const [open, setOpen] = React.useState(false);

    console.log(token);
    console.log(token, classrooms);


    React.useEffect(() => {
        if (token !== null) {
            console.log(token, classrooms);

            FetchClassroomList(dispatch, token.data)
        };
    }, []);

    const renderClassContainer = ({ item }: { item: any }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('ClassView', { item: item, isOwner: false })}
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
                    onPress={() => navigation.navigate('CreateClass')}
                />
            </SpeedDial>
        </View>
    );
}
