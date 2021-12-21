import * as React from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../components/Themed';
import ClassContainer from "../components/ClassContainer";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default function MainPage() {
    return (
        <View style={styles.container}>
            <ClassContainer
                name={"Matematyka"}
                teacher={"Barnaba bazyli"}
                color={"yellow"}
            />
        </View>
    );
}
