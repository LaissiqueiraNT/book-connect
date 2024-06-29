import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './src/components/CustomDrawer/drawer';


import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Endereco from "./src/screens/Endereco"
import Notification from "./src/screens/Notfication"
import Login from "./src/screens/Login";
import Cadastro from "./src/screens/Cadastro";
import Categoria from "./src/screens/Categoria";
import Home from "./src/screens/Home";
import Carrinho from "./src/screens/Carrinho";
import Salvos from "./src/screens/Salvos";
import Pedidos from "./src/screens/Pedidos";
import Compra from "./src/screens/Compra";
import Configuracoes from "./src/screens/Configuracoes"



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



export const StackNavigate = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Categoria"
                component={Categoria}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={DrawerNavigate}
                options={{ headerShown: false
                    
                 }}
            />
            <Stack.Screen
                name="Carrinho"
                component={Carrinho}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Salvos"
                component={Salvos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Pedidos"
                component={Pedidos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Compra"
                component={Compra}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Notification"
                component={Notification}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Endereco"
                component={Endereco}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
export const TabNavigate = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Carrinho"
                component={Carrinho}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="shopping-cart" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: '#FF6A00',
                    tabBarInactiveTintColor: '#FF6A00',
                    tabBarStyle:{
                        backgroundColor:'#F3C19D'
                    }
                }}
            />

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: '#FF6A00',
                    tabBarInactiveTintColor: '#FF6A00',
                    tabBarStyle:{
                        backgroundColor:'#F3C19D'
                    }
                }}
            />
            <Tab.Screen
                name="Salvos"
                component={Salvos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="bookmarks" size={size} color={color} />
                    ),
                    tabBarActiveTintColor: '#FF6A00',
                    tabBarInactiveTintColor: '#FF6A00',
                    tabBarStyle:{
                        backgroundColor:'#F3C19D'
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export const DrawerNavigate = () => {
    return (
        <Drawer.Navigator drawerContent={CustomDrawer} screenOptions={{headerShown: false}}
         initialRouteName='Home'>
            <Drawer.Screen
                name='Home'
                component={TabNavigate}
                options={{
                    drawerIcon:({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    drawerActiveTintColor:'black',
                    drawerInactiveTintColor:'black',}}
            />
            <Drawer.Screen
                name='Carrinho'
                component={Carrinho}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <FontAwesome5 name="shopping-cart" size={size} color={color} />
                    ),
                    drawerActiveTintColor:'black',
                    drawerInactiveTintColor:'black', }}
            />
            <Drawer.Screen
                name='Salvos'
                component={Salvos}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="bookmarks" size={size} color={color} />
                    ),
                    drawerActiveTintColor:'black',
                    drawerInactiveTintColor:'black',}}
            />

            <Drawer.Screen
                name='Pedidos'
                component={Pedidos}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="truck-delivery" size={24} color="black" />
                    ),
                    drawerActiveTintColor:'black',
                    drawerInactiveTintColor:'black', }}
            />

            <Drawer.Screen
                name='Sair'
                component={Login}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="exit-to-app" size={24} color="black" />
                    ),
                    drawerActiveTintColor:'black',
                    drawerInactiveTintColor:'black', }}
            />
            <Drawer.Screen
                name='Configuração'
                component={Configuracoes}
                options={{
                    
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons name="settings" size={24} color="black" />
                    ),
                    drawerActiveTintColor:'black',
                    drawerInactiveTintColor:'black',
                }} 
                    />
            
            



        </Drawer.Navigator>
    )
}