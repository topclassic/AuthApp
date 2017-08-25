//import liraries
import React, { Component } from 'react';
import {
    View,
    StyleSheet 
} from 'react-native';

// create a component

// Card is view detail for each album list
const Card = (props) => {

    const {containerStyle} = styles
    return(
        <View style={containerStyle}>
            {props.children} 
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
})
export {Card};

