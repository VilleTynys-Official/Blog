import React ,{ useContext } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BlogContext from '../context/BlogContext';


const IndexScreen = ()=>{
    
    const value = useContext(BlogContext); //tän avulla voidaan hyödyntää BlogContextin propseja.

 return (
     <View>
        <Text>Index sivu</Text>
        <Text>{value}</Text>
     </View>
 ) ;
}


const styles= StyleSheet.create({});

export default IndexScreen;