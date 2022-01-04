import { Octicons } from '@expo/vector-icons';
import * as React from 'react';
import { Alert, Linking, PermissionsAndroid, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Input, Text } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { View } from '../components/Themed';
import { useAppSelector } from '../store';
import { AttachmentInterface } from '../store/interface/classroom/AssigmentInterface';
import { MemberInterface } from '../store/interface/classroom/MemberInterface';
import { authState } from '../store/selectors';
import { PutReturnSubmission } from '../store/service/classroom/SubmissionService';

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        height: 200,
        color: 'white',
        flexWrap: 'wrap',
    },
});

export default function EvaluatedCommentComponent() {
    const [comment, setComment] = React.useState('');

    return (
        <View>
            <Input
                multiline
                style={styles.input}
                placeholder='Dodaj prywatny komentarz'
                onChangeText={(value) => setComment(value)}
            />
            {comment.length > 0 &&
                <Button
                    title="Dodaj komentarz"
                    buttonStyle={{
                        backgroundColor: 'grey',
                        borderWidth: 2,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                />
            }
        </View>
    );
}
