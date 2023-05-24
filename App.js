import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Store from './Redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EpisodesList } from './screens/EpisodesList';
import { Home } from './screens/Home';
import { getEpisodes, getEpisodesCache } from './Redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadingScreen } from './components/LoadingScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createStackNavigator();

const MyStack = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  
  const [loaded] = useFonts({
    StarNext: require('./assets/fonts/StarNext.otf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

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

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Star Trek Selector"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#000000', // Cambia el color de fondo del encabezado
          },
          headerTitleStyle: {
            color: '#0047AB',
            fontFamily: 'StarNext', // Cambia el color del título del encabezado
          },
        }}
      />
      <Stack.Screen
        name="Episode"
        component={EpisodesList}
        options={{
          headerStyle: {
            backgroundColor: '#000000', // Cambia el color de fondo del encabezado
          },
          headerTitleStyle: {
            color: '#0047AB',
            fontFamily: 'StarNext', // Cambia el color del título del encabezado
          },
        }}
      />
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
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
