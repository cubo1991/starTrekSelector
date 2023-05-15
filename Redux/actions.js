import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EPISODE_SEASON, GET_EPISODES, GET_EPISODES_CACHE, RANDOM_EPISODE } from './constantes';
const save =  async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    console.log(e)
  }
}

const load = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e)
  }
}

export const getEpisodes = () => {
  return async (dispatch) => {
    try {
      let allEpisodes = [];
      for (let i = 1; i <= 10; i++) {
        const response = await axios.get('https://stapi.co/api/v1/rest/episode/search', {
          params: {
            pageNumber: i, // Número de la página que deseas obtener
            pageSize: 100, // Tamaño de la página (cantidad de episodios por página)
          },
        });

        allEpisodes = allEpisodes.concat(response.data.episodes);
      }

     
      save(allEpisodes)
      let showEpisodes = await load()
     
      dispatch({
        type: GET_EPISODES,
        payload: showEpisodes,
      });
    } catch (error) {
      dispatch({
        type: GET_EPISODES,
        payload: error.message,
      });
    }
  };
};


  export const randomEpisode = (dispatch) => {
    return {

      type: RANDOM_EPISODE,
      payload:dispatch
    }

  }

  export const getEpisodesCache = () => {
    return async (dispatch) => {
      try {
       let showEpisodes = await load()
       
        dispatch({
          type: GET_EPISODES_CACHE,
          payload: showEpisodes,
        });
      } catch (error) {
        dispatch({
          type: GET_EPISODES_CACHE,
          payload: error.message,
        });
      }
    };

  }
  
  export const episodeSeason = (payload) => {
 
    return {

      type: EPISODE_SEASON,
      payload
    }

  }


  
  