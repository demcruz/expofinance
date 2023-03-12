import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header"

import { Feather } from '@expo/vector-icons/';


import styles from './style'
import Card from "../../components/Card";
import BottomNavigation from "../../components/BottomNavigation";

export default function dashboard() {
    return (
        <>
            <Header />

            <View style={styles.introContainer}>
                <View style={styles.introtextWrapper}>
                    <Text style={styles.introTittle}>Hello Diego Cruz </Text>
                    <Text style={styles.introSubtitle}>Seja Bem Vindo </Text>
                </View>
                <View >
                    <Feather name="sliders" size={24} color='#121212' />
                </View>
            </View>
            <View style={styles.row}>
                <Card 
                    title='230K' 
                    subTitle='Vendas'  
                    backgroundColor='#C0dedd' 
                    icon={<Feather name='percent' size={24} color='#121212'/>}
                    />
                <Card 
                    title='8.549K' 
                    subTitle='Customes' 
                    backgroundColor='#e6dff1'
                    icon={<Feather name='columns' size={24} color='#121212'/>}
                     />
            </View>

            <View style={styles.row}>
                <Card 
                title='1.423K' 
                subTitle='Produdos' 
                backgroundColor='#f2eee9' 
                icon={<Feather name='pie-chart' size={24} color='#121212'/>}
                />
                <Card 
                    title='$9745' 
                    subTitle='Revenue' 
                    backgroundColor= '#f1dfde'
                    icon={<Feather name='percent' size={24} color='#121212'/>}
                     />
            </View>

            <BottomNavigation/>

        </>


    )

}