import React ,{ useContext, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';



const IndexScreen = ({navigation}) =>{ 
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);


//indexScreenin renderöinti säädöt
useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () =>{       //luodaan listener joka ajetaan aina kun indexScreen focusoituu..
        getBlogPosts();
    })

    return () =>{               //tää poistaa listenerin jos sivua ei enää haluta pitää "navigaatiossa".
        listener.remove();
    };

}, []); //empty array tells that "run only once"



//huom navigoinnissa kerrotaan myös parametrina mille sivulle halutaan navigoida (id)
 return (
     <View>
        <FlatList 
            data ={state}
            keyExtractor={(blogPost)=> blogPost.title}
            renderItem = {( {item} ) =>{
                return (
                    <TouchableOpacity onPress={() =>navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name= 'trash' />
                                </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )
            }}
            />
     </View>
 );
}

//navigointi nappula.
IndexScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight:()=>
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        
    };
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

export default IndexScreen;