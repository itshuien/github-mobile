import { combineReducers } from 'redux';

import organization from './organization';
import repositories from './repositories';

const rootReducer = combineReducers({
  organization,
  repositories
});

export default rootReducer;
