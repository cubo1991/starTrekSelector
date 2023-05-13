import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch} from 'react-redux'
import Store from './Redux/store.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EpisodesList } from './screens/EpisodesList.js';
import { Home } from './screens/Home.js';
import { getEpisodes, getEpisodesCache } from './Redux/actions.js';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createStackNavigator()

const MyStack= () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const checkLocalStorage = async () => {
      try {
        const storedEpisodes = await AsyncStorage.getItem('@storage_Key');
        if (storedEpisodes !== null) {
          dispatch(getEpisodesCache());
        } else {
          dispatch(getEpisodes());
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    checkLocalStorage();
  }, []);;




  return(

<Stack.Navigator>
<Stack.Screen name="Home" component={Home} />
<Stack.Screen name="Episode" component={EpisodesList} />
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
