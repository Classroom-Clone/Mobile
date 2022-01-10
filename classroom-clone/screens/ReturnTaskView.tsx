import * as React from 'react';
import { AssignmentInterface } from '../store/interface/classroom/AssignmentInterface';
import { useAppSelector } from '../store';
import { authState, submissionCommentsListState } from '../store/selectors';
import { View } from '../components/Themed';
import { StyleSheet } from 'react-native';
import StyledButtonComponent from '../components/StyledButtonComponent';
import { Input, Text } from 'react-native-elements';
import CommentSectionComponent from '../components/CommentSectionComponent';
import Toast from 'react-native-toast-message';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    nameText: {
        flexWrap: 'wrap',
        padding: '5%',
        color: 'white',
        fontWeight: 'bold'
    },
    input: {
        marginVertical: 10,
        height: 200,
        color: 'white',
        flexWrap: 'wrap'
    }
});

export default function ReturnTaskView({ route }: any) {
    const { assignment, id } = route?.params;
    const [comment, setComment] = React.useState('');
    const assignmentDetails: AssignmentInterface = assignment;
    const token = useAppSelector(authState);
    const comments = useAppSelector(submissionCommentsListState);

    const handleAddAssignment = () => {
        if (token) {
            Toast.show({
                type: 'success',
                text1: 'Pomyślnie dodano załącznik'
            });
        }
    };

    const handleReturnSubmission = () => {
        if (token) {
            Toast.show({
                type: 'success',
                text1: 'Pomyślnie oddano zadanie'
            });
        }
    };

    const handleCommentSubmission = () => {
        if (token) {
            Toast.show({
                type: 'success',
                text1: 'Pomyślnie dodano komentarz'
            });
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ borderBottomColor: 'grey', borderBottomWidth: 2 }}>
                <Text h4 style={styles.nameText}>
                    Załączniki:
                </Text>
                <Text h4 style={styles.nameText}>
                    Brak
                </Text>
            </View>
            <View>
                <Input
                    multiline
                    style={styles.input}
                    placeholder="Dodaj prywatny komentarz"
                    onChangeText={(value) => setComment(value)}
                />
                {comment.length > 0 && (
                    <View
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            borderBottomColor: 'grey',
                            borderBottomWidth: 2,
                            alignItems: 'center'
                        }}
                    >
                        <StyledButtonComponent
                            method={handleCommentSubmission}
                            title="Dodaj komentarz"
                            width={200}
                        />
                    </View>
                )}
            </View>
            <View
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 2,
                    alignItems: 'center'
                }}
            >
                <StyledButtonComponent
                    method={() => handleAddAssignment()}
                    title="Dodaj załącznik"
                    width={300}
                />
                <StyledButtonComponent
                    method={() => handleReturnSubmission()}
                    title="Oddaj"
                    width={150}
                />
            </View>
            <Text style={{ textAlign: 'center', color: 'white', padding: 10 }} h3>
                Komentarze
            </Text>
            {comments !== null && <CommentSectionComponent comments={comments.data} />}
        </View>
    );
}
