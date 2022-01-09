import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import Toast from 'react-native-toast-message';
import { View } from '../components/Themed';
import { useAppDispatch, useAppSelector } from '../store';
import { FetchSubmissionCommentsList } from '../store/reducer/comment/action';
import { authState } from '../store/selectors';
import { PostCommentSubmission } from '../store/service/classroom/SubmissionService';
import StyledButtonComponent from './StyledButtonComponent';

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        height: 200,
        color: 'white',
        flexWrap: 'wrap'
    }
});

interface IDefaultProps {
    id: number;
}

export default function EvaluatedCommentComponent(props: IDefaultProps) {
    const [comment, setComment] = React.useState('');
    const token = useAppSelector(authState);
    const dispatch = useAppDispatch();

    const handleCommentSubmission = () => {
        if (token) {
            PostCommentSubmission(token.data, props.id, { content: comment });
            FetchSubmissionCommentsList(dispatch, token.data, props.id);
            Toast.show({
                type: 'success',
                text1: 'Pomyślnie dodano komentarz'
            });
            setComment('');
        }
    };

    return (
        <View>
            <Input
                multiline
                style={styles.input}
                placeholder="Dodaj prywatny komentarz"
                onChangeText={(value) => setComment(value)}
            />
            {comment.length > 0 && (
                <StyledButtonComponent
                    method={() => handleCommentSubmission()}
                    title="Dodaj komentarz"
                    width={200}
                />
            )}
        </View>
    );
}
