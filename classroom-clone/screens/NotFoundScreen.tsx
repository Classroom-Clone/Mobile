import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    link: {
        marginTop: 15,
        paddingVertical: 15
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7'
    }
});

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Taka strona nie istnieje.</Text>
            <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
                <Text style={styles.linkText}>Wróć na stronę główną!</Text>
            </TouchableOpacity>
        </View>
    );
}
