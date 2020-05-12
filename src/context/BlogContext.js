import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

//tämä on koodin tehtävänä on luoda Context jonka avulla propseja voidaan välittää mihin vain suoraan.
//hyödynnetään itse luotua createDataContext funktiota, jonka avulla voidaan luoda uusia contexteja kätevästi.

//aina kun halutaan lisätä uusi toiminnalisuus contextiin:
//          1. rakenna funktio dispatchia hyödyntämällä.
//            2. lisää funktio reduceriin
//              3. lisää exporttiin jotta kaikki childit saavat sen käyttöön.



const blogReducer = (state, action)=>{
    switch (action.type){


       case 'get_blogposts':
            return action.payload; 
            //>>>>>oletus on et apin response siis on koko totuus contextista..
            //>>>ei tarvitse lisäillä mitään stateen tms.
       
         //mäpätään kaikkien läpi ja palautetaan propertyt      
        case 'edit_blogpost':
            return state.map((blogpost) => {    //otetaan sisään kaikki vanhat blogpostit.
                return blogpost.id ===action.payload.id
                ? action.payload
                : blogPost;
            });

        case 'delete_blogpost':
            return state.filter ((blogPost) => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [
                ...state,
                { id: Math.floor(Math.random()*99999),
                    title: action.payload.title,
                    content: action.payload.content
                    }
                ];


        default:
            return state;
    }
};


const getBlogPosts = dispatch => {
    return async () => {
        const response= await jsonServer.get('/blogposts') //tää katenoidaan jsonserverin baseURL kanssa..
        /// response.data === [{},{},{}]    array blogposteja..

        dispatch({type: 'get_blogposts', payload: response.data})
    }
}

const addBlogPost = dispatch =>{
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: {title, content} });
        if(callback){
            callback()};       //jos callback löytyy niin tee se. Jos ei niin älä tee mitään.
    };
};



const deleteBlogPost = dispatch =>{
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id});           //sisäfunktio ajetaan komponentissa
    }
};


const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_blogpost', payload: {id, title, content}})
        if(callback){
            callback()};       //jos callback löytyy niin tee se. Jos ei niin älä tee mitään.
    }
};





//annetaan createDataContextin hoitaa reducerin luominen.
export const{ Context, Provider} = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    [ ]         //tähän voisi lykätä dummy blogpostin..
    );
