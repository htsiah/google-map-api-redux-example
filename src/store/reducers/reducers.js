import { combineReducers } from 'redux';

import mapReducer from './map.reducer';

export default combineReducers({
  map: mapReducer,
});
