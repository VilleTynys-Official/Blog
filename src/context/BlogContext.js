import React, { Children } from 'react';

//objekti joka vie tietoa childreneille..
const BlogContext = React.createContext();

//saa childrenin sisäänsä ja palauttaa siitä objektin
export const BlogProvider= ({children}) =>{
    const blogPosts =[
        {title: 'Blog Post #1'},
        {title: 'Blog Post #2'},
    ];

    return<BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;
