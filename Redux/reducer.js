 

import { EPISODE_SEASON, GET_EPISODES, GET_EPISODES_CACHE, RANDOM_EPISODE, SET_LOADING } from "./constantes";

const initialState = {
    episodes: [],
    randomEpisode: {},
    filteredEpisodes: [],
    season: 'all',
    series: [],
    isLoading: true
    
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_EPISODES:
        return {
          ...state,
          episodes: action.payload[0],
          series:action.payload[1],
          isLoading: false
        };
  
      case RANDOM_EPISODE:

        return {
          ...state,
          randomEpisode: action.payload,
        };
    case GET_EPISODES_CACHE:
     
        return{
            ...state,
            episodes: action.payload,
            series: action.series,
            isLoading: false
        }
    case EPISODE_SEASON:
          let id = action.payload
          let toFilter = state.episodes  
          let seasonEpisodes;
      
   
          if(id !== 'all') {
            
          seasonEpisodes = toFilter.filter(episode => episode.series.uid === id )} else{
            seasonEpisodes = state.episodes
          }
          console.log(seasonEpisodes);
             
          return {
            ...state,
            season: action.payload,
            filteredEpisodes: seasonEpisodes
          };
          case SET_LOADING:
            return{
              ...state,
              isLoading: action.payload
            }
  
      default:
        return state;
    }
  };


  
  export default rootReducer;
  