import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import MeuButton from '../../components/MeuButton'
import MeuInput from '../../components/MeuInput';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ModalDropdown from 'react-native-modal-dropdown';
export default function Configs() {
    const navegation = useNavigation()
    const editar = () => {

        navegation.navigate('Home')
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.aling}>
                    <Ionicons onPress={() => navigation.navigate('Login')} style={{ marginLeft: 2 }} name="chevron-back" size={24} color="black" />
                </View>
                <View style={styles.central}>
                    <Text style={styles.sectionTitle}>Coloque suas informações</Text>

                    <MeuInput
                        placeholder="Telefone:"
                    />
                    <MeuInput
                        placeholder="CPF ou CNPJ:"
                    />
                    <MeuInput
                        placeholder="CEP:"
                    />

                    <View style={styles.row}>
                        <View style={styles.dropdownContainer}>
                            <ModalDropdown
                                options={['Cartão de Crédito', 'Pix', 'Boleto']}
                                style={{ borderRadius: 10, borderWidth: 1, borderColor: '#E0E0E0', width: 100, padding: 8, marginBottom: 10,  }}
                                textStyle={{ fontSize: 16, color: '#000000', }}
                                dropdownStyle={{ width: 100, height: 'auto',borderWidth: 1, borderRadius: 5, }}
                                dropdownTextStyle={{color: '#000000', fontSize:16,backgroundColor:'#F2F2F2'}}
                                defaultValue='Pix'
                            />
                            <ModalDropdown
                                options={['Trabalho', 'Casa']}
                                style={{ borderRadius: 10, borderWidth: 1, borderColor: '#E0E0E0', width: 100, padding: 8, color: '#000000'}}
                                textStyle={{ fontSize: 16, color: '#000000', }}
                                dropdownStyle={{ width: 100, height: 'auto', borderRadius: 10, borderColor:'#E0E0E0', }}
                                dropdownTextStyle={{color: '#000000', fontSize:16,}}
                                defaultValue='Casa'
                                
                                

                            />
                        </View>
                    </View>
                </View>
                <View style={styles.central}>
                    <MeuInput
                        placeholder="Estado,Cidade:"
                    />
                    <MeuInput
                        placeholder="Rua, Número residência:"

                    />
                    <MeuInput
                        placeholder="Bairro:"

                    />
                    <MeuInput
                        placeholder="Ponto de referência:"

                    />
                    <MeuInput
                        placeholder="Loja do Sebastião"
                    />
                    <MeuButton onPress={editar}
                    >
                        <Text>Continuar</Text>
                    </MeuButton>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    aling: {
        flexDirection: 'row',
        backgroundColor: '#F3C19D',
        padding: 7,
        alignItems: 'center',
    },
    sectionTitle: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 20,
        fontWeight: '600',

    },
    central: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    dropdownContainer: {
        flex: 1,
        marginHorizontal: 5,
    },

});

