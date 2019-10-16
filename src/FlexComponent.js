import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class FlexComponent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.firstrow}></View>
                <View style={styles.secondrow}></View>
                <View style={styles.thirdrow}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection: 'column',
        backgroundColor: '#2F2D2D'
    },

    firstrow: {
        flex : 1,
        backgroundColor: '#e93e43',
    },

    secondrow: {
        flex: 2,
        backgroundColor: '#f5a942'
    },

    thirdrow: {
        flex: 3,
        backgroundColor: '#51c27e'
    }
});

//export default FlexComponent;