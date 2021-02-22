import { FETCH_REPOSITORIES_SUCCESS } from '../actions';

const repositories = (state=[], action) => {
  switch(action.type) {
    case FETCH_REPOSITORIES_SUCCESS:
      return action.payload
    default:
      return state;
  }
}

export default repositories;