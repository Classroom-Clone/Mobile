import * as React from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { View } from '../components/Themed';
import { AttachmentInterface } from '../store/interface/classroom/AssignmentInterface';
import { MemberInterface } from '../store/interface/classroom/MemberInterface';

const styles = StyleSheet.create({
    nameText: {
        flexWrap: 'wrap',
        padding: '5%',
        color: 'white',
        fontWeight: 'bold'
    },
    atachmentElement: {
        paddingTop: '1%',
        paddingLeft: '5%'
    }
});

interface IDefaultProps {
    attachments: Array<AttachmentInterface>;
    user: MemberInterface;
}

export default function EvaluatedAtachmentsComponent(props: IDefaultProps) {
    const { attachments, user } = props;

    return (
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 2 }}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <View style={{ marginTop: '5%', paddingLeft: '2%' }}>
                    <Icon color="aquamarine" name="circle" />
                </View>
                <Text h4 style={styles.nameText}>
                    {user.name}
                </Text>
            </View>
            <Text h4 style={styles.nameText}>
                Załączniki:
            </Text>
            {attachments.length === 0 && (
                <Text h4 style={styles.nameText}>
                    Brak
                </Text>
            )}
            {attachments.map((attachment) => (
                <TouchableOpacity
                    key={attachment.id}
                    onPress={() => Linking.openURL(attachment.url)}
                >
                    <View style={styles.atachmentElement}>
                        <Text style={styles.nameText}>- {attachment.display_name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
}
