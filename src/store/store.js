import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers/reducers';
import middlewares from './middlewares/middiewares';
import { persistedState, saveState } from './persisted.store.js';

const configureStore = () => {
  const store = createStore(
    reducers,
    persistedState, // second argument overrides the initial state
    applyMiddleware(...middlewares)
  );

  // add a listener that will be invoked on any state change
  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

export default configureStore;
