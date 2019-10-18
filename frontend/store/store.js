import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';

const middlewares = [thunkMiddleware];

// conditionally add logger if in development environment
if (process.env.NODE_ENV !== "production") {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;