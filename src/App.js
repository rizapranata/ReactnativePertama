import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,

} from 'react-native';
import PropEx from './PropEx';
import AppStatles from './AppStatles';
class App extends React.Component{
    render(){
        return(
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior='automatic'>
                    <View style={styles.background}>
                        <View style={styles.margin}>
                            <Text style={styles.hr}></Text>
                            <PropEx nama="Agus" alamat="Bandung" telp="081234" email='agus@gmail.com'/>
                            <Text style={styles.hr}></Text>
                            <AppStatles nama="Budi" alamat="Jakarta" telp="081111" email='budi@gmail.com' />
                            <Text style={styles.hr}></Text>
                            <AppStatles nama="Joko" alamat="Semaran" telp="082222" email='joko@gmail.com' />
                            <Text style={styles.hr}></Text>
                            <AppStatles nama="Yanto" alamat="Purwokerto" telp="083333" email='yanto@gmail.com' />
                            <Text style={styles.hr}></Text>
                            <AppStatles nama="Jajang" alamat="Cianjur" telp="084444" email='jajang@gmail.com' />
                            <Text style={styles.hr}></Text>
                            <AppStatles nama="Gusti" alamat="Jakarta" telp="085555" email='gusti@gmail.com' />
                            <Text style={styles.hr}></Text>
                            <AppStatles nama="Bambang" alamat="Solo" telp="086666" email='bambang@gmail.com' />
                            <Text style={styles.hr}></Text>
                            <AppStatles nama="Yinika" alamat="Jakarta" telp="087777" email='yunika@gmail.com' />
                            <Text style={styles.hr}></Text>
                            <AppStatles nama="Budi" alamat="Jakarta" telp="081111" email='budi@gmail.com' />
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
