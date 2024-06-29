import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import MeuButton from '../../components/MeuButton';



export default function Compra() {
    const navigation = useNavigation();
    const route = useRoute();
    const { imageSource, text, price, autor, bio } = route.params;
    const comprar = () => {
        
        navigation.navigate('Endereco')
    }
    return (
        <ScrollView>
        <SafeAreaView>
            <View style={styles.aling}>
                <Ionicons onPress={() => navigation.navigate('Home')} style={{ marginLeft: 2 }} name="chevron-back" size={24} color="black" />
            </View>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.autor}>{autor}</Text>
            <View style={styles.container}>

                <Image style={styles.image} source={imageSource} />
                <View style={{ flexDirection: 'row', }}> 
                <View style={{ flexDirection: 'row', marginRight:165, marginLeft:-12, }}>

                    <FontAwesome name="star" size={22} color="#E9B81C" />
                    <FontAwesome name="star" size={22} color="#E9B81C" />
                    <FontAwesome name="star" size={22} color="#E9B81C" />
                    <FontAwesome name="star" size={22} color="#E9B81C" />
                    <FontAwesome name="star-half-o" size={22} color="#E9B81C" />
                </View>
               <MaterialIcons name="bookmarks" size={32} color="#FF6A00" />
                </View>


                <Text style={styles.price}>{price}</Text>
                <Text style={styles.bio}>{bio}</Text>
                <View style={{ marginBottom: 90, }}>
                    <MeuButton>Adicionar ao Carrinho</MeuButton>
                    <MeuButton onPress={comprar}>Comprar Agora</MeuButton>
                </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    aling: {
        flexDirection: 'row',
        backgroundColor: '#F3C19D',
        padding: 7,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        userSelect:'none'
    },
    image: {
        width: 200,
        height: 300,
        marginBottom: 20,
    },
    text: {
        marginLeft: 10,
        marginTop: 20,
        fontSize: 24,
        fontWeight: '400',
   
    },
    price: {
        fontWeight: '600',
        marginLeft: -250,
        fontSize: 20,
        color: 'black',
    },
    autor:{
        marginLeft: 12,
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 10,
    },
    bio:{
        marginLeft:30,
        marginRight:30,
        color:'#828282',
        fontSize: 12,
        
    },
});
