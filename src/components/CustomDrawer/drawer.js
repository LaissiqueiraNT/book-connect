import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const CustomDrawer = props => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props} style={{backgroundColor:'#F3C19D'}}>
                <View style={{marginLeft:30,}}>
                <Feather style={{marginLeft:80}} name="camera" size={24} color="black" />
                <Image source={require('../../../assets/Perfil.png')}/>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:20,fontWeight:'700'}}>Emily Smith </Text> <FontAwesome5 name="pencil-alt" size={17} color="black"></FontAwesome5>
                </View>
                <Text style={{fontSize:15,fontWeight:'400', color:'#333333', marginBottom:30}}>emilysmith@gmail.com</Text>

                
                </View>
                <DrawerItemList {...props} />
                
            </DrawerContentScrollView>
        </View>
    )
}


export default CustomDrawer

