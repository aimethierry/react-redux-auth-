import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Card = (props) => {
    const { containerStyle } = styles 
    return (
        <View style={containerStyle }>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius:2,
        borderColor: "#ddd",
        borderBottomWidth:0,
        shadowColor:"#000",
        shadowOffset: { height:2, width:0} ,
        shadowOpacity: 0.2,
        shadowRadius:2,
        elevation:2,
        marginLeft:5,
        marginRight:5,
        marginTop:10,

    }
})

export default Card ;