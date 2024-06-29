import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

const MeuPesquisar = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>{props.label}</Text>
            <View style={styles.pesquisar}>
                <TextInput
                    style={styles.input}
                    placeholder={props.placeholder}
                    underlineColorAndroid='transparent' 
                />
                <FontAwesome name="search" size={20} color="#E88239" style={styles.lupaIcon} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    pesquisar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#E0E0E0',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 15,
        width: 320,
        paddingRight: 10,
    },

    lupaIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: '#00000',
        borderRadius: 20,
        borderColor: '#E0E0E0',
    },
});

export default MeuPesquisar;
