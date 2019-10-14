import React from 'react';
import {
    View,
    Text,
    StyleSheet,

} from 'react-native';

class Rumus extends React.Component {
    render() {
        return (
            <View>
                <Text style={styles.red}>Data dari class Rumus</Text>
                <Text>Nama : {this.props.nama} </Text>
                <Text>Luas : {this.props.luas}</Text>
                <Text>Keliling : {this.props.keliling} </Text>
            </View>
        );
    }
}

export default Rumus;

const styles = StyleSheet.create({
    warnaBiru: {
        color: 'salmon',
        fontWeight: 'bold',
        fontSize: 20,
    },
    red: {
        color: 'green'
    },
});
