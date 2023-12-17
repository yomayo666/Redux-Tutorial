import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer as favoritReducer } from './favorits/favorit.slice';
import createLogger from 'redux-logger';
import { userSlice } from './users/users.slice';
import { api } from './api/api';

const reducers = combineReducers({
  favorit: favoritReducer,
  user: userSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({ 
  reducer: reducers,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;