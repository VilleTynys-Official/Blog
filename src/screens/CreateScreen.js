import React, { useContext, useState } from 'react';
import {StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const CreateScreen = ({navigation})=>{ 
    //paikallinen state joka kontrolloi käyttäjän syötteitä
    const { addBlogPost } = useContext(Context); //destructured out the function from the whole Context


    return(
        <BlogPostForm
            onSubmit={(title, content)=>{
                addBlogPost(title, content, () => navigation.navigate('Index'));
            }}
        ></BlogPostForm>
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