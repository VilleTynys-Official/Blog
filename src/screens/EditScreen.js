import React, { useContext, useState } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { TextInput } from 'react-native-gesture-handler';


const EditScreen = ({navigation})=>{ 

    const { state } = useContext(Context); //state destructured out from the whole Context

    //iteroidaan läpi kaikki postit ja palautetaan se mis id täsmää navigation id:hen.
    const blogPost =state.find(
        blogPost => blogPost.id === navigation.getParam('id')
        );
    
           
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);


    return (
        <View>
            <Text style={styles.label}>Edit Title:</Text>
            <TextInput style={styles.input}
                        value= {title}
                        onChangeText= { newTitle =>setTitle(newTitle)}
            />
            <Text  style={styles.label}>Edit Content:</Text>
            <TextInput style={styles.input}
                    value={content}
                    onChangeText={ newContent => setContent(newContent)}
            />
            {/* <Text>{navigation.getParam('id')}</Text> */}
        



            <Button
                    title='Add blog post'
                    onPress={() => {
                        addBlogPost(title, content, ()=> {navigation.navigate('Index')})
                        //navigation.navigate('Index')      <-- tämä yksistään on vähän huono vaihto-ehto käyttää suoraan näin.
                        //Voi olla nimittäin et halutaan että esim. titlet ja content ovat päivittyneet tietokantaan (asyncroninen vaihe)
                    }}
            />
            
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

export default EditScreen;