import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,

} from 'react-native';
//import PropEx from './PropEx';
import Rumus from './Rumus';
class App extends React.Component{
    render(){
        return(
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior='automatic'>
                    <View style={styles.background}>
                        <View style={styles.margin}>
                            <Rumus nama="Segitiga" luas="1/2 x a x t" keliling="a + b + c"/>
                            <Text style={styles.hr}></Text>
                            <Rumus nama="Persegi Panjang" luas="Panjang x Lebar" keliling="2 x p x l" />
                            <Text style={styles.hr}></Text>
                            <Rumus nama="Lingkaran" luas="3.14 x r x r" keliling="3.14 x 2" />
                            <Text style={styles.hr}></Text>
                            <Rumus nama="Persegi" luas="p x l" keliling="4 x sisi" />
                            <Text style={styles.hr}></Text>
                            <Rumus nama="Jajar Genjang" luas="a x t" keliling="2 x (a + b )" />
                            <Text style={styles.hr}></Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    warnaBiru: {
        color: 'salmon',
        fontWeight: 'bold',
        fontSize: 20,
    },
    red: {
        color: 'red',
    },

    background: {
        backgroundColor: 'lightblue'
    },

    margin: {
        margin: 10,
    },

    hr : {
        borderBottomWidth : 2,
    
    }
});
