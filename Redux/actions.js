import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EPISODE_SEASON, GET_EPISODES, GET_EPISODES_CACHE, RANDOM_EPISODE, SET_LOADING } from './constantes';

import {API_KEY} from "@env"

const save =  async (value) => {
 
  try {
    const jsonValueAllEpisodes = JSON.stringify(value[0])
    const jsonValueAllSeries =JSON.stringify(value[1])
    await AsyncStorage.multiSet([['list', jsonValueAllEpisodes], ['series', jsonValueAllSeries]])
  } catch (e) {
    console.log(e)
  }
}


const loadList = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('list')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e)
  }
}

const loadSeries = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('series')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    console.log(e)
  }
}

export const getEpisodes = () => {

  return async (dispatch) => {
    try {
      let allEpisodes = [];
      let omdbapiEpisodesId = ['tt8806524', 'tt0069637', 'tt0060028', 'tt0092455', 'tt0106145', 'tt0112178','tt0244365','tt5171438', 'tt12327578','tt9184820', 'tt9795876'] ;
      let omdbapiEpisode = []
      for (let i = 1; i <= 10; i++) {
        const response = await axios.get('https://stapi.co/api/v1/rest/episode/search', {
          params: {
            pageNumber: i, // Número de la página que deseas obtener
            pageSize: 100, // Tamaño de la página (cantidad de episodios por página)
          },
        });
    

        allEpisodes = allEpisodes.concat(response.data.episodes);
      }
      for(let i = 0; i < omdbapiEpisodesId.length; i++){
        const response = await axios.get(`https://www.omdbapi.com/?i=${omdbapiEpisodesId[i]}&apikey=${API_KEY}`)
        console.log(response.data)
        omdbapiEpisode = omdbapiEpisode.concat(response.data)
       } 
     console.log(omdbapiEpisode)
      save([allEpisodes, omdbapiEpisode])
      
      
      let showEpisodes = await loadList()
      let showSeries = await loadSeries() 
     
      dispatch({
        type: GET_EPISODES,
        payload: [showEpisodes, showSeries],
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
        let showEpisodes = await loadList();
        let seriesInfo = await loadSeries();
  
        if (showEpisodes !== null && showEpisodes.length > 0) {
          dispatch(setLoading(false)); // Detiene el loading si la lista no está vacía
        }
  
        dispatch({
          type: GET_EPISODES_CACHE,
          payload: showEpisodes,
          series: seriesInfo,
        });
      } catch (error) {
        dispatch({
          type: GET_EPISODES_CACHE,
          payload: error.message,
        });
      }
    };
  };
  
  
  export const episodeSeason = (payload) => {
 
    return {

      type: EPISODE_SEASON,
      payload
    }

  }

  export const setLoading = (payload) => {

    return {
      type: SET_LOADING,
      payload
    }
  }


  
  