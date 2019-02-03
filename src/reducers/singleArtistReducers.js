import {
    FETCH_ARTIST_INFO_BEGIN,
    FETCH_ARTIST_INFO_SUCCESS,
    FETCH_ARTIST_INFO_FAILURE
} from './../actions/singleArtistActions';

const initialState = {
    loading: true,
    error: null,
    artist: {
        name: '',
        url: '',
        bio: [],
        tags: {
            tag: []
        },
        similar: {
            artist: []
        },
        images: []
    }
};

export const singleArtistReducer = (state = initialState, action ) => {
    
    switch(action.type) {
        case FETCH_ARTIST_INFO_BEGIN:
          return {
            ...state,
            loading: true,
            error: null
          };
    
        case FETCH_ARTIST_INFO_SUCCESS:
          return {
            ...state,
            loading: false,
            artist: Object.assign({}, action.payload.artist)
          };
    
        case FETCH_ARTIST_INFO_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            artist: []
          };
    
        default:
          return state;
    }
}