import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch} from 'react-redux'
import Store from './Redux/store.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EpisodesList } from './screens/EpisodesList.js';
import { getEpisodes } from './Redux/actions.js';
import { useEffect } from 'react';
 
const Stack = createStackNavigator()

const MyStack= () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEpisodes())
   }, []);



  
  return(

<Stack.Navigator>
<Stack.Screen name="EpisodesList" component={EpisodesList} />
</Stack.Navigator>
)
  
}

export default function App() {


  return (
    <Provider store={Store}>
   <NavigationContainer>
<MyStack/>
   </NavigationContainer>
  </Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
