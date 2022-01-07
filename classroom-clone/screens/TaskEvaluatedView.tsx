import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Text } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import CommentSectionComponent from '../components/CommentSectionComponent';
import EvaluatedAtachmentsComponent from '../components/EvaluatedAtachmentsComponent';
import EvaluatedCommentComponent from '../components/EvaluatedCommentComponent';
import StyledButtonComponent from '../components/StyledButtonComponent';
import { View } from '../components/Themed';
import { useAppDispatch, useAppSelector } from '../store';
import { AttachmentInterface } from '../store/interface/classroom/AssignmentInterface';
import { FetchSubmissionCommentsList } from '../store/reducer/comment/action';
import { authState, submissionCommentsListState } from '../store/selectors';
import {
    PutEvaluateSubmission,
    PutReturnSubmission
} from '../store/service/classroom/SubmissionService';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default function TaskEvaluatedView({ route }: any) {
    const { attachments, user, id } = route?.params;
    const attachmentsList: Array<AttachmentInterface> = attachments;
    const [points, setPoints] = React.useState(0);
    const token = useAppSelector(authState);
    const dispatch = useAppDispatch();
    const comments = useAppSelector(submissionCommentsListState);

    React.useEffect(() => {
        if (token !== null) FetchSubmissionCommentsList(dispatch, token.data, id);
    }, []);

    const handleReturnSubmission = () => {
        if (token) {
            PutReturnSubmission(token.data, id);
            Toast.show({
                type: 'success',
                text1: 'Pomyślnie zwrócono zadanie'
            });
        }
    };

    const handleEvaluateSubmission = () => {
        if (token && points > 0) {
            PutEvaluateSubmission(token.data, id, { points: points });
            Toast.show({
                type: 'success',
                text1: 'Pomyślnie oceniono zadanie'
            });
        } else {
            Toast.show({
                type: 'error',
                text1: 'Podaj ilość punktów'
            });
        }
    };

    return (
        <View style={styles.container}>
            <EvaluatedAtachmentsComponent attachments={attachmentsList} user={user} />
            <EvaluatedCommentComponent id={id} />
            <View>
                <Input
                    style={{
                        color: 'white',
                        width: 150,
                        textAlign: 'center'
                    }}
                    keyboardType="numeric"
                    multiline
                    placeholder="Ocena"
                    onChangeText={(value) => setPoints(Number(value))}
                />
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        borderBottomColor: 'grey',
                        borderBottomWidth: 2
                    }}
                >
                    <StyledButtonComponent
                        method={() => handleEvaluateSubmission()}
                        title="Oceń"
                        width={100}
                    />
                    <StyledButtonComponent
                        method={() => handleReturnSubmission()}
                        title="Zwróć"
                        width={100}
                    />
                </View>
                <Text
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        padding: 10
                    }}
                    h3
                >
                    Komentarze
                </Text>
                {comments !== null && <CommentSectionComponent comments={comments.data} />}
            </View>
        </View>
    );
}
