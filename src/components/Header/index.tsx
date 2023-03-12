import React from "react";
import { View, Image } from "react-native";

import { styles } from "./styles"

import { Feather } from '@expo/vector-icons/';
import Avatar from '../../assets/images/profile.jpg'

export default function Header() {
    return (
        <View style={styles.constainer}>
            <View style={styles.menuWrapper}>
                <Feather name="menu" size={24} color="black" />

            </View>
            <View style={styles.userWrapper}>
                <View style={styles.userImageWrapper}>
                    <Image source={Avatar} style={styles.userImage} resizeMode='cover' />
                </View>
            </View>
        </View>
    )

}