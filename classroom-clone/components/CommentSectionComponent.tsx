import * as React from 'react';
import { CommentInterface } from '../store/interface/comment/CommentInterface';
import { View } from './Themed';
import CommentComponent from './CommentComponent';

interface IDefaultProps {
    comments: Array<CommentInterface>;
}

export default function CommentSectionComponent(props: IDefaultProps) {
    const { comments } = props;

    return (
        <View>
            {comments?.map((comment) => (
                <CommentComponent comment={comment} key={comment.id} />
            ))}
        </View>
    );
}
