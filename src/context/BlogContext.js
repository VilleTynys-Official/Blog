import React, {useReducer } from 'react';

//tämä on koodin tehtävänä on luoda BlogContext jonka avulla propseja voidaan välittää mihin vain suoraan.


const BlogContext = React.createContext();



const blogReducer = (state, action)=>{
    switch (action.type){
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length +1}`}];
        default:
            return state;
    }

        
};





//saa kaikki childrenit sisäänsä, lisää siihen objektin blogPosts ja muuten palauttaa childrenin normaalisti.
export const BlogProvider= ({children}) =>{
    const [blogPosts, dispatch]= useReducer(blogReducer,[]);
    
    const addBlogPost = () =>{
        dispatch({ type: 'add_blogpost'});
    };


    //testataan et lisäys toimii indexscreenissä


    //uusi blogPosts objekti ja callback funktio valuvat alaspäin kaikille childreneille.
    return(
        <BlogContext.Provider
            value={{ data: blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>
    );
};

export default BlogContext;
