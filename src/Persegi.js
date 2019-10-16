import React from 'react'
import{
    Text,View,StyleSheet,TextInput,Button
}from 'react-native';

class Persegi extends React.Component{
    //#1 inisialisasi state
    state = { panjang :0, lebar: null, luas : null };

    //#2 method untuk mengubah state luas
    hitungLuas =()=>{
        let panjang = this.state.panjang; //tampung nilai state akhir pada variable panjang
        let lebar = this.state.lebar; //tampung nilai state akhir pada variable lebar
        let luas = parseInt(panjang * lebar); // menghitung luas persegi variable panjang dan luas harus di konversikan ke int karena asalnya string
        this.setState({luas : luas}); //set State luas
    }

    render(){
        //#3 Read component start
        let currentValue = this.state.value
        return(
            <View>
                <Text>Hitung luas persegi panjang</Text>
                <Text></Text>
                <Text>Panjang : </Text>
                <TextInput style={{height: 40}}
                    placeholder="Masukkan Panjang"
                    onChangeText={(InputPanjang) => this.setState({panjang: InputPanjang})}
                    value={this.state.panjang}
                />
                <Text>Lebar     : </Text>
                <TextInput style={{height: 40}}
                    placeholder="Masukkan Lebar"
                    onChangeText={(inputLebar) => this.setState({lebar: inputLebar})}
                    value={this.state.lebar}
                />

                <Button title="Hitung Luas"
                    onPress={()=> {
                        this.hitungLuas()
                    }}
                />
                <Text>{this.state.luas}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    
})

export default Persegi;