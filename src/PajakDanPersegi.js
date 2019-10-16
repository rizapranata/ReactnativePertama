import React from 'react'
import {
  View, Text, TextInput, Button,TouchableOpacity,StyleSheet
}from 'react-native';
import Persegi from './Persegi';
import Pajak from './Pajak';

class PajakDanPersegi extends React.Component{

  state = { tipe:'persegi' };

  componentWillMount(){
      this.setState({
          tipe:'pajak'
      });
  }

  option(){
      if(this.state.tipe === 'persegi'){
          return(
              <Persegi />
          );
      }else if(this.state.tipe === 'pajak'){
          return(
              <Pajak />
          )
      }
  }
  
  render() {
    let currentValue = this.state.value
    return (
      <View>
        <Text>Testing Aplikasi</Text>
        <Text></Text>
        <TouchableOpacity
          style={{ backgroundColor: 'green', alignItems : 'center'}}
          onPress={() => this.setState({ tipe: 'persegi'})}>
          <Text style={{ color: 'blue' }}>Persegi</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity
          style={{ backgroundColor: 'black', alignItems : 'center' }}
          onPress={() => this.setState({ tipe: 'pajak'})}>
          <Text style={{ color: 'green' }}>Pajak</Text>
        </TouchableOpacity>

        {this.option()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button :{
   
  },

})


export default PajakDanPersegi;