import apiConstants from './../constants/apiConstants';
import {
    FETCH_ARTIST_INFO_BEGIN,
    FETCH_ARTIST_INFO_SUCCESS,
    FETCH_ARTIST_INFO_FAILURE
} from './../constants/actionsTypes';

const { baseURL, apiKey } = apiConstants;

export const fetchArtistInfoBegin = () => ({
    type: FETCH_ARTIST_INFO_BEGIN
});

export const fetchArtistInfoSuccess = artist => ({
    type: FETCH_ARTIST_INFO_SUCCESS,
    payload: { artist }
});

export const fetchArtistInfoFailure = error => ({
    type: FETCH_ARTIST_INFO_FAILURE,
    payload: { error }
});

export function fetchArtistInfo( artistName ) {
    return dispatch => {
      dispatch(fetchArtistInfoBegin());
      return fetch(`${baseURL}?method=artist.getInfo&artist=${artistName}&api_key=${apiKey}&format=json`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchArtistInfoSuccess(json.artist));
                return json.artist;
            })
            .catch(error => dispatch(fetchArtistInfoFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}