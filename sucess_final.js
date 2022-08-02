// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button, onButton, Pressable, CheckBox, TextInput} from 'react-native';
// import SeatsComponent from './SeatsComponent.js';
// export default class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { selectedButton: null, numberOfSeats: 0,bookedSeats: [],bookedStatus:'' ,availableSeats: ['1A', '1B', '2A', '2B', '10A', '10B']};
//         this.createSeats=this.createSeats.bind(this);
//         this.BookMySeats=this.BookMySeats.bind(this);
//         this.confirmBooking=this.confirmBooking.bind(this);
//     }
  
      
//       createSeats = (rows, startIndex) => {
//         let i = 0;
//         let j = startIndex;
//         let k = 'A';
//         const section = [];
//         while(i < 6 && j <= rows) {
//             if(k > 'F') {
//                 k = 'A';
//                 j++;
//             }
//             if(j < rows + 1) {
//                 section.push(j + k);
//                 k = String.fromCharCode(k.charCodeAt(0) + 1);
//             }
//         }
//         return section;
    
//     }
//     BookMySeats = () => {
    
        
//         const addSeat = (ev) => {
//             if(this.state.numberOfSeats && !ev.target.className.includes('disabled')) {
//                 const seatsToBook = parseInt(this.state.numberOfSeats, 10);
//               if(this.state.bookedSeats.length <= seatsToBook) {
//                   if (this.state.bookedSeats.includes(ev.target.innerText)) {
//                       const newAvailable = this.state.bookedSeats.filter(seat => seat !== ev.target.innerText);
//                       this.setState({
//                         bookSeats: newAvailable,
//                       });
//                   } else if(this.state.bookedSeats.length < this.state.numberOfSeats) {
//                       this.setState({
//                         bookSeats: [...bookedSeats, ev.target.innerText]
//                       });
//                   } else if (this.state.bookedSeats.length === seatsToBook) {
//                     this.state.bookedSeats.shift();
//                       this.setState({
//                         bookSeats: [...bookedSeats, ev.target.innerText]
//                       });
//                   }
//               }
//             }
//           }
//         }
        
//         confirmBooking = () => {
//             this.setState({
//                 bookedStatus: 'You have successfully booked the following seats:'
//               });
//             this.state.bookedSeats.forEach(seat => {
//                 this.setState(prevState => {
//                      return prevState + seat + ' ';
//                  })
//             });
//             const newAvailableSeats = this.state.availableSeats.filter(seat => !this.state.bookedSeats.includes(seat));
//             this.setState({
//                 AvailableSeats: newAvailableSeats,
//                 bookSeats: [],
//                 numberOfSeats: 0,
//               });
//         };
        
        
//     render() {
        
//         return (
//             <View>
//             <Text>How many seats would you like to book?</Text>
//             <TextInput value={this.createSeats(2, '1').toString()} onChange={(ev) => this.setState({numberOfSeats: ev.target.value})}/>
//             {/* <SeatsComponent values={this.createSeats(2, '1')}
//                    availableSeats={this.state.availableSeats}
//                    bookedSeats={this.state.bookedSeats}
//                    addSeat={this.state.addSeat}/>
//             <SeatsComponent values={this.createSeats(10, '3')}
//                    availableSeats={this.state.availableSeats}
//                    bookedSeats={this.state.bookedSeats}
//                    addSeat={this.state.addSeat}/> */}

//                    <button onClick={this.confirmBooking()}>Book seats</button>
//             {/* <Text>{this.state.bookedStatus.toString()}</Text> */}
//         </View>
//         );
//     }
//     }
  
//     // const styles = StyleSheet.create({
//     //   container: {
//     //     marginTop: 0,
//     //     flex: 1,
//     //     // alignItems: 'center',
//     //     alignSelf: 'center',
//     //     backgroundColor: '#F5FCFF',
//     //     justifyContent: 'center',
//     //     flexDirection:'row',
//     //     marginBottom: 100,
//     //   },
//     //   container2: {
//     //     marginTop: 5,
//     //     flex: 1,
//     //     // alignItems: 'flex-start',
//     //     alignSelf: 'center',
//     //     backgroundColor: '#F5FCFF',
//     //     // justifyContent: 'center',
//     //     flexDirection:'row',
//     //   },
//     //   container3: {
//     //     marginTop: 100,
//     //     flex: 1,
//     //     // alignItems: 'flex-end',
//     //     alignSelf: 'center',
//     //     backgroundColor: '#F5FCFF',
//     //     // justifyContent: 'center',
//     //     flexDirection:'row',
//     //   },
//     //   title: {
//     //     fontSize: 40,
//     //     fontWeight: 'bold',
//     //     textAlign: 'center',
//     //     margin: 20,
//     //   },
//     //   image: {
//     //     width: 100,
//     //     height: 100,
//     //   },
//     //   scroll: {
//     //     fontSize: 40,
//     //     fontWeight: 'bold',
//     //     textAlign: 'center',
//     //     margin: 20,
//     //     backrgoundColor: 'blue',
//     //   }
//     // });

import React from 'react';
// import { Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

// const App = () => (
//   <View
//     style={{
//       flex: 1,
//       backgroundColor: '#000',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}>
//     <Text style={{ color: '#fff' }}>
//       Notice that the status bar has light text!
//     </Text>
//     <StatusBar style="light" />
//   </View>
// );

// export default App;

// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import Login from "./components/Login";
// import Ticket from "./components/Ticket";
// const Stack = createStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Ticket" component={Ticket} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default App;

// import { StackNavigator } from "react-navigation";
import Movies from "./src/Movies";
import Confirmation from "./src/Confirmation";
import Select from "./Select.js";

// import {
//   createStackNavigator,
//   createAppContainer
// } from "@react-navigation/stack";

// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// const StackNav = createStackNavigator();

// export default function App() {
//   return (
//       <NavigationContainer>
//         <StackNav.Navigator initialRouteName='Select'>
//           <StackNav.Screen options={{headerShown: false}} name='Select' component={Select} />
//           <StackNav.Screen options={{headerShown: false}} name='Confirmation' component={Confirmation} />
//         </StackNav.Navigator>
//       </NavigationContainer>
//   );
// }

// import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button, onButton, Pressable, CheckBox,FlatList} from 'react-native';
// const Seatsdata=require('./Seats.json')

// export default class App extends React.Component {


// constructor(props) {
//          super(props);
//          this.state = { data: [
//           {id: 1, 
//           subject: "Maths", 
//           selected: false
//       },
//       {id: 2, 
//           subject: "English", 
//           selected: false
//       },
//       {id: 3, 
//           subject: "Japanese", 
//           selected: false
//       },
//       {id: 4, 
//           subject: "Hi", 
//           selected: false
//       },
//       {id: 5, 
//           subject: "Hii", 
//           selected: false
//       }
  
//       ]
//          };
//         //  this.buttonPressed = this.buttonPressed.bind(this);
//          this.handleOnpress = this.handleOnpress.bind(this);
         
// }

// // buttonPressed(index) {
// //     const tmpState = this.state.data.map((val, tmpIndex) => {
// //       if (tmpIndex === index) {
// //           return !val;
// //       }
// //       return val; 
// //   });
// //   // var data = Seatsdata.map(function(item) {
// //   //   return {
// //   //     active: item[index].activeState, 
// //   //   };
// //   // });
// //   this.setState({ data: tmpState });
// //   }
//   handleOnpress=(item)=>{

//     const newItem = this.state.data.map((val)=>{
//         if(val.id===item.id){
//             return{...val,selected:!val.selected}
//         }
//         else{
//             return val;
//         }
//     })
//     this.setState({ data: newItem });
// }
  
//   render() {
      
    
//     return(

//       <View>
//          <FlatList data={this.state.data} keyExtractor={item=>item.id}
//          renderItem={({item})=>{
//           <TouchableOpacity OnPress={()=>handleOnpress(item)}/>
//           return(<View style={{marginTop:10, backgroundColor: item.selected?'green':'yellow',padding:20}}><Text>{item.subject}</Text></View>)
//          }
      
      
//       }
         
//          />



          


//       </View>
//   );
      
//   }
  
//   }
//   const styles = StyleSheet.create({
//     container: {
  
//       backgroundColor: 'yellow',
  
//     },
//     container2: {
    
//       backgroundColor: 'blue',
    
//     },
//     title: {
//       fontSize: 40,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       margin: 20,
//     },
   
//   });

import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button, onButton, Pressable, CheckBox,FlatList} from 'react-native';
const Seatsdata=require('./Seats.json')

export default class App extends React.Component {


constructor(props) {
         super(props);
         this.state = { data: [
          {id: 1, 
          subject: "Maths", 
          selected: false,
          booked: true
      },
      {id: 2, 
          subject: "English", 
          selected: false,
          booked: true
      },
      {id: 3, 
          subject: "Japanese", 
          selected: false,
          booked: true
      },
      {id: 4, 
          subject: "Hi", 
          selected: false,
          booked: false
      },
      {id: 5, 
          subject: "Hii", 
          selected: false,
          booked: false
      }
  
      ]
         };
        //  this.buttonPressed = this.buttonPressed.bind(this);
        //  this.handleOnpress = this.handleOnpress.bind(this);
         
}

// buttonPressed(index) {
//     const tmpState = this.state.data.map((val, tmpIndex) => {
//       if (tmpIndex === index) {
//           return !val;
//       }
//       return val; 
//   });
//   // var data = Seatsdata.map(function(item) {
//   //   return {
//   //     active: item[index].activeState, 
//   //   };
//   // });
//   this.setState({ data: tmpState });
//   }
//   handleOnpress=(item)=>{

//     const newItem = this.state.data.map((val)=>{
//         if(val.id===item.id){
//             return{...val,selected:!val.selected}
//         }
//         else{
//             return val;
//         }
//     })
//     this.setState({ data: newItem });
// }
  selectionHandler=(ind)=>{
    const{data}=this.state;
    let arr=data.map((item,index)=>{
      if(ind==index){
        item.selected = !item.selected
      }
      return {...item}
    })
    this.setState({data: arr})

  }
  checkBooked=(ind)=>{
    const{data}=this.state;
    let arr=data.map((item,index)=>{
      if(ind==index&&data.booked==true){
        item.selected = !item.selected
      }
      return {...item}
    })
    this.setState({data: arr})

  }
  compoenenDidMount(){
    let arr=this.state.data.map((item,index)=>{
      item.selected=false
      return{...item};
    })
    this.setState({data: arr});
    console.log('arr data===>', arr);
  }
  render() {
      const{data}=this.state;
    
    return(

      <View>
       <ScrollView>
        <View style={{flex: 1,justifyContent: "center", alignItems: "center"}}>{
        this.state.data.map((item,index)=>{
          if(item.booked==false){
            
        return(
         
          <TouchableOpacity onPress={()=>this.selectionHandler(index)}style={{paddingVertical: 13, paddingHorizontal: 70,borderRadius: 42, backgroundColor: item.selected?'red':'blue', justifyContent: 'center', alignItems: 'center'}}><Text>{item.subject}</Text><Text>{item.selected?'selected':'no selected'}</Text></TouchableOpacity>

        )
        
        }

        else{
          return(
         
            <TouchableOpacity disabled={true}onPress={()=>this.selectionHandler(index)}style={{paddingVertical: 13, paddingHorizontal: 70,borderRadius: 42, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}><Text>{item.subject}</Text><Text>Booked</Text></TouchableOpacity>
          )
        }
      }
        
        )
        
        
        }
        
        <Button title="Book" onPress></Button>
        </View>


       </ScrollView>
          


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