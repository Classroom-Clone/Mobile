import * as React from 'react';
import { Text } from 'react-native-elements';
import { CommentInterface } from '../store/interface/comment/CommentInterface';
import { StyleSheet, View } from 'react-native';
import { stringDateFormat } from '../helpers/date/DateHelper';
import { DateEnum } from '../helpers/enums/DateEnum';

const styles = StyleSheet.create({
    contentText: {
        flexWrap: 'wrap',
        padding: '5%',
        color: 'white'
    },
    nameText: {
        flexWrap: 'wrap',
        padding: '5%',
        fontWeight: 'bold',
        color: 'white'
    }
});

interface IDefaultProps {
    comment: CommentInterface;
}

export default function CommentComponent(props: IDefaultProps) {
    const { comment } = props;
    return (
        <View
            key={comment.id}
            style={{
                backgroundColor: '#5c5a5a',
                marginBottom: 10
            }}
        >
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 2
                }}
            >
                <Text style={styles.nameText}>{comment.author.name}</Text>
                <Text style={styles.nameText}>
                    {stringDateFormat(comment.created_at, DateEnum.DateTime)}
                </Text>
            </View>
            <View>
                <Text style={styles.contentText}>{comment.content}</Text>
            </View>
        </View>
    );
}
