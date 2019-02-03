import {
    FETCH_TRACKS_BEGIN,
    FETCH_TRACKS_SUCCESS,
    FETCH_TRACKS_FAILURE
} from './../actions/topTrackActions';

const initialState = {
    loading: true,
    error: null,
    tracks: {
        track: [],
        '@attr': {

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
            tracks: Object.assign({}, action.payload.tracks.tracks)
          };
    
        case FETCH_TRACKS_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            tracksList: []
          };
    
        default:
          return state;
    }
}