import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rockets from './rockets/rocketsSlice';

const rootReducer = combineReducers({ rockets });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
