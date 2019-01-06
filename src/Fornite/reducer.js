import {
  FETCH_USER_STATS_START,
  FETCH_USER_STATS_SUCCESS,
  FETCH_USER_STATS_FAIL
} from './actions';

export default (
  state = { stats: null, isLoading: false, error: null },
  action
) => {
  switch (action.type) {
    case FETCH_USER_STATS_START:
      return { ...state, isLoading: true };
    case FETCH_USER_STATS_SUCCESS:
      return { ...state, stats: action.payload, isLoading: false, error: null };
    case FETCH_USER_STATS_FAIL:
      return { ...state, isLoading: false, stats: null, error: action.payload };
    default:
      return state;
  }
};
