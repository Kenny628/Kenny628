import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button, onButton, Pressable, CheckBox} from 'react-native';
const Seatsdata=require('./Seats.json')

export default class App extends React.Component {


constructor(props) {
         super(props);
         this.state = { data: [false,false,false]
         };
         this.buttonPressed = this.buttonPressed.bind(this);
}
buttonPressed(index) {
    const tmpState = this.state.data.map((val, tmpIndex) => {
      if (tmpIndex === index) {
          return !val;
      }
      return val; 
  });
  // var data = Seatsdata.map(function(item) {
  //   return {
  //     active: item[index].activeState, 
  //   };
  // });
  this.setState({ data: tmpState });
  }
  
  render() {
      
    
    return (
      <View>
  <TouchableOpacity 
         style={this.state.data[0]?styles.container : 
         styles.container2} 
         onPress={() => this.buttonPressed(0)}>
          <Text>Press Here</Text>
  </TouchableOpacity>
  
  <TouchableOpacity 
         style={this.state.data[1]?styles.container :         
         styles.container2} 
         onPress={() => this.buttonPressed(1)}>
          <Text>Press Here</Text>
  </TouchableOpacity>
  <View style={styles.title} >
    
  <Text>{this.state.data[0].toString()}</Text>
  <Text>{this.state.data[1].toString()}</Text>
  </View>
  </View>
   );
      
  }
  
  }
  const styles = StyleSheet.create({
    container: {
  
      backgroundColor: 'yellow',
  
    },
    container2: {
    
      backgroundColor: 'blue',
    
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 20,
    },
   
  });