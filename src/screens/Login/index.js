import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import MeuInput from '../../components/MeuInput';
import MeuButton from '../../components/MeuButton';
import { useNavigation } from '@react-navigation/native';



export default function Login() {
const navegation = useNavigation()
    const logar = () => {
        
        navegation.navigate('Home')
    }
    const registrar = () => {
        
        navegation.navigate('Cadastro')
    }


    return (
        <SafeAreaView style={styles.boxLogin}>
            {/* Logo */}

            <View style={styles.position}>
                <Image style={styles.livro} resizeMode='center' source={require('../../../assets/Livro.png')} />
                <Image style={styles.logo} resizeMode='center' source={require('../../../assets/BookConnect.png')} />

                {/* Logo---------- */}

                {/* Textos */}
            </View>
            <Text style={styles.titulo}>Iniciar sessão</Text>
            <Text style={styles.h3}>Entrar com E-mail Senha ou Registrar-se</Text>
            {/* Textos----------- */}

            {/* Email e Senha */}
            <MeuInput
                placeholder="email@domain.com"
                comMascara={false}
            />
            <MeuInput
                placeholder="Senha"
                comMascara={true}
            />
            {/* Email e Senha---------- */}


            {/* Esqueci a senha */}
            <TouchableOpacity  >
                <Text style={styles.esqueci}> Esqueci a Senha </Text>
            </TouchableOpacity>
            {/* Esqueci a senha--------- */}


            {/* Button Open */}
            <MeuButton
            onPress={logar}
            >Entrar</MeuButton>
            {/* Button Open-------- */}


            <Text style={styles.grayfont}>Ou continue com</Text>


            {/* googleButton */}
            <TouchableOpacity style={styles.buttongoogle}>
                <Image style={styles.google} resizeMode='center' source={require('../../../assets/Google.png')} ></Image>
            </TouchableOpacity>
            {/* googleButton----------- */}

            {/* Criar */}
            <View style={styles.align}>
                <Text style={{color: '#828282',fontSize: 14,fontWeight: '400',}}>Ainda não tem Conta?</Text>
                <TouchableOpacity onPress={registrar}><Text style={styles.blackfont}>Crie uma</Text></TouchableOpacity></View>
            <View style={styles.termos}>
                {/* Criar----------- */}

                {/* Termos */}
                <Text style={styles.grayfont}>Ao clicar em continuar, você concorda com nossos</Text><TouchableOpacity >
                    <Text style={styles.blackfont}>Terms of Service and Privacy Policy</Text>
                </TouchableOpacity>
                {/* Termos----------- */}

            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    boxLogin: {
        backgroundColor: '#fff',
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none'
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
        marginTop: -50
    },
    titulo: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: '5%',
    },
    h3: {
        marginBottom:10,
        fontSize: 15,
        fontWeight: '400',
    },
    esqueci: {
        textAlign: 'left',
        color: '#E88239',
        fontSize: 15,
        marginRight: 190,
        marginTop:-10,
        marginBottom: 20,
    },
    buttongoogle: {
        borderColor: '#E0E0E0',
        marginTop: 3,
        padding: 5,
        width: 300,
        borderRadius: 6,
        backgroundColor: '#EEEEEE',
        fontSize: 16,
    },
    google: {
        padding: 15,
        width: 280,
        borderRadius: 6,
    },
    blackfont: {
        fontWeight: '600',
        fontSize: 14,
    },
    grayfont: {
        marginTop:20,
        color: '#828282',
        fontSize: 14,
        fontWeight: '400',
    },
    termos: {
        marginTop: 20,
    },
    align: {
        flexDirection: 'row',
    }
});
