import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Store from './Redux/store.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EpisodesList } from './screens/EpisodesList.js';
import { Home } from './screens/Home.js';
import { getEpisodes, getEpisodesCache } from './Redux/actions.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadingScreen } from './components/LoadingScreen.js';

const Stack = createStackNavigator();

const MyStack = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    const checkLocalStorage = async () => {
      try {
        const storedEpisodes = await AsyncStorage.getItem('list');
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
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  // Renderizar el contenido de la aplicación
  return (
    <Stack.Navigator>
      <Stack.Screen name="Star Trek Selector" component={Home} />
      <Stack.Screen name="Episode" component={EpisodesList} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MyStack />
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
