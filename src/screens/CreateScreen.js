import React ,{ useContext, useState } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { TextInput } from 'react-native-gesture-handler';



const CreateScreen = ({navigation})=>{ 

    

    //paikallinen state joka kontrolloi käyttäjän syötteitä
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    return (
        <View >
            <Text  style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input}
                        value= {title}
                        onChange= {(text)=>setTitle(text)}>
            </TextInput >
            <Text  style={styles.label}>Enter Content:</Text>
            <TextInput  style={styles.input}
                        value= {content}
                        onChange={(text)=>setContent(text)}>
            </TextInput>
            <Button title='Add blog post'></Button>
            <Text></Text>
        </View>
 )

};


const styles= StyleSheet.create({
    input: {
        fontSize: 20,
        borderWidth:1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 10
        
    },
    label :{
        fontSize: 20,
        marginBottom: 15

    }


});

export default CreateScreen;