import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView
} from 'react-native';

import ImageButton from '../../components/ImageButton';
import { useNavigation } from '@react-navigation/native';
import MeuButton from '../../components/MeuButton';


export default function Categoria() {
    const navegation = useNavigation()
    const cadastrar = () => {

        navegation.navigate('Home')
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.boxCategoria}>
                <View style={styles.h1}>
                    <Text style={styles.titulo}>Olá, Emily</Text>
                    <Text style={styles.h2}>Escolha 3 categorias que você gosta de ler</Text>
                </View>
                <View style={styles.align}>
                    <ImageButton
                        imageSource={require('../../../assets/Categoria/1.png')}
                        text="Aventura"></ImageButton>
                    <ImageButton
                        imageSource={require('../../../assets/Categoria/2.png')}
                        text="Ação"></ImageButton>
                </View>
                <View style={styles.align}>
                    <ImageButton
                        imageSource={require('../../../assets/Categoria/3.png')}
                        text="Romance"></ImageButton>
                    <ImageButton
                        imageSource={require('../../../assets/Categoria/4.png')}
                        text="Fantasia"></ImageButton>
                </View>
                <View style={styles.align}>
                    <ImageButton
                        imageSource={require('../../../assets/Categoria/5.png')}
                        text="Ficção
                Cientifica"></ImageButton>
                    <ImageButton
                        imageSource={require('../../../assets/Categoria/6.png')}
                        text="Pós Apocaliptico"></ImageButton>
                </View>
                <View style={styles.align}>
                    <ImageButton
                        imageSource={require('../../../assets/Categoria/7.png')}
                        text="Manga"></ImageButton>
                    <ImageButton
                        imageSource={require('../../../assets/Categoria/8.png')}
                        text="Gibi"></ImageButton>
                </View>
                <View style={styles.align}>
                    <ImageButton
                        imageSource={require('../../../assets/Categoria/9.png')}
                        text="Terror"></ImageButton>
                    <ImageButton
                        imageSource={require('../../../assets/Categoria/10.png')}
                        text="Humor"></ImageButton>

                        
                </View>
                <View>
                    <MeuButton onPress={cadastrar}>Continuar</MeuButton>
                    </View>
            </SafeAreaView>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    boxCategoria: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        userSelect: 'none'
    },
    h1: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 35,
        fontWeight: '700',
        marginTop: 20,
    },
    h2: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 30,
        marginBottom: 20,
    },
    align: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})