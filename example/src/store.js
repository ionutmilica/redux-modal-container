import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { modalReducer } from 'redux-modal-container';

// Extensions
const devToolsExtension = window.devToolsExtension;
let devToolsMiddleware = () => {};
if (typeof devToolsExtension === 'function') {
  devToolsMiddleware = devToolsExtension;
}

const rootReducer = combineReducers({
  modals: modalReducer,
});

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(logger),
    devToolsMiddleware(),
  )
);

export default store;
