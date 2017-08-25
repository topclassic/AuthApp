//import liraries
import React, { Component } from 'react';
import {
    View,
    StyleSheet 
} from 'react-native';


// CardSection is view detail for each Card
const CardSection = (props) => {

    const {containerStyle} = styles
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
});

//make this component available to the app
export {CardSection};
