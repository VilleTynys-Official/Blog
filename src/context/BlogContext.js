import createDataContext from './createDataContext';
//tämä on koodin tehtävänä on luoda Context jonka avulla propseja voidaan välittää mihin vain suoraan.
//hyödynnetään itse luotua createDataContext funktiota, jonka avulla voidaan luoda uusia contexteja kätevästi.

//aina kun halutaan lisätä uusi toiminnalisuus contextiin:
//          1. rakenna funktio dispatchia hyödyntämällä.
//            2. lisää funktio reduceriin



const blogReducer = (state, action)=>{
    switch (action.type){
        case 'add_blogpost':
            return [
                ...state, { id: Math.floor(Math.random()*99999),
                    title: `Blog Post #${state.length +1}`}
                ];
        case 'delete_blogpost':
            return state.filter ((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};



const addBlogPost = (dispatch) =>{
    return () => {
        dispatch({ type: 'add_blogpost'});
    }
};



const deleteBlogPost = (dispatch) =>{
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id});           //sisäfunktio ajetaan komponentissa?
    }
};

//annetaan createDataContextin hoitaa reducerin luominen.
export const{ Context, Provider} = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost},
    []
    );
