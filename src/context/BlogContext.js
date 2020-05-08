import createDataContext from './createDataContext';
//tämä on koodin tehtävänä on luoda Context jonka avulla propseja voidaan välittää mihin vain suoraan.
//hyödynnetään itse luotua createDataContext funktiota, jonka avulla voidaan luoda uusia contexteja kätevästi.

const blogReducer = (state, action)=>{
    switch (action.type){
        case 'add_blogpost':
            return [
                ...state, { id: Math.floor(Math.random()*99999),
                    title: `Blog Post #${state.length +1}`}
                ];
        default:
            return state;
    }
};

//dispatch funktio täytyy saada käyttöön.. vähä kikkailua
const addBlogPost = (dispatch) =>{
    return () => {
        dispatch({ type: 'add_blogpost'});
    }
};

//annetaan createDataContextin hoitaa reducerin luominen.
export const{ Context, Provider} = createDataContext(
    blogReducer,
    { addBlogPost},
    []
    );
