import { Inter_800ExtraBold } from "@expo-google-fonts/inter";
import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    introContainer: {
        flexDirection: 'row',

       justifyContent: 'space-between',
       alignItems: 'center',

       padding: 16
    },
    introtextWrapper: {

    },
    introTittle: {
        fontFamily: 'Inter_800ExtraBold',
        fontSize: 24,
        color: '#121212'

    }, 
    introSubtitle: {
        fontFamily: 'Inter_500Medium',
        fontSize: 12,
        color: '#666'

    },
    row :{
        flexDirection: 'row',
       
    },

    cardMaior:{
        height: 100
    }
    
});


export default styles;