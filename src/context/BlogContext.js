import createDataContext from './createDataContext';
//tämä on koodin tehtävänä on luoda Context jonka avulla propseja voidaan välittää mihin vain suoraan.
//hyödynnetään itse luotua createDataContext funktiota, jonka avulla voidaan luoda uusia contexteja kätevästi.

//aina kun halutaan lisätä uusi toiminnalisuus contextiin:
//          1. rakenna funktio dispatchia hyödyntämällä.
//            2. lisää funktio reduceriin



const blogReducer = (state, action)=>{
    switch (action.type){
        case 'delete_blogpost':
            return state.filter ((blogPost) => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [
                ...state, { id: Math.floor(Math.random()*99999),
                    title: action.payload.title,
                    content: action.payload.content
                    }
                ];
       
        default:
            return state;
    }
};



const addBlogPost = (dispatch) =>{
    return (title, content) => {
        dispatch({ type: 'add_blogpost', payload: {title: title, content: content} });
    };
};



const deleteBlogPost = (dispatch) =>{
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id});           //sisäfunktio ajetaan komponentissa
    }
};

//annetaan createDataContextin hoitaa reducerin luominen.
export const{ Context, Provider} = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost},
    []
    );
