import apiConstants from './../constants/api-constants';

export const FETCH_TRACKS_BEGIN    = 'FETCH_TRACKS_BEGIN';
export const FETCH_TRACKS_SUCCESS  = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE  = 'FETCH_TRACKS_FAILURE';

const { baseURL, apiKey } = apiConstants;

export const fetchTopTracksBegin = () => ({
    type: FETCH_TRACKS_BEGIN
});

export const fetchTopTracksSuccess = tracks => ({
    type: FETCH_TRACKS_SUCCESS,
    payload: { tracks }
});

export const fetchTopTracksFailure = error => ({
    type: FETCH_TRACKS_FAILURE,
    payload: { error }
});

export function fetchTopTracks( page, limit ) {
    return dispatch => {
      dispatch(fetchTopTracksBegin());
      return fetch(`${baseURL}?method=chart.gettoptracks&page=${page}&limit=${limit}&api_key=${apiKey}&format=json`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchTopTracksSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchTopTracksFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}