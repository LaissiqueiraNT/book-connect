import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
} from 'react-native'
import MeuInput from "../../components/MeuInput";
import MeuButton from "../../components/MeuButton";
import { useNavigation } from "@react-navigation/native";


export default function Cadastro() {
    const navegation = useNavigation()
    const categoria = () => {
        
        navegation.navigate('Categoria')
    }
    
    return(
        <SafeAreaView style={styles.boxCadastro}>
            <View style={styles.position}>
                <Image style={styles.livro} resizeMode='center' source={require('../../../assets/Livro.png')} />
                <Image style={styles.logo} resizeMode='center' source={require('../../../assets/BookConnect.png')} />
            </View>
            <Text style={styles.titulo}>Registra-se</Text>
            <Text style={styles.h3}>Preencha suas informações</Text>
            <MeuInput
                placeholder="Nome"
                comMascara={false}
            />
                        <MeuInput
                placeholder="Sobrenome"
                comMascara={false}
            />
                        <MeuInput
                placeholder="E-mail"
                comMascara={false}
            />
                        <MeuInput
                placeholder="Senha"
                comMascara={false}
            />
                        <MeuInput
                placeholder="Confirmar Senha"
                comMascara={false}
            />
            <MeuButton onPress={categoria}>Iniciar sessão</MeuButton>
            <View style={styles.termos}>
                <Text style={styles.grayfont}>Ao clicar em continuar, você concorda com nossos</Text><TouchableOpacity >
                    <Text style={styles.blackfont}>Terms of Service and Privacy Policy</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
boxCadastro: {
    backgroundColor: '#fff',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect:'none'
},
livro: {
    marginLeft: '2%',
    width: 244,
    height: 201,
},
logo: {
    width: 280,
    height: 57,
},
position: {
    marginTop: 0
},
titulo: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 0,
},
h3: {
    fontSize: 15,
    fontWeight: '400',
},
blackfont: {
    fontWeight: '600',
    fontSize: 14,
},
grayfont: {
    color: '#828282',
    fontSize: 14,
    fontWeight: '400',
},
termos: {
    marginTop: 0,
},
align:{
    flexDirection: 'row',
}
})