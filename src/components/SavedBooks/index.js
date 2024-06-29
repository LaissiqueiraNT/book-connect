import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const BookButton = (props) => {

    return (
        <SafeAreaView style={styles.bookButton}>
            <TouchableOpacity  style={styles.button}
            onPress={() => props.navigation.navigate('Compra', {
                imageSource: props.imageSource,
                text: props.text,
                autor: props.autor,
                price: props.price,
                bio: props.bio
            })}>
                <Image style={styles.image} resizeMode='contain' source={props.imageSource} />
                <Text style={styles.texto}>{props.text}</Text>
                <MaterialIcons style={{marginRight:-130, marginTop:-20}} name="bookmarks" size={24} color="#FF6A00" />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    bookButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    button: {
        backgroundColor: '#F3C19D',
        borderColor: '#E0E0E0',
        borderRadius: 15,
        width: 155,
        height: 220,
        marginVertical:18,
        marginHorizontal:7,
        fontSize: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        width: 130,
        height: 150,
        marginBottom: 10,
        marginTop:10,
    },
    texto: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600',
        color: 'black',
    },
    coins:{
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
    }
});

export default BookButton;
