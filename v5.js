// import React, { useState } from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';



// export default function App() {
//     const [names, setNames] = React.useState([{ name: 'Bob', age: 20, disabled: false }, { name: 'Lisa', age: 26, disabled: false }, { name: 'Tom', age: 24, disabled: false }])
//     const btn = (item, index) => {
//         const arr = [...names]
//         for(let i = 0; i < arr.length;i++){
//             arr[i].disabled = false
//         }
//         arr[index].disabled = true
//         setClickedName(item.name)
//         setNames(arr)
//     };
//     return (
//         <View>
//             {names.map((item, index) => {
//                 <Button style={styles.btn} disabledStyle={styles.btnD} disabled={item.disabled} onPress={() => btn(item, index)} />
//             })}
//             <Text>{clickedName}</Text>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//   btn: {
//     flex: 1,
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   btnD: {
//     borderWidth: 1,
//     width: 50,
//     height: 50,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     margin: 5,
//     padding: 10,
//   },
// });

// import React, { Component } from 'react';
// import {
//   Alert,
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight,
//   SectionList,
// } from 'react-native';

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       destinations: [],
//     }
//   }

//   componentDidMount() {
//     /**
//      * In a real mobile app, we will fetch data from a data source
//      * such as a file, database or from the cloud.
//      *
//      * In this demo, we simply hard-code the data here.
//      */
//     let destinations = [
//       {
//         country: 'Australia',
//         airports: [
//           {
//             code: 'BNE',
//             name: 'Brisbane',
//           },
//           {
//             code: 'OOL',
//             name: 'Gold Coast',
//           },
//           {
//             code: 'MEL',
//             name: 'Melbourne',
//           },
//           {
//             code: 'PER',
//             name: 'Perth',
//           },
//           {
//             code: 'SYD',
//             name: 'Sydney',
//           },
//         ]
//       },
//       {
//         country: 'China',
//         airports: [
//           {
//             code: 'PEK',
//             name: 'Beijing',
//           },
//           {
//             code: 'HGH',
//             name: 'Hangzhou',
//           },
//           {
//             code: 'KMG',
//             name: 'Kunming',
//           },
//           {
//             code: 'PVG',
//             name: 'Shanghai',
//           },
//           {
//             code: 'TSN',
//             name: 'Tianjin',
//           },
//         ]
//       },
//       {
//         country: 'Malaysia',
//         airports: [
//           {
//             code: 'BKI',
//             name: 'Kota Kinabalu',
//           },
//           {
//             code: 'KUL',
//             name: 'Kuala Lumpur',
//           },
//           {
//             code: 'KCH',
//             name: 'Kuching',
//           },
//           {
//             code: 'PEN',
//             name: 'Penang',
//           },
//         ]
//       },
//       {
//         country: 'New Zealand',
//         airports: [
//           {
//             code: 'AKL',
//             name: 'Auckland',
//           },
//           {
//             code: 'CHC',
//             name: 'Christchurch',
//           },
//         ]
//       },
//     ];

//     /**
//      * Set the state 'destinations' with data "fetched" from data source
//      * in the format required for SectionList
//      *
//      * [{ title: 'Section Title', data: [...]}, {...}, ...]
//      *
//      */
//     let sections = [];
//     for(let i = 0; i < destinations.length; i++) {
//       sections.push({
//         title: destinations[i].country,
//         data: destinations[i].airports,
//       });
//     }

//     this.setState({
//       destinations: sections,
//     })
//   }

//   render() {
//     console.log(this.state.destinations)
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={ this.state.destinations }
//           renderSectionHeader={ ({section}) =>
//             <Text style={styles.header}>
//               { section.title }
//             </Text>
//           }
//           renderItem={({item}) =>
//             <TouchableHighlight
//               underlayColor={'#cccccc'}
//               onPress={ () => {
//                 Alert.alert(`You pressed on Destination:
// ${item.name} (${item.code})`)
//               }}
//             >
//               <View style={styles.item}>
//                 <Text style={styles.itemName}>
//                   { `${item.name} (${item.code})` }
//                 </Text>
//               </View>
//             </TouchableHighlight>
//           }
//           keyExtractor={(item) => {item.code}}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//   },
//   header: {
//     backgroundColor : 'red',
//     fontSize : 24,
//     fontWeight: 'bold',
//     padding: 10,
//     color: '#fff',
//   },
//   item: {
//     justifyContent: 'center',
//     paddingTop: 20,
//     paddingBottom: 20,
//     paddingLeft: 20,
//     paddingRight: 20,
//     borderBottomWidth: 1,
//   },
//   itemName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   itemCode: {
//     fontSize: 18,
//   }
// });

// import React from "react";
// import SeatHandler from "./SeatHandler";

// export default function App() {
//   const [selected, setSelected] = React.useState([]);
//   return (
//     <div className="App">
//       <SeatHandler setSelected={setSelected} />
//       <div className="footer">
//         <spam>
//           <h3>SEATS : {selected.toString()}</h3>
//         </spam>
//         <button className="btn btn-warning">Continue</button>
//       </div>
//     </div>
//   );
// }

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';

// import Intro from './app/screens/Intro';
// import NoteScreen from './app/screens/NoteScreen';
// import NoteDetail from './app/components/NoteDetail';
// import NoteProvider from './app/contexts/NoteProvider';

// const Stack = createStackNavigator();

// export default function App() {
//   const [user, setUser] = useState({});
//   const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);
//   const findUser = async () => {
//     const result = await AsyncStorage.getItem('user');

//     if (result === null) return setIsAppFirstTimeOpen(true);

//     setUser(JSON.parse(result));
//     setIsAppFirstTimeOpen(false);
//   };

//   useEffect(() => {
//     findUser();
//   }, []);

//   const renderNoteScreen = props => <NoteScreen {...props} user={user} />;

//   if (isAppFirstTimeOpen) return <Intro onFinish={findUser} />;
//   return (
//     <NavigationContainer>
//       <NoteProvider>
//         <Stack.Navigator
//           screenOptions={{ headerTitle: '', headerTransparent: true }}
//         >
//           <Stack.Screen component={renderNoteScreen} name='NoteScreen' />
//           <Stack.Screen component={NoteDetail} name='NoteDetail' />
//         </Stack.Navigator>
//       </NoteProvider>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React, { Component } from 'react';
import BookMySeats from './component/BookMySeats';

class App extends Component {
    render () {
        return (
            <BookMySeats/>
        );
    }
};
export default App;