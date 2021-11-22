import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center'
    }
});

export default function EditScreenInfo() {
    return (
        <View>
            <View style={styles.getStartedContainer}>
                <Text
                    style={styles.getStartedText}
                    lightColor="rgba(0,0,0,0.8)"
                    darkColor="rgba(255,255,255,0.8)"
                >
                    Pierwsza strona classrooma
                </Text>
            </View>
        </View>
    );
}
