import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


class PropEx extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>Data dari Props</Text>
                <Text>Nama : {this.props.nama} </Text>
                <Text>Alamat : {this.props.alamat}</Text>
                <Text>Telp : {this.props.telp} </Text>
                <Text>Email : {this.props.email}</Text>
            </View>
        );
    }
}

export default PropEx;


const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
});