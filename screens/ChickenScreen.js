import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
export default class ChickenScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.title}>Chicken</Text>
     
        <Image style={styles.image} source={require('../img/chicken.jpg')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  image: {
    width: 360,
    height: 360,
  },
});
