import * as React from 'react';
import { View } from "../components/Themed";
import { Button } from 'react-native-elements';
import { Image } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    class: {
        backgroundColor: "grey",
        margin: '10%',
        height: '20%'
    },
});
export default function MainPage({ navigation }: any){
    return(
        <View style={styles.container}>
            <View style={styles.class}>
                <View
                    style={{ width: "40%", height: "100%", backgroundColor: "yellow" }}
                />
                <Text>
                    Nazwa klasy
                </Text>
            </View>
        </View>
    );
}