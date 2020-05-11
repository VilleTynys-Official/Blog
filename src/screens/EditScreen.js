import React, { useContext } from 'react';
import { StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({navigation})=>{ 
    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(Context); //destruct stuff from the whole Context

    //iteroidaan läpi kaikki postit ja palautetaan se mis id täsmää navigation id:hen.
    const blogPost =state.find(
        blogPost => blogPost.id === id
        );

    return (
        <BlogPostForm
                initialValues={{title : blogPost.title, content : blogPost.content}}
                onSubmit={(title, content) => {
                    editBlogPost(id, title, content)
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

export default EditScreen;