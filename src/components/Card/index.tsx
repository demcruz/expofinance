import React, {ReactElement} from "react";

import { View,  Text } from "react-native";

import styles  from "./styles"
import {Container} from './styled';

interface CardProps{
    title: string;
    subTitle: string;
    backgroundColor: string;
    icon: ReactElement;
    
    
}

export default function Card({ title, subTitle, backgroundColor, icon }: CardProps) {
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Text style={styles.iconWrapper}> {icon} </Text>
            <Text style={styles.title}> {title}  </Text>
            <Text style={styles.subTitle}> {subTitle} </Text>
        </View>
    )
}