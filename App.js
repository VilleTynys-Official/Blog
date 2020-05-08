import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider} from './src/context/BlogContext';



/*
DAY 6
  BLOG POST PROVIDER:
    appi onkin nyt blogproviderin child.
    BlogProvider wrappaa kaikki muut screenit 

    CONTEXT
      "Välitetään propseja kätevästi sinne sun tänne".
      
      Esim. Luodaan State Provideriin ja sieltä Contextin avulla propsit normaaliin tapaan.

        USE REDUCER
          Käyttöönotto:
              hallitaan blogipostauksien tilaa sen avulla.
              (helpottaa kun halutaan käyttää monia funktiota staten muuttamiseen.)
          
        CREATE CONTEXT FUNKTIO  
              funktio contextien hallintaan:



    
    

    
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
  return(
  <Provider>
      <App/>
  </Provider> 
  );
};