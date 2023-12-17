// redux_component/standaloneStore.ts
import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';

const standaloneRootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers if needed
});