import { FETCH_ORGANIZATION_SUCCESS } from '../actions';

const organization = (state={}, action) => {
  switch(action.type) {
    case FETCH_ORGANIZATION_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default organization;