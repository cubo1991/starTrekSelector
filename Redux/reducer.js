import { GET_EPISODES, RANDOM_EPISODE } from "./constantes";

const initialState = {
  episodes: {},
  randomEpisode: {}
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_EPISODES:
            return {
                ...state,
                episodes: action.payload
            }    
            
            case RANDOM_EPISODE:
                return{
                    ...state,
                   randomEpisode: action.payload
                }
            
    
        default:
            return state;
            
    }
  
};

export default rootReducer;
