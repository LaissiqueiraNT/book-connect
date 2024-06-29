import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SavedBooks from '../../components/SavedBooks'



export default function Pedidos() {
    const navegation = useNavigation();
 
    return (

        <SafeAreaView>

            
            <View style={styles.aling}>
                <Ionicons onPress={() => navegation.navigate('Home')} style={{ marginLeft: 2 }} name="chevron-back" size={24} color="black" />

                <Text style={styles.texto}>Livros Salvos</Text>
            </View>

            {/* Livros */}
            <View style={{alignItems: 'center',
        justifyContent: 'central',}}>
            <View style={styles.central}>

                <SavedBooks
                navigation={navegation}
                    imageSource={require('../../../assets/Livros/4.png')}
                    text="A Sutil Arte de Ligar o F*da-Se"
                    autor="Mark Manson"
                        price="$40,00"
                        bio="Em A sutil arte de ligar o f*da-se, Mark Manson mostra que quanto mais nos importamos com todos os problemas da vida, maior o sofrimento. Então, aprenda identificar suas prioridades, ligue o f*da-se para o resto e aproveite uma vida melhor.">

                </SavedBooks>
                <SavedBooks
                navigation={navegation}
                    imageSource={require('../../../assets/Livros/7.png')}
                    text="O Senhor dos Anéis Retorno do Rei"
                    autor="J. R. R. Tolkien"
                        price="$100,00"
                        bio="Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.">
                </SavedBooks>
                {/* Livros */}

            </View>
</View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    aling: {
        flexDirection: 'row',
        backgroundColor: '#F3C19D',
        padding: 7,
    },
    texto: {

        fontSize: 20,
        marginLeft: 5,
    },
    central: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'central',

    }
})