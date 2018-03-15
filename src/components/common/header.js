import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const Header = (props) => {
    const {textstyle, viewstyle} = styles 
    return (
        <View style={viewstyle}>
        <Text style={styles.textstyle}>{props.headerText}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    viewstyle : {
        backgroundColor:"#F8F8F8",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:15,
        height:60,
        shadowColor:"#000",
        shadowOffset:{ width:0, height:2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative',

    },
    textstyle : {
        fontSize:20
    }
})
export default Header;