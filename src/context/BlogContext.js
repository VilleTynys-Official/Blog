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
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title, content});

        if(callback){
            callback()};       //jos callback löytyy niin tee se. Jos ei niin älä tee mitään.
    };
};



const  deleteBlogPost = dispatch =>{
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);

        dispatch({ type: 'delete_blogpost', payload: id})
    };           //tehdään poisto suoraan client puolella
};


const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content})

        dispatch({
            type: 'edit_blogpost',
            payload: {id, title, content}
        });

        if (callback) {
            callback();
            console.log('call back suoritettu')
        }       //jos callback löytyy niin tee se. Jos ei niin älä tee mitään.
    };
};





//annetaan createDataContextin hoitaa reducerin luominen.
export const{ Context, Provider} = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
    [ ]         //tähän voisi lykätä dummy blogpostin..
    );
