import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Transacoes  from "../../screens/transaçoes";
import { Image } from 'react-native';
import React from "react";
import casaInicio  from "../../assets/casaicon-removebg-preview.png";
import extratoInicio  from "../../assets/extratoicon-removebg-preview.png";
import tranzacoesInicio  from "../../assets/meusboletosicon-removebg-preview.png";
import produtoinicio  from "../../assets/produtosicon-removebg-preview.png";
import ajudaInicio  from "../../assets/ajuda-removebg-preview.png";


const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabParamList ={
    início: undefined;
    extrato: undefined;
    Transaçoes: undefined;
    produtos: undefined;
    ajuda: undefined;
}

export function BottonTagRouts() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { height: 60},
                tabBarLabelStyle: {fontSize: 12 ,fontWeight: '600'},
                tabBarActiveBackgroundColor: '#ec7000',
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#ec7000',
                
            }}
        >
            <Tab.Screen name='início'

            component={Transacoes}
            options={{
                tabBarIcon: ({ color }) => (
                    <Image source={casaInicio} style={{ tintColor:color ,width: 50, height: 50 }} />
                ),
                }}
            />
            <Tab.Screen name='extrato'
            
            component={Transacoes}
            options={{
            tabBarIcon: ({ color }) => (
                <Image source={extratoInicio} style={{ tintColor:color , width: 50, height: 50 }} />
                ),
                }}
            />
            <Tab.Screen name='Transaçoes'

            component={Transacoes}  
            options={{
            tabBarIcon: ({ color }) => (
                <Image source={tranzacoesInicio} style={{ tintColor:color , width: 50, height: 50 }} />
                ),
                }}
            />
            <Tab.Screen name='produtos' 
            
            component={Transacoes} 
            options={{
            tabBarIcon: ({ color }) => (
                <Image source={produtoinicio} style={{ tintColor:color , width: 50, height: 50 }} />
                ),
                }}
            />
            <Tab.Screen name='ajuda' 
            
            component={Transacoes}  
            options={{
            tabBarIcon: ({ color }) => (
                <Image source={ajudaInicio} style={{ tintColor:color , width: 50, height: 50 }} />
                ),
                }}
            />
        </Tab.Navigator>
    )
}



