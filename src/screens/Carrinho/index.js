import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, CheckBox, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CarButton from '../../components/CarButton';
import { useNavigation } from '@react-navigation/native';

export default function Carrinho() {
    const navegation = useNavigation();
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.aling}>
                    <Ionicons onPress={() => navegation.navigate('Home')} style={{ marginLeft: 2 }} name="chevron-back" size={24} color="black" />
                    <Text style={styles.texto}>Carrinho de Compras</Text>
                </View>
                <CarButton
                    imageSource={require('../../../assets/Livros/3.png')}
                    text="Harry Potter e o Prisioneiro de Azkaban"
                    preco="$60,00"
                />
                <CarButton
                    imageSource={require('../../../assets/Livros/8.png')}
                    text="Harry Potter e a Câmara Secreta"
                    preco="$60,00"
                />
                <View style={{}}>
                <View style={styles.checkBoxTotal}>
                    <CheckBox /><Text style={{marginLeft:-90}}>Tudo</Text>
                    <Text style={{fontSize: 20, marginLeft: 5,}}>Sub-total: 120,00</Text>
                </View>


                <View style={styles.buttonContainer}>
                    
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    safeArea: {
        flex: 1,
        justifyContent: 'space-between',
    },
    aling: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3C19D',
        padding: 7,
    },
    texto: {
        fontSize: 20,
        marginLeft: 5,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    button: {
        marginTop:0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E88239',
        padding: 9,
        width: 300,
        borderRadius: 6,
    },
    buttontext: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    checkBoxTotal:{
        marginHorizontal:30,
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-between',
    },

});

