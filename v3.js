// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button, onButton, Pressable, CheckBox} from 'react-native';
// const Seatsdata=require('./Seats.json')

// export default class App extends React.Component {


// constructor(props) {
//          super(props);
//          this.state = { data: Seatsdata
//          };
//          this.buttonPressed = this.buttonPressed.bind(this);
// }
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
// this.setState({ activeState: tmpState });
// }

// render() {
    
  
//   return (
//     <View>
// <TouchableOpacity 
//        style={this.state.data[0].activeState ? styles.container : 
//        styles.container2} 
//        onPress={() => this.buttonPressed(0)}>
//         <Text>Press Here</Text>
// </TouchableOpacity>

// <TouchableOpacity 
//        style={this.state.data[1].activeState ? styles.container :         
//        styles.container2} 
//        onPress={() => this.buttonPressed(1)}>
//         <Text>Press Here</Text>
// </TouchableOpacity>
// <View style={styles.title} >
  
// <Text>{this.state.data[0].activeState.toString()}</Text>
// <Text>{this.state.data[1].activeState.toString()}</Text>
// </View>
// </View>
//  );
    
// }

// }
// const styles = StyleSheet.create({
//   container: {

//     backgroundColor: 'yellow',

//   },
//   container2: {
  
//     backgroundColor: 'blue',
  
//   },
//   title: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: 20,
//   },
 
// });

import React from 'react';
import {View, Text} from 'react-native';

const Home = () => {
  const array = [
    {
      key: '1',
      title: 'example title 1',
      subtitle: 'example subtitle 1',
    },
    {
      key: '2',
      title: 'example title 2',
      subtitle: 'example subtitle 2',
    },
    {
      key: '3',
      title: 'example title 3',
      subtitle: 'example subtitle 3',
    },
  ];

  const list = () => {
    return array.map((element) => {
      return (
        <View key={element[0].key} style={{margin: 10}}>
          <Text>{element[0].title}</Text>
          <Text>{element[0].subtitle}</Text>
        </View>
      );
    });
  };

  return <View>{list()}</View>;
};

export default Home;




// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button, onButton, Pressable, CheckBox} from 'react-native';
// const Seatsdata=require('./Seats.json')

// export default class App extends React.Component {
//   handleClick = () => {
//     alert('Booked!');
    
// }
// constructor(props) {
//   super(props);
//   this.state = { selectedButton: null,selectedButtonTime: null,selectedButtonSeat: null, data:Seatsdata, data2:Seatsdata.activeState,  v: Seatsdata.id};
//   this.selectionOnPress = this.selectionOnPress.bind(this);
//   this.selectionOnPressTime = this.selectionOnPressTime.bind(this);
//   this.selectionOnPressSeat = this.selectionOnPressSeat.bind(this);
//   this.buttonPressed = this.buttonPressed.bind(this);

 
// }
buttonPressed(index) {
  const tmpState = this.state.data.activeState.map((val, tmpIndex) => {
    if (tmpIndex === index) {
        return !val;
    }
    return val; 
});
this.setState({ activeState: tmpState });
}
// onchecked(id){
//   const data=this.state.data
//   const index=data.findIndex(x=>x.id===id);
//   data[index].checked=!data[index].checked
//   this.setState(data)
// }
// // componentDidMount(){
  
// // }
// // renderSeat(){
// //   return this.state.data.map((item,key) => {
// //     return (
// //       <TouchableOpacity key={key} onPress={()=>{this.onchecked(item.id)}}
// //                 >
// //                   <Image style={styles.image} source={require('./assets/2.png')} value={item.checked} onValueChange={()=>{this.onchecked(item.id)}}/>
// //                   <Text>{item.key}</Text>
// //                 </TouchableOpacity>
// //     )
// //   })
// // }
//  selectionOnPress(userType) {
//         this.setState({ selectedButton: userType });
//     }
//     selectionOnPressTime(userType) {
//       this.setState({ selectedButtonTime: userType });
//   }
//   selectionOnPressSeat(userType) {
//     this.setState({ selectedButtonSeat: userType });
// }
//   render() {
    
  
//     return (
      
//       <View>
//         <Text style={styles.title}>{this.state.data[1].activeState.toString()}</Text>
//      <View><Text style={styles.title}>Choose you seat!</Text>
//      {/* <View><Text>{this.renderSeat()}</Text></View> */}
//      <TouchableOpacity 
//        style={this.state.data[0].activeState ? styles.container : 
//        styles.container2} 
//        onPress={() => this.buttonPressed(0)}>
//         <Text>Press Here</Text>
// </TouchableOpacity>

// <TouchableOpacity 
//        style={this.state.data[1].activeState.toString() ? styles.container :         
//        styles.container2} 
//        onPress={() => this.buttonPressed(1)}>
//         <Text>Press Here</Text>
// </TouchableOpacity>
//     <ScrollView horizontal={true} style={styles.scroll}>
//     <TouchableOpacity
//                     onPress={() => this.selectionOnPress("11/8")}
//                 >
//                     <Text
//                         style={{
//                             backgroundColor:
//                                 this.state.selectedButton === "11/8"
//                                     ? "red"
//                                     : "grey"
//                         }}
//                     >
//                         <Text>11/8</Text>
//                     </Text>
//                 </TouchableOpacity>


//                 <TouchableOpacity
//                     onPress={() => this.selectionOnPress("12/8")}
//                 >
//                     <Text
//                         style={{
//                             backgroundColor:
//                                 this.state.selectedButton === "12/8"
//                                     ? "red"
//                                     : "grey"
//                         }}
//                     >
//                         <Text>
//                         12/8
//                         </Text>
//                     </Text>
//                 </TouchableOpacity>
    
//                 <TouchableOpacity
//                     onPress={() => this.selectionOnPress("13/8")}
//                 >
//                     <Text
//                         style={{
//                             backgroundColor:
//                                 this.state.selectedButton === "13/8"
//                                     ? "red"
//                                     : "grey"
//                         }}
//                     >
//                         <Text>
//                         13/8
//                         </Text>
//                     </Text>
//                 </TouchableOpacity>
//   {/* <Button
//       onPress={this.handleClick}
//       title="5 pm"
//       backgroundColor="blue"
//     /> */}

// </ScrollView>
//     <ScrollView horizontal={true} style={styles.scroll}>
   
//   {/* <Button
//       onPress={this.handleClick}
//       title="5 pm"
//       backgroundColor="blue"
//     /> */}

// <TouchableOpacity
//                     onPress={() => this.selectionOnPressTime("12:00")}
//                 >
//                     <Text
//                         style={{
//                             backgroundColor:
//                                 this.state.selectedButtonTime === "12:00"
//                                     ? "red"
//                                     : "grey"
//                         }}
//                     >
//                         <Text>
//                         12:00
//                         </Text>
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={() => this.selectionOnPressTime("1:00")}
//                 >
//                     <Text
//                         style={{
//                             backgroundColor:
//                                 this.state.selectedButtonTime === "1:00"
//                                     ? "red"
//                                     : "grey"
//                         }}
//                     >
//                         <Text>
//                         1:00
//                         </Text>
//                     </Text>
//                 </TouchableOpacity>
// </ScrollView>

//     </View>
//       <View>
    
//       <View style={styles.container}>
//       <TouchableOpacity
//                     onPress={() => this.selectionOnPressSeat("A1")}
//                 >
//                   <Image style={{width: 100,height: 100,backgroundColor:
//                                 this.state.selectedButtonSeat === "A1"
//                                     ? "grey"
//                                     : "white"}} source={require('./assets/2.png')} />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                     onPress={() => this.selectionOnPressSeat("A2")}
//                 >
//                   <Image style={{width: 100,height: 100,backgroundColor:
//                                 this.state.selectedButtonSeat === "A2"
//                                     ? "grey"
//                                     : "white"}} source={require('./assets/2.png')} />
//                 </TouchableOpacity>
//          <TouchableOpacity>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity >
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
        
//       </View>
//       <View style={styles.container2}>
//          <TouchableOpacity >
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity >
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity >
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity >
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
        
//       </View>
//       <View style={styles.container3}>
//          <TouchableOpacity >
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity >
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity >
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity >
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
        
//       </View>
      
//       </View>
//       <View>
        
//     <Text>{this.state.selectedButton}</Text>
//     <Text>{this.state.selectedButtonTime}</Text>
//     <Text>{this.state.selectedButtonSeat}</Text>
//     </View>
//     <View>

//     <Button style
//        onPress={this.handleClick}
//       title="Book"
//       backgroundColor="blue"
//     />
//     </View>

//       </View>
      
//     );
    
//   }
  
// }


// const styles = StyleSheet.create({
//   container: {
//     marginTop: 0,
//     flex: 1,
//     // alignItems: 'center',
//     alignSelf: 'center',
//     // backgroundColor: '#F5FCFF',
//     backgroundColor: 'yellow',
//     justifyContent: 'center',
//     flexDirection:'row',
//     marginBottom: 100,
//   },
//   container2: {
//     marginTop: 5,
//     flex: 1,
//     // alignItems: 'flex-start',
//     alignSelf: 'center',
//     // backgroundColor: '#F5FCFF',
//     backgroundColor: 'blue',
//     // justifyContent: 'center',
//     flexDirection:'row',
//   },
//   container3: {
//     marginTop: 100,
//     marginBottom: 100,
//     flex: 1,
//     // alignItems: 'flex-end',
//     alignSelf: 'center',
//     backgroundColor: '#F5FCFF',
//     // justifyContent: 'center',
//     flexDirection:'row',
//   },
//   title: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: 20,
//   },
//   image: {
//     width: 100,
//     height: 100,
//   },
//   scroll: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin: 20,
//     backrgoundColor: 'blue',
//   }
// });
