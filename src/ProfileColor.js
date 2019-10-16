import React, {Component} from 'react';
import{
    StyleSheet, View, Image
}from 'react-native';

export default class ProfileColor extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.cardContainer}/>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage}
            source={require('../assets/user.png')}/>
        </View>
      </View>
    );
  }
}

const ProfileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardContainer: {
    backgroundColor: ProfileCardColor,
    width: 300,
    height: 400,
    borderColor: 'black',
    borderWidth: 3,
  },

  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  cardImage: {
    width: 80, height: 80,
  },
})