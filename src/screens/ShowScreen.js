import React ,{ useContext } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const ShowScreen = ()=>{ 
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);


 return (
     <View>
    </View>
 )

};


const styles= StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    
    },
    title: {
        fontSize: 18
    },
    icon:{
        fontSize:24
    }


});

export default ShowScreen;