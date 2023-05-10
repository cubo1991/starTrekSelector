import axios from 'axios';
import { GET_EPISODES } from './constantes';

export const getEpisodes = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('https://stapi.co/api/v1/rest/episode/search');
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
  