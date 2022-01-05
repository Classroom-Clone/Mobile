import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { FAB, Text } from 'react-native-elements';
import AssigmentComponent from '../components/AssigmentComponent';
import { useAppDispatch, useAppSelector } from '../store';
import { assigmentsListState, authState } from '../store/selectors';
import { FetchAssigmentsList } from '../store/reducer/classroom/action';

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

export default function ClassAssigmentsView({ navigation, route }: any) {
    const { color, name, id } = route?.params.classe;
    const token = useAppSelector(authState);

    const dispatch = useAppDispatch();
    const assigments = useAppSelector(assigmentsListState);

    React.useEffect(() => {
        if (token !== null) FetchAssigmentsList(dispatch, token.data, id);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: '100%', height: '20%', backgroundColor: color }}>
                <Text h4 style={styles.lessonText}>
                    {name}
                </Text>
            </View>
            <ScrollView>
                {assigments?.data.map((assigment) => (
                    <AssigmentComponent
                        navigation={navigation}
                        assigment={assigment}
                        key={assigment.id}
                    />
                ))}
            </ScrollView>
            <FAB
                style={{ paddingTop: 10 }}
                icon={{ name: 'add', color: '#C0C0C0' }}
                color="#3E3E3E"
                placement="right"
            />
        </SafeAreaView>
    );
}
