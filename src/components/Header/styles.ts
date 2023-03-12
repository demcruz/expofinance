import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    constainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        height: 100,
        padding: 16        
    },
    menuWrapper: {
        justifyContent:'center',

        width: 50,
        height: 100,       
    },

    userWrapper: {
        justifyContent: "center",
        
        height: 100,
       

    },

    userImageWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 10,

        borderWidth: 2,
        borderColor: '#d9d9d9',

        padding: 1 
    },

    userImage: {
        width: 30,
        height: 30
    }

})
