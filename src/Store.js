import { createStore, combineReducers } from 'redux';
import AppReducer from '@reducers/AppReducer';

const rootReducer = combineReducers({
  app: AppReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;