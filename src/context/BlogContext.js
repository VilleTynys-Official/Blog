import React, { Children } from 'react';

//objekti joka vie tietoa childreneille..
const BlogContext = React.createContext();

//saa childrenin sisäänsä ja palauttaa siitä objektin
export const BlogProvider= ({children}) =>{
    return<BlogContext.Provider>
        {children}
    </BlogContext.Provider>
};

