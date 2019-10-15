import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const AppStatles = (props) => (
    <View>
        <Text style={styles.red}> Componen Statles</Text>
        <Text> Nama : {props.nama} </Text>
        <Text> Alamat : {props.alamat} </Text>
        <Text> Telp : {props.telp} </Text>
        <Text> Email : {props.email} </Text> 
    </View>
)
export default AppStatles;


const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
});