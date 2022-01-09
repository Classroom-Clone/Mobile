import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import { View } from '../components/Themed';
import { useAppDispatch, useAppSelector } from '../store';
import { assignmentCommentsListState, authState, postCommentsListState } from '../store/selectors';
import CommentComponent from '../components/CommentComponent';
import { CreateAssignmentComment, CreatePostComment } from '../store/reducer/comment/action';
import { CommentsListInterface } from '../store/interface/comment/CommentInterface';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default function CommentsView({ route }: any) {
    const comments: CommentsListInterface | null =
        route?.params.type === 'post'
            ? useAppSelector(postCommentsListState)
            : useAppSelector(assignmentCommentsListState);

    const [commentContent, setCommentContent] = React.useState('');
    const dispatch = useAppDispatch();
    const token = useAppSelector(authState);

    const handlePress = () => {
        if (route?.params.type === 'post' && token) {
            CreatePostComment(dispatch, token?.data, route?.params.id, { content: commentContent });
        } else if (route?.params.type === 'assignments' && token) {
            CreateAssignmentComment(dispatch, token?.data, route?.params.id, {
                content: commentContent
            });
        }
        setCommentContent('');
    };

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    {comments?.data.map((comment) => (
                        <CommentComponent key={comment.id} comment={comment} />
                    ))}
                </ScrollView>
            </SafeAreaView>
            <View>
                <Input
                    style={{ color: 'white' }}
                    placeholder="Komentarz"
                    rightIcon={
                        <Icon
                            name="sc-telegram"
                            type="evilicon"
                            color="#517fa4"
                            onPress={() => handlePress()}
                        />
                    }
                    onChangeText={(value) => setCommentContent(value)}
                />
            </View>
        </View>
    );
}
