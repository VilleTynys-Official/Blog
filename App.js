import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import {BlogProvider} from './src/context/BlogContext';



/*
DAY 6
  BLOG POST PROVIDER:
    appi onkin nyt blogproviderin child.
    BlogProvider wrappaa kaikki muut screenit 

    CONTEXT
      "Välitetään propseja kätevästi sinne sun tänne".
      
      Esim. Luodaan State Provideriin ja sieltä Contextin avulla propsit normaaliin tapaan.

    USE REDUCER
      Otetaan reducer käyttöön ja hallitaan blogipostauksien tilaa sen avulla.
    

    
    

    
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