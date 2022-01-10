import * as React from 'react';
import { Linking, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../components/Themed';
import { Text } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../store';
import { authState } from '../store/selectors';
import { stringDateFormat } from '../helpers/date/DateHelper';
import { DateEnum } from '../helpers/enums/DateEnum';
import StyledButtonComponent from '../components/StyledButtonComponent';
import { FetchPostCommentsList } from '../store/reducer/comment/action';
import { AssignmentInterface } from '../store/interface/classroom/AssignmentInterface';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282424'
    },
    nameText: {
        flexWrap: 'wrap',
        padding: '2%',
        fontWeight: 'bold',
        color: 'white'
    },
    text: {
        flexWrap: 'wrap',
        padding: '2%',
        color: 'white'
    },
    attachmentElement: {
        paddingTop: '1%',
        paddingLeft: '5%'
    },
    textDate: {
        flexWrap: 'wrap',
        paddingTop: '2%',
        paddingRight: '2%',
        color: 'white',
        textAlign: 'right'
    }
});

export default function AssignmentDetailsView({ navigation, route }: any) {
    const { assignment } = route?.params;
    const assignmentDetails: AssignmentInterface = assignment;
    const dispatch = useAppDispatch();
    const token = useAppSelector(authState);

    const handleComments = () => {
        if (token) {
            FetchPostCommentsList(dispatch, token.data, assignmentDetails.id);
            navigation.navigate('AddComment', { id: assignmentDetails.id, type: 'assignments' });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.textDate}>
                    Utworzono: {stringDateFormat(assignmentDetails.created_at, DateEnum.DateTime)}
                </Text>
                <Text h3 style={styles.text}>
                    {assignmentDetails.title}
                </Text>
            </View>
            <ScrollView>
                <Text style={styles.text}>{assignmentDetails.content}</Text>
                {assignmentDetails.attachments.length !== 0 && (
                    <Text h4 style={styles.nameText}>
                        Załączniki:
                    </Text>
                )}
                {assignmentDetails.attachments.map((attachment) => (
                    <TouchableOpacity
                        key={attachment.id}
                        onPress={() => Linking.openURL(attachment.url)}
                    >
                        <View style={styles.attachmentElement}>
                            <Text style={styles.nameText}>- {attachment.display_name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
                <Text style={styles.textDate}>
                    Termin oddania:{' '}
                    {stringDateFormat(assignmentDetails.due_date, DateEnum.DateTime)}
                </Text>
                <StyledButtonComponent
                    method={() => handleComments()}
                    title="Sekcja komentarzy"
                    width={300}
                />
                <StyledButtonComponent
                    method={() => navigation.navigate('ReturnTaskView', assignment)}
                    title="Oddaj zadanie"
                    width={300}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
