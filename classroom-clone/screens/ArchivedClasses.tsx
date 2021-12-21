import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {View} from '../components/Themed';
import ClassContainer from "../components/ClassContainer";
import {API_URL} from "@env"

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        marginBottom: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonStyle: {
        backgroundColor: 'rgba(78, 116, 289, 1)',
        borderRadius: 3,
    },
    containerStyle: {
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
    }
});

export default function ArchivedClasses() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [totalResults, setTotalResults] = useState(0)
    const [perPage, setPerPage] = useState(15);

    const getArchivedClasses = async () => {
        try {
            const URL = API_URL + "me/classrooms?perPage=" + perPage;
            const USER_TOKEN = "token";

            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + USER_TOKEN
                },
            });
            const json = await response.json();

            setData(json.data);
            setTotalResults(json.pagination.total);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const renderClassContainer = ({item}: { item: any }) => (
        <ClassContainer
            name={item.name}
            color={item.color}
        />
    );

    const renderFooter = () => {
        return (
            <View style={styles.footer}>
                <Button
                    title={"Załaduj więcej"}
                    buttonStyle={styles.buttonStyle}
                    containerStyle={styles.containerStyle}
                    onPress={() => {
                        setPerPage(perPage + 15);
                        getArchivedClasses().finally();
                    }}
                />
            </View>
        );
    };

    useEffect(() => {
        getArchivedClasses().finally();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator style={styles.indicator} size={"large"}/> : (
                <div>
                    <FlatList
                        data={data}
                        renderItem={renderClassContainer}
                        keyExtractor={item => item.id}
                        ListFooterComponent={totalResults > perPage ? renderFooter : null}
                    />
                </div>
            )}
        </View>
    );
}