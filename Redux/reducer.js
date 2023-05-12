import { GET_EPISODES, GET_EPISODES_CACHE, RANDOM_EPISODE } from "./constantes";

const initialState = {
    episodes: [],
    randomEpisode: {},
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_EPISODES:
        return {
          ...state,
          episodes: action.payload,
        };
  
      case RANDOM_EPISODE:
        return {
          ...state,
          randomEpisode: action.payload,
        };
    case GET_EPISODES_CACHE:
        return{
            ...state,
            episodes: action.payload
        }
  
      default:
        return state;
    }
  };
  
  export default rootReducer;
  