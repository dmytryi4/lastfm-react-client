import {
  FETCH_TRACKS_BEGIN,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE
} from './../constants/actionsTypes';

const initialState = {
    loading: true,
    error: null,
    tracks: {
        track: [],
        '@attr': {
            'page': 1,
            'perPage': 12,
        }
    }
};


export const topTrackReducer = (state = initialState, action ) => {
    
    switch(action.type) {
        case FETCH_TRACKS_BEGIN:
          return {
            ...state,
            loading: true,
            error: null
          };
    
        case FETCH_TRACKS_SUCCESS:
          return {
            ...state,
            loading: false,
            tracks: action.payload.tracks.tracks
          };
   
        case FETCH_TRACKS_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            tracks: []
          };
    
        default:
          return state;
    }
}