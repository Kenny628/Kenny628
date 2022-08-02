import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from "./Screens/Login";
import Register from "./Screens/Register";


const StackNav = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <StackNav.Navigator initialRouteName='Loginnn'>
          <StackNav.Screen options={{headerShown: false}} name='Login' component={Login} />
          <StackNav.Screen options={{headerShown: false}} name='Register' component={Register} />
        </StackNav.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
