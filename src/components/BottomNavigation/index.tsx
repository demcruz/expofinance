import React from "react"
import {View} from 'react-native'

import { Feather, Ionicons } from '@expo/vector-icons/';


import styles from "./style"



export default function BottomNavigation(){
return(
    <View style={styles.container}>
        <Feather name='home' size={22} color='#121212'/>
        <Ionicons name ='wallet-outline' size={22}/>
        <Feather name='bar-chart-2' size={22} color='#121212'/>
        <Feather name='user' size={22} color='#121212'/>
    </View>
    
)
    
}