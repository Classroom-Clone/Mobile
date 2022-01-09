import * as React from 'react';
import { Linking, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../components/Themed';
import { Text } from 'react-native-elements';
import { useAppDispatch, useAppSelector } from '../store';
import { authState } from '../store/selectors';
import { PostInterface } from '../store/interface/classroom/PostInterface';
import { stringDateFormat } from '../helpers/date/DateHelper';
import { DateEnum } from '../helpers/enums/DateEnum';
import StyledButtonComponent from '../components/StyledButtonComponent';
import { FetchPostCommentsList } from '../store/reducer/comment/action';

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
    atachmentElement: {
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

export default function PostDetailsView({ navigation, route }: any) {
    const { post } = route?.params;
    const postDetails: PostInterface = post;
    const dispatch = useAppDispatch();
    const token = useAppSelector(authState);

    const handlePress = () => {
        if (token) {
            FetchPostCommentsList(dispatch, token.data, postDetails.id);
            navigation.navigate('AddComment', { id: postDetails.id, type: 'post' });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.textDate}>
                    {stringDateFormat(postDetails.created_at, DateEnum.DateTime)}
                </Text>
                <Text h3 style={styles.text}>
                    {postDetails.title}
                </Text>
            </View>
            <ScrollView>
                <Text style={styles.text}>{postDetails.content}</Text>
                {postDetails.links.length !== 0 && (
                    <Text h4 style={styles.nameText}>
                        Linki:
                    </Text>
                )}
                {postDetails.links.map((link) => (
                    <TouchableOpacity key={link.url} onPress={() => Linking.openURL(link.url)}>
                        <View style={styles.atachmentElement}>
                            <Text style={styles.nameText}>- {link.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
                {postDetails.attachments.length !== 0 && (
                    <Text h4 style={styles.nameText}>
                        Załączniki:
                    </Text>
                )}
                {postDetails.attachments.map((attachment) => (
                    <TouchableOpacity
                        key={attachment.id}
                        onPress={() => Linking.openURL(attachment.url)}
                    >
                        <View style={styles.atachmentElement}>
                            <Text style={styles.nameText}>- {attachment.display_name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
                <StyledButtonComponent
                    method={() => handlePress()}
                    title="Sekcja komentarzy"
                    width={300}
                />
            </ScrollView>
        </SafeAreaView>
    );
}
