import React from "react";
import { StyleSheet,
      Text,
       View,
        SafeAreaView,
        ImageBackground,
        Button,
        TouchableOpacity
     } from "react-native";

     const MeuButton = (props) => {
        return (
            <SafeAreaView>
                <TouchableOpacity 
                onPress={props.onPress}
                 style={styles.button} >
                <Text style={styles.buttontext}>{props.children}</Text>
                </TouchableOpacity>
                
            </SafeAreaView>
        )
     }
     const styles = StyleSheet.create ({
        button: {
            backgroundColor: '#E88239',
            padding: 9,
            width: 300,
            borderRadius: 6,
            fontSize: '120%',
            marginTop: 10
        },
        buttontext: {
            textAlign: 'center',
            color: '#fff',
            fontSize: '80%',
            fontWeight: '600',
        },
     })
     export default MeuButton