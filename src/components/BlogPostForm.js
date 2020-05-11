import React, { useContext, useState } from 'react';
import {View, Text, TextInput, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';



const BlogPostForm = () => { 
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');




    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input}
                        value= {title}
                        onChangeText= { text =>setTitle(text)}
            />
            <Text  style={styles.label}>Enter Content:</Text>
            <TextInput style={styles.input}
                    value={content}
                    onChangeText={ text => setContent(text)}
            />

            <Button
                    title='Save blog post'
                    onPress={() => {}}
            />
            
        </View>
 );

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


export default BlogPostForm;