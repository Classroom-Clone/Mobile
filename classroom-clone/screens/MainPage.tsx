import * as React from 'react';
import { Button } from 'react-native-elements';
import { Image } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'black'
    },

    class: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "grey",
        margin: '10%',
        height: '20%',
        flexWrap: 'wrap'
    },
    nameText: {
        flex: 1,
        flexWrap: 'wrap',
        margin: '5%',
        fontWeight: 'bold'
    },
    teacherText: {
        padding: '5%',
        margin: '5%',
        backgroundColor: "grey",
        textAlign: 'right'
    },

});
export default function MainPage({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.class}>
                <View
                    style={{ width: "40%", height: "100%", backgroundColor: "yellow" }}
                />
                <View>
                    <Text style={styles.nameText}>
                        Matematyka
                    </Text>
                    <Text style={styles.teacherText}>
                        Barnaba bazyli
                    </Text>
                </View>
            </View>
        </View>
    );
}