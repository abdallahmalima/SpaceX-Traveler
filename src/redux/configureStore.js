import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rockets from './rockets/rocketsSlice';
import missionsSlice from './missions/missionsSlice';

const rootReducer = combineReducers({ rockets, missions: missionsSlice.reducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
