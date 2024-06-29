import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    CheckBox,
    TouchableOpacity,
} from "react-native";

const CarButton = (props) => {
    return (

        // Aqui ficar os botoes do carrinho
        <SafeAreaView style={styles.boxSelect}>
            <View style={styles.Select}>
                <CheckBox style={{ marginTop: -140 }}></CheckBox>
                <Image style={styles.image} resizeMode='center' source={props.imageSource} />
                <Text style={styles.texto}>{props.text}</Text>

                <Text style={styles.preco}>{props.preco}</Text>
                <TouchableOpacity style={{ marginTop: -130, marginRight: -70 }} >Excluir</TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>Comprar</Text>
                </TouchableOpacity>
                {/*  Aqui ficar os botoes do carrinho */}
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    boxSelect: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginVertical: 5,
        marginHorizontal: 5,
    },
    Select: {
        borderColor: '#E0E0E0',
        padding: 10,
        width: 330,
        height: 170,
        borderRadius: 6,
        backgroundColor: '#F3C19D',
        fontSize: 16,
        alignItems: 'center',
        flexDirection: 'row',

    },
    image: {
        padding: 15,
        width: 80,
        borderRadius: 6,
        alignItems: 'center'
    },
    texto: {
        textAlign: 'left',
        alignItems: 'top',
        marginTop: -60,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '500',
        color: 'black'
    },
    button: {
        marginBottom: -110,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E88239',
        padding: 12,
        width: 70,
        borderRadius: 6,
    },
    buttontext: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    preco: {
        marginRight: -35,
        marginTop: 50,
        fontSize: 15,
        fontWeight: '500',
        color: 'black'
    }
})
export default CarButton