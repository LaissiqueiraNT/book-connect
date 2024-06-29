import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Text  } from "react-native";

const MeuInput = (props) =>{
    return(
        <SafeAreaView>
            <Text style={{fontSize:15,fontWeight:'700',marginBottom:-17}}>{ props.label }</Text>
            <TextInput style= { styles.input }
            placeholder={ props.placeholder }
            secureTextEntry= { props.comMascara }
            editable={props.editable}
            />

      
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1, 
        borderColor: '#E0E0E0',
        marginTop: 3,
        padding: 8,
        width: 300,
        borderRadius: 6,
        color: '#000000',
        fontSize: 16,
        marginTop: 15,
        marginBottom:10,
    },
});

export default MeuInput;


