import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress ={ onPress } >
          <Text style={styles.textStyle}>
          { children }
          </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonStyle :{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:"#fff",
        borderRadius:5,
        borderColor:"#007aff",
        marginLeft:5,
        marginRight:5,
    },

    textStyle:{
        alignSelf:"center",
        color:"#007aff",
        fontSize:16,
        padding:10,
        paddingBottom:10,
    }
})
export default Button;