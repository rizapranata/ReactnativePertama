import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Button
}from 'react-native';
import { styles } from './component/styleformLogin';

class HomeActivity extends Component{
   static navigationOption = {
   title: 'Home',
   headStyle: {
      backgroundColor: '#03a9f4',
   },
      headerTintColor: '#fff',
      headerTitlestyle: {
         fontWeight: 'bold',
      },
   };

   render(){
      return(
         <View style={styles.container}>
            <Text style={styles.headerText}>Home Activity</Text>
            <Button title="Go to Activity" onPress={() => this.props.navigation.navigate('Profile')}/>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5fcff',
   },
   headerText: {
      fontSize: 20,
      fomntAlign: 'center',
      margin: 10,
      fontWeight: 'bold',
   }
})