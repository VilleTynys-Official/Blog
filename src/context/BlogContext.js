import React, { useState } from 'react';

//tämä on koodin tehtävänä on luoda BlogContext jonka avulla propseja voidaan välittää mihin vain suoraan.


//objekti joka vie tietoa childreneille..
const BlogContext = React.createContext();

//saa kaikki childrenit sisäänsä, lisää siihen objektin blogPosts ja muuten palauttaa childrenin normaalisti.
export const BlogProvider= ({children}) =>{
    const [blogPosts, setBlogPosts]= useState([]);

    //käytetään setteriä ja lisätään uusi blogPost.
    const addBlogPost = () => {
        setBlogPosts([
            ...blogPosts, { title : `Blog Post #${blogPosts.length+1}` } 
        ]); 
    };

    //uusi blogPosts objekti ja callback funktio valuvat alaspäin kaikille childreneille.
    return(
        <BlogContext.Provider
            value={{ data: blogPosts, addBlogPost}}>
        {children}
    </BlogContext.Provider>
    );
};

export default BlogContext;
