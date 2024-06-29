import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";

const BookButton = (props) => {
    return (

        //    Aqui fica os livros

        <SafeAreaView style={styles.bookButton}>
            <TouchableOpacity style={styles.button}
                onPress={() => props.navigation.navigate('Compra', {
                    imageSource: props.imageSource,
                    text: props.text,
                    autor: props.autor,
                    price: props.price,
                    bio: props.bio
                })}>
                <Image style={styles.image} resizeMode='contain' source={props.imageSource} />
                <Text style={{ textAlign: 'center',fontSize: 15,fontWeight: '600', color: 'black',
                }}   >{props.text}</Text>

                <Text style={{ marginLeft: -90, color: 'black', fontSize: 15, fontWeight: '400', }} >{props.price}</Text>

            </TouchableOpacity>

            {/* Aqui fica os livros */}
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
        borderColor: '#E0E0E0',
        width: 170,
        height: 220,
        marginVertical: 18,
        marginHorizontal: 5,
        fontSize: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        width: 170,
        height: 190,
        marginBottom: 10,
    },
    texto: {

    },

});

export default BookButton;
