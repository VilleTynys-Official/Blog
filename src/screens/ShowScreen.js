import React ,{ useContext } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons} from '@expo/vector-icons/';


const ShowScreen = ({navigation})=>{ 
    const { state } = useContext(Context);

//etsitään oikea id staten find funktiolla.
const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));


 return (
     <View>
         <Text>{blogPost.title}</Text>
         <Text>{blogPost.content}</Text>
    </View>
 );
};



//navigointi nappula (josta pääsee edit screeniin).
ShowScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight:()=>
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id')})}>
                <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
        
    };
};



const styles= StyleSheet.create({


});

export default ShowScreen;