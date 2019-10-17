import React, {Component} from 'react';
import{
    StyleSheet, View, Image, Text, ImageBackground
}from 'react-native';
import {styles} from './component/styleProfile'

export default class ProfileColor extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground style={styles.bgImage} source={require('./assets/react.png')}>
          <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
              <Image style={styles.cardImage}
                source={require('./assets/user.png')}/>
            </View>
            <Text style={styles.cardName}> Riza Pranata</Text>
            <View style={styles.cardOccupationContainer}>
              <Text style={styles.cardOccupation}> React Native Developer</Text>
            </View>
            <View>
              <Text style={styles.cardDescription}>
                Riza is a really great javaScript Developer
                he love using Js to build react native aplication 
                for ios and android
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
