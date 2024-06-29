import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import Home from '../Home';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function Pedidos() {
    const navegation = useNavigation();
    return (

        <SafeAreaView>

            <View style={styles.aling}>
                <Ionicons onPress={() => navegation.navigate('Home')} style={{ marginLeft: 2 }} name="chevron-back" size={24} color="black" />

                <Text style={styles.texto}>Notificações</Text>
            </View>
            <View style={styles.central}>
                <Text style={styles.text}>Não há notificações</Text>
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
    text: {
        fontSize: 20,
        fontWeight: "600",
        marginTop:300,
    },
    texto: {
        
        fontSize: 20,
        marginLeft: 5,
    },
    central: {
        alignItems: 'center',
        justifyContent: 'central',

    }
})