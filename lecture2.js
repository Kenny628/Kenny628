import HomeScreen from './screens/HomeScreen';
import ChickenScreen from './screens/ChickenScreen';
// import DuckScreen from './screens/DuckScreen';
import {Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const StackNav = createStackNavigator();
export default class App extends Component {
  render() {

    
    return (
      <NavigationContainer>

        
        <StackNav.Navigator initialRouteName="Home">
         
          <StackNav.Screen
            name="Home"
            component={HomeScreen}
            options={styles.HomeHeader}></StackNav.Screen>
         
          <StackNav.Screen
            name="Chicken"
            component={ChickenScreen}
            options={styles.AnimalHeader}></StackNav.Screen>
        
          {/* <StackNav.Screen
            name="Duck"
            component={DuckScreen}
            options={styles.AnimalHeader}></StackNav.Screen> */}
         
        </StackNav.Navigator>
      
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  HomeHeader: {
    title: 'MyHome',
    headerStyle: {
      backgroundColor: '#a80000',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  AnimalHeader: {
    headerStyle: {
      backgroundColor: '#a80000',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.button} onPress={()=>{alert("you clicked me")}}>
//           <Image source={require("./assets/2.png")}/>
//         </TouchableOpacity>
//         <Text>We are just getting started</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#859a9b',
//     borderRadius: 20,
//     padding: 10,
//     marginBottom: 20,
//     shadowColor: '#303838',
//     shadowOffset: { width: 0, height: 5 },
//     shadowRadius: 10,
//     shadowOpacity: 0.35,
//   },
// });