import React from "react";
import { View, Text } from "react-native";

export default class SeatsComponent extends React.Component { 
    render() { 
      return (
        <View> 
        <Text style={{color: 'red',fontWeight: 'bold'}}>
            Click Me
            </Text>
        </View> 
      );
    }
  }