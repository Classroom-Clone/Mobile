import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { View, FlatList } from '../components/Themed';
import ClassContainer from '../components/ClassContainer';
import { API_URL } from '@env';
import { useAppDispatch, useAppSelector } from '../store';
import { authState, classroomListState } from '../store/selectors';
import { FetchClassroomList } from '../store/reducer/classroom/action';

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
    const [data, setData] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [perPage, setPerPage] = useState(15);

    const token = useAppSelector(authState);

    const dispatch = useAppDispatch();
    const classrooms = useAppSelector(classroomListState);

    const getArchivedClasses = async () => {
        try {
            const url = API_URL + '/me/classrooms?perPage=' + perPage;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            const json = await response.json();

            setData(json.data);
            setTotalResults(json.pagination.total);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (token !== null) {
            FetchClassroomList(dispatch, token.data);
            getArchivedClasses().finally();
        }
    }, []);

    const renderClassContainer = ({ item }: { item: any }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ClassView', item)}>
            <ClassContainer name={item.name} color={item.color} />
        </TouchableOpacity>
    );

    const renderButton = () => {
        const onPress = () => {
            setPerPage(perPage + 15);
            getArchivedClasses().finally();
        };

        if (totalResults > perPage) {
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
    };

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator style={styles.indicator} size="large" />
            ) : (
                <FlatList
                    data={classrooms?.data?.filter((c) => c.is_archived)}
                    renderItem={renderClassContainer}
                    keyExtractor={(item) => item.id}
                    ListFooterComponent={renderButton()}
                />
            )}
        </View>
    );
}
