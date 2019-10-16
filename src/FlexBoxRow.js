import React, {Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FlexBoxRow extends Component{
  render(){
    //row, column, row-reverse
    return(
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}}>
          <Text>Flex Box Row</Text>
        </View>
        <View style={{width : 200, height: 50, backgroundColor: 'skyblue'}}/>
        <View style={{width : 300, height: 50, backgroundColor: 'steelblue'}}>
          <Text>Width 300, height 50</Text>
        </View>
      </View>  
    );
  }
};

export default FlexBoxRow;