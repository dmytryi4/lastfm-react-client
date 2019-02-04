import { combineReducers } from 'redux';
import { topTrackReducer } from './topTrackReducers';
import { singleArtistReducer } from './singleArtistReducers';


export const rootReducers = combineReducers({
    topTrackReducer,
    singleArtistReducer
})
