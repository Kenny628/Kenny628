export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedButton: null };
        this.selectionOnPress = this.selectionOnPress.bind(this);
    }
    
    selectionOnPress(userType) {
        this.setState({ selectedButton: userType });
    }
    
    render() {
        return (
            <View>
                <Text>
                    Choose Type of User
                </Text>
                <TouchableOpacity
                    onPress={() => this.selectionOnPress("BASIC")}
                >
                    <Text
                        style={{
                            backgroundColor:
                                this.state.selectedButton === "BASIC"
                                    ? "red"
                                    : "grey"
                        }}
                    >
                        <Text>BASIC</Text>
                    </Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                    onPress={() => this.selectionOnPress("INTERMEDIATE")}
                >
                    <Text
                        style={{
                            backgroundColor:
                                this.state.selectedButton === "INTERMEDIATE"
                                    ? "red"
                                    : "grey"
                        }}
                    >
                        <Text>
                            INTERMEDIATE
                        </Text>
                    </Text>
                </TouchableOpacity>
    
                <TouchableOpacity
                    onPress={() => this.selectionOnPress("ADVANCED")}
                >
                    <Text
                        style={{
                            backgroundColor:
                                this.state.selectedButton === "ADVANCED"
                                    ? "red"
                                    : "grey"
                        }}
                    >
                        <Text>
                            INTERMEDIATE
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    }
  
    const styles = StyleSheet.create({
      container: {
        marginTop: 0,
        flex: 1,
        // alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        flexDirection:'row',
        marginBottom: 100,
      },
      container2: {
        marginTop: 5,
        flex: 1,
        // alignItems: 'flex-start',
        alignSelf: 'center',
        backgroundColor: '#F5FCFF',
        // justifyContent: 'center',
        flexDirection:'row',
      },
      container3: {
        marginTop: 100,
        flex: 1,
        // alignItems: 'flex-end',
        alignSelf: 'center',
        backgroundColor: '#F5FCFF',
        // justifyContent: 'center',
        flexDirection:'row',
      },
      title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
      },
      image: {
        width: 100,
        height: 100,
      },
      scroll: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20,
        backrgoundColor: 'blue',
      }
    });
    








//     import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button, onButton, Pressable } from 'react-native';

// export default class App extends React.Component {
//   handleClick = () => {
//     alert('Button clicked!');
    
// }
// constructor(props) {
//   super(props);
//   this.state = { selectedButton: null };
//   this.selectionOnPress = this.selectionOnPress.bind(this);
// }
//  selectionOnPress(userType) {
//         this.setState({ selectedButton: userType });
//     }
// toggle = function () {
//   if (color) {
//     setColor(false);
//   } else {
//     setColor(true);
//     setColor2(false);
//   }
// };
// clickedd = function () {
//   if(this.state.clicked==true){
//     this.TouchableOpacity.borderColor= "blue";
//   }
//   else{

//   }
//   }
// state={toggle:true}

// _onPress=function(){
//   const newState = !this.state.toggle;
//   this.setState({toggle:newState});
// }
// _test=function(){
//   if(true){

//   }
// }
// constructor(props) {
//   super(props);
//   this.state = {
//     clicked: false,
    
//   }
//   };

//   render() {
    
   
//     const{toggle}=this.state;
//     const textValue=toggle?"ON":"OFF";
//     const buttonBg=toggle?"blue":'black';
//     const test=toggle?true:false;
//     const textColor=toggle?"white=":"black";
//     var SampleNameArray = [ "Pankaj", "Rita", "Mohan", "Amit", "Babulal", "Sakshi" ];
//     return (
      
//       <View>
//      <View><Text style={styles.title}>Choose you seat!</Text>
//      <TouchableOpacity onPress={()=>{this._onPress();}} style={{margin:10,flex:1,height:60,borderColor:buttonBg, justifyContent:'center',borderWidth:'blue',borderWidth:10}}>
//     <Text style={{color:textColor,textAlign:'center',fontSize:16}}>
//       {textValue}
//     </Text>

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
//   <Button
//       onPress={this.handleClick}
//       title="5 pm"
//       backgroundColor="blue"
//     />


// </ScrollView>
//     <ScrollView horizontal={true} style={styles.scroll}>
//    <Button 
//       onPress={this.handleClick}
//       title="10 am"
//       backgroundColor="blue"
//     />
//     <Button
//       onPress={this.handleClick}
//       title="11 am"
//       backgroundColor="blue"
      
//     />
//      <Button
//       onPress={this.handleClick}
//       title="12 pm"
//       backgroundColor="blue"
//     />
//     <Button
//       onPress={this.handleClick}
//       title="1 pm"
//       backgroundColor="blue"
//     />
//        <Button
//       onPress={this.handleClick}
//       title="2 pm"
//       backgroundColor="blue"
//     />
//     <Button
//       onPress={this.handleClick}
//       title="3 pm"
//       backgroundColor="blue"
//     /><Button
//     onPress={this.handleClick}
//     title="4 pm"
//     backgroundColor="blue"
//   />
//   <Button
//       onPress={this.handleClick}
//       title="5 pm"
//       backgroundColor="blue"
//     />


// </ScrollView>

//     </View>
//       <View>
    
//       <View style={styles.container}>
//       <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
        
//       </View>
//       <View style={styles.container2}>
//          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
        
//       </View>
//       <View style={styles.container3}>
//          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
//          <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
//         <Image style={styles.image} source={require('./assets/2.png')} />
//         </TouchableOpacity>
        
//       </View>
      
//       </View>
//       <View><Button
//        onPress={this.handleClick}
//       title="Book"
//       backgroundColor="blue"
//     /></View>
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
//     backgroundColor: '#F5FCFF',
//     justifyContent: 'center',
//     flexDirection:'row',
//     marginBottom: 100,
//   },
//   container2: {
//     marginTop: 5,
//     flex: 1,
//     // alignItems: 'flex-start',
//     alignSelf: 'center',
//     backgroundColor: '#F5FCFF',
//     // justifyContent: 'center',
//     flexDirection:'row',
//   },
//   container3: {
//     marginTop: 100,
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
