import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
    modal: {
        padding: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.3)'
    },
    container: {
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontSize: 20
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10
    },
    separator: {
        height: 2,
        marginVertical: 20,
        width: '100%',
        backgroundColor: 'red'
    }
});

export default function ErrorModal(props: any) {
    const { title, description, visible, onPress } = props;

    return (
        <Modal isVisible={visible} onBackdropPress={onPress}>
            <View style={styles.modal}>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    <AntDesign size={28} name="closecircle" color="grey" onPress={onPress} />
                </View>
                <View style={styles.separator} />
                <Text style={styles.description}>{description}</Text>
            </View>
        </Modal>
    );
}
