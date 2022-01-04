import { Octicons } from '@expo/vector-icons';
import * as React from 'react';
import { Alert, Linking, PermissionsAndroid, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Input, Text } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Toast from 'react-native-toast-message';
import EvaluatedAtachmentsComponent from '../components/EvaluatedAtachmentsComponent';
import EvaluatedCommentComponent from '../components/EvaluatedCommentComponent';
import { View } from '../components/Themed';
import { useAppSelector } from '../store';
import { AttachmentInterface } from '../store/interface/classroom/AssigmentInterface';
import { authState } from '../store/selectors';
import { PutEvaluateSubmission, PutReturnSubmission } from '../store/service/classroom/SubmissionService';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default function TaskEvaluatedView({ route }: any) {
    const { attachments, user, id } = route?.params;
    const attachmentsList: Array<AttachmentInterface> = attachments;
    const [points, setPoints] = React.useState(0);
    const token = useAppSelector(authState);

    const handleReturnSubmission = () => {
        if (token) {
            PutReturnSubmission(token.data, id)
            Toast.show({
                type: 'success',
                text1: 'Pomyślnie zwrócono zadanie',
            });
        }
    }

    const handleEvaluateSubmission = () => {
        if (token) {
            PutEvaluateSubmission(token.data, id, { points: points })
            Toast.show({
                type: 'success',
                text1: 'Pomyślnie oceniono zadanie',
            });
        }
    }

    return (
        <View style={styles.container}>
            <EvaluatedAtachmentsComponent attachments={attachmentsList} user={user} />
            <EvaluatedCommentComponent />
            <View>
                <Input
                    style={{
                        color: 'white',
                        width: 150,
                        textAlign: 'center'
                    }}

                    keyboardType='numeric'
                    multiline
                    placeholder='Ocena'
                    onChangeText={(value) => setPoints(Number(value))}
                />
                <View style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Button
                        title="Oceń"
                        buttonStyle={{
                            backgroundColor: 'grey',
                            borderWidth: 2,
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: 100,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => handleEvaluateSubmission()}
                    />
                    <Button
                        title="Zwróć"
                        buttonStyle={{
                            backgroundColor: 'grey',
                            borderWidth: 2,
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: 100,
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={() => handleReturnSubmission()}
                    />
                </View>
            </View>
        </View>
    );
}
