import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
           {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle : {
        borderBottomWidth:1,
        padding:5,
        justifyContent:"flex-start",
        backgroundColor:"#fff",
        flexDirection:"row",
        borderColor:"#ddd",

    }
})
export default CardSection;