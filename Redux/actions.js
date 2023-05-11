import axios from 'axios';
import { GET_EPISODES, RANDOM_EPISODE } from './constantes';

export const getEpisodes = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://stapi.co/api/v1/rest/episode/search', {
        params: {
          pageNumber: 1, // Número de la página que deseas obtener
          pageSize: 100, // Tamaño de la página (cantidad de episodios por página)
        },
      });
      const episodes = response.data; // Asumiendo que los episodios se encuentran en la propiedad "episodes" de la respuesta
      dispatch({
        type: GET_EPISODES,
        payload: episodes,
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
  