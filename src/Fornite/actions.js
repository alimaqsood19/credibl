import axios from 'axios';

export const FETCH_USER_STATS_START = 'FETCH_USER_STATS_START';
export const FETCH_USER_STATS_SUCCESS = 'FETCH_USER_STATS_SUCCESS';
export const FETCH_USER_STATS_FAIL = 'FETCH_USER_STATS_FAIL';

export const fetchUserStatsStart = () => ({
  type: FETCH_USER_STATS_START
});

export const fetchUserStatsSuccess = user => ({
  type: FETCH_USER_STATS_SUCCESS,
  payload: user
});

export const fetchUserStatsFail = error => ({
  type: FETCH_USER_STATS_FAIL,
  payload: error
});

const endpoint =
  'https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=4735ce9132924caf8a5b17789b40f79c&platform=pc';

export const fetchUser = () => dispatch => {
  dispatch(fetchUserStatsStart());

  return axios
    .get(endpoint)
    .then(res => dispatch(fetchUserStatsSuccess(res)))
    .catch(res => dispatch(fetchUserStatsFail(res)));
};
