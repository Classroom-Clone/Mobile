import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import StyledButtonComponent from '../components/StyledButtonComponent';
import { View } from '../components/Themed';
import { useAppDispatch, useAppSelector } from '../store';
import { authState } from '../store/selectors';
import * as DocumentPicker from 'expo-document-picker';
import { DocumentResult } from 'expo-document-picker';
import { CreatePost } from '../store/reducer/classroom/action';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        marginVertical: 10,
        color: 'white',
        flexWrap: 'wrap'
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginLeft: 10,
        marginBottom: 10
    },
    button: {
        alignItems: 'center'
    }
});

export default function CreatePostView({ route }: any) {
    const { id } = route?.params;
    const token = useAppSelector(authState);
    const dispatch = useAppDispatch();

    const [content, setContent] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [attachments, setAttachments] = React.useState([]);

    console.log(route.params);

    const [doc, setDoc] = React.useState<DocumentResult>();

    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: '*/*',
            copyToCacheDirectory: true
        }).then((response) => {
            if (response.type == 'success') {
                let { name, size, uri } = response;
                let nameParts = name.split('.');
                let fileType = nameParts[nameParts.length - 1];
                var fileToUpload: DocumentResult = {
                    name: name,
                    size: size,
                    uri: uri,
                    mimeType: 'application/' + fileType,
                    type: 'success'
                };
                return fileToUpload;
            }
        });
        setDoc(result);
    };

    const handleAddPost = async () => {
        if (token)
            await CreatePost(dispatch, token?.data, id, {
                title: title,
                content: content,
                attachments: attachments
            });
    };

    return (
        <View style={styles.container}>
            <Input
                multiline
                style={styles.input}
                placeholder="Tytuł"
                onChangeText={(value) => setTitle(value)}
            />
            <Input
                multiline
                style={styles.input}
                placeholder="Opis"
                onChangeText={(value) => setContent(value)}
            />
            <Text style={styles.text}>Załączniki:</Text>
            {doc?.type === 'success' ? doc.name : ''}
            <View style={styles.button}>
                <StyledButtonComponent title="Dodaj załącznik" method={pickDocument} width={200} />
            </View>
            <View style={styles.button}>
                <StyledButtonComponent method={() => handleAddPost()} title="Utwórz" width={100} />
            </View>
        </View>
    );
}
