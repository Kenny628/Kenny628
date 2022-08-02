import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Button, onButton, Pressable, CheckBox, FlatList} from 'react-native';

const SelectScreen=()=>{


    const Data=[
        {id: 1, 
        subject: "Maths", 
        selected: false
    },
    {id: 2, 
        subject: "English", 
        selected: false
    },
    {id: 3, 
        subject: "Japanese", 
        selected: false
    },
    {id: 4, 
        subject: "Hi", 
        selected: false
    },
    {id: 5, 
        subject: "Hii", 
        selected: false
    }

    ];
    const[select,setSelect]=useState(Data)
    console.log("selectedItem",select)
    const handleOnpress=(item)=>{

        const newItem = select.map((val)=>{
            if(val.id===item.id){
                return{...val,selected:!val.selected}
            }
            else{
                return val;
            }
        })
        setSelect(newItem)
    }
    return(

        <View>
           <FlatList data={select} keyExtractor={item=>item.id}
           renderItem={({item})=>{
            return(
                <TouchableOpacity OnPress={()=>handleOnpress(item)}>
            <View style={{marginTop:10, backgroundColor: item.selected?'green':'red',padding:20}}><Text>{item.subject}</Text></View></TouchableOpacity>)
           }
        
        
        }
           
           />



            
 

        </View>
    )

}

export default SelectScreen;