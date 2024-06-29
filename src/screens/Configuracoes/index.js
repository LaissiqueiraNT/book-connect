import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import DropDown from '../../components/DropDown';
import MeuButton from '../../components/MeuButton'
import MeuInput from '../../components/MeuInput';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Configs() {
    const navigation = useNavigation();

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <View style={styles.aling}>
                <Ionicons onPress={() => navigation.navigate('Home')} style={{ marginLeft: 2 }} name="chevron-back" size={24} color="black" />
                <Text style={{ fontSize: 20, marginLeft: 5 }}>Configurações</Text>
            </View>
            <Text style={styles.sectionTitle}>Seus dados</Text>
            <View style={styles.separator} />
            <View style={styles.central}>
                <MeuInput
                    placeholder="emilysmith@gmail.com"
                    label="E-mail"
                    comMascara={false}
                    editable={false}
                />
                <MeuInput
                    placeholder="**************"
                    label="Senha"
                    comMascara={true}
                    editable={false}
                />
                <MeuInput
                    placeholder="(24) 98960-4532"
                    label="Telefone"
                    comMascara={true}
                    editable={false}
                />
                <View style={styles.row}>
                    <View style={styles.dropdownContainer}>
                        <DropDown
                            label="Gênero"
                            defaultValue="Feminino"
                            editable={false}
                        />
                    </View>
                    <View style={styles.dropdownContainer}>
                        <DropDown
                            label="Pagamento"
                            defaultValue="Pix"
                            editable={false}
                        />
                    </View>
                </View>
                <MeuInput
                    placeholder="***.***.***-**"
                    label="CPF ou CNPJ"
                    comMascara={true}
                    editable={false}
                />
            </View>
            
            <Text style={styles.sectionTitle}>Endereço</Text>
            <View style={styles.separator} />
            <View style={styles.central}>
                <MeuInput
                    placeholder="RJ, Valença"
                    label="Estado, Cidade"
                    comMascara={true}
                    editable={false}
                />
                <MeuInput
                    placeholder="Rua Getúlio Vargas, 000"
                    label="Rua, Número da residência"
                    comMascara={true}
                    editable={false}
                />
                <MeuInput
                    placeholder="Agostinho Carraca"
                    label="Bairro"
                    comMascara={true}
                    editable={false}
                />
                <MeuInput
                    placeholder="Loja do Sebastião"
                    label="Ponto de referência"
                    comMascara={true}
                    editable={false}
                />
                <MeuButton>
                    <Text>Editar</Text>
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
        fontSize: 20,
        fontWeight: '600',
        marginLeft: 15,
        
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
    separator: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 2,
    },
});

