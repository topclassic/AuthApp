//import liraries
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

// create a component
const Spinner = ({size}) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size||'large'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    spinnerStyle:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
//make this component available to the app
export {Spinner};
