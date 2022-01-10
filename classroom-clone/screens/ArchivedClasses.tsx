import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { View, FlatList } from '../components/Themed';
import ClassContainer from '../components/ClassContainer';
import { useAppDispatch, useAppSelector } from '../store';
import { archivedClassroomListState, authState } from '../store/selectors';
import { FetchArchivedClassroomList } from '../store/reducer/classroom/action';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonStyle: {
        backgroundColor: 'rgba(78, 116, 289, 1)',
        borderRadius: 3
    },
    containerStyle: {
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10
    }
});

export default function ArchivedClasses({ navigation }: any) {
    const [isLoading, setLoading] = useState(true);
    const [perPage, setPerPage] = useState(15);

    const token = useAppSelector(authState);

    const dispatch = useAppDispatch();
    const archivedClassrooms = useAppSelector(archivedClassroomListState);

    React.useEffect(() => {
        if (token !== null) {
            FetchArchivedClassroomList(dispatch, token.data, perPage).then(() => {
                setLoading(false);
            });
        }
    }, []);

    const renderClassContainer = ({ item }: { item: any }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ClassView', item)}>
            <ClassContainer name={item.name} color={item.color} />
        </TouchableOpacity>
    );

    const renderButton = () => {
        if (archivedClassrooms && token) {
            const onPress = () => {
                setLoading(true);
                setPerPage(perPage + 15);

                FetchArchivedClassroomList(dispatch, token.data, perPage).then(() => {
                    setLoading(false);
                });
            };

            if (archivedClassrooms.pagination.total > perPage) {
                return (
                    <View style={styles.footer}>
                        <Button
                            title="Załaduj więcej"
                            buttonStyle={styles.buttonStyle}
                            containerStyle={styles.containerStyle}
                            onPress={onPress}
                        />
                    </View>
                );
            }
        }
    };

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator style={styles.indicator} size="large" />
            ) : (
                <FlatList
                    data={archivedClassrooms?.data?.filter((c) => c.is_archived)}
                    renderItem={renderClassContainer}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={renderButton()}
                />
            )}
        </View>
    );
}
