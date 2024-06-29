import React from "react";
import { StyleSheet,
      Text,
       View,
       Image,
        SafeAreaView,
        TouchableOpacity
     } from "react-native";

     const ImageButton = (props) => {
        return (
            <SafeAreaView style={styles.boxButton}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.image} resizeMode='center' source={props.imageSource} />
                <Text style={styles.texto}>{props.text}</Text>
            </TouchableOpacity>
        </SafeAreaView>
        )
     }
     const styles = StyleSheet.create ({
        boxButton:{
            justifyContent: 'center',
            alignItems:'center',
            marginTop:20,
            marginVertical:5,
            marginHorizontal:5,
        },
        button: {
            borderColor: '#E0E0E0',
            padding: 5,
            width: 185,
            height:80,
            borderRadius: 6,
            backgroundColor: '#000000',
            fontSize: 16,
            alignItems:'center',
            flexDirection: 'row',
            
        },
        image: {
            padding: 15,
            width: 80,
            borderRadius: 6,
        },
        texto:{
            marginLeft:10,
            fontSize: 15,
            fontWeight: '600',
            color:'#fff'
        },
     })
     export default ImageButton