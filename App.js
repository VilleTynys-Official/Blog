import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import {BlogProvider} from './src/context/BlogContext';



/*
BLOGPROVIDER:
    appi onkin nyt blogproviderin child.
    BlogProvider wrappaa kaikki muut screenit 
    
    
    

    
*/


const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteNanem: 'Index',
    defaultNavigationOptions: {
      title:'Blogs'
    }
  }
);


//appi onkin nyt blogproviderin child.
//>>BlogProvider wrappaa kaikki muut screenit
const App = createAppContainer(navigator);

export default () =>{
  return(<BlogProvider>
      <App/>
    </BlogProvider> 
  );
};