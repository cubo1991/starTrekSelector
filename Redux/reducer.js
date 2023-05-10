import { GET_EPISODES } from "./constantes";

const initialState = {
  episodes: {}
};

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_EPISODES:
            return {
                ...state,
                episodes: action.payload
            }            
            
    
        default:
            return state;
            
    }
  
};

export default rootReducer;
