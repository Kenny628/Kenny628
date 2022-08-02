import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button, onButton, Pressable, CheckBox} from 'react-native';
const Seatsdata=require('./Seats.json')

export default class App extends React.Component {
  
constructor(props) {
  super(props);
  this.state = {data:Seatsdata };

 
}
onchecked(location){
  const data=this.state.data
  const index=data.findIndex(x=>x.location===location);
  data[index].checked=!data[index].checked
  this.setState(data)
}
renderSeat(){
  return this.state.data.map((item,key) => {
    return (
      <TouchableOpacity key={key} onPress={()=>{this.onchecked(item.location)}}
                >
                  <CheckBox value={item.checked} onValueChange={()=>{this.onchecked(item.location)}}></CheckBox>
                  <Text>{item.key}</Text>
                </TouchableOpacity>
    )
  })
}

  render() {
    
  
    return (
      
    
      
    )
    
  }
  
}
