import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import reducers from './reducers';

const rootReducer = combineReducers (reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk));

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;







// import { configureStore, createSlice } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk'

// const initialState = {};

// const rootReducer = createSlice({
//   name: 'root',
//   initialState,
//   reducers: {},
// });

// export const store = configureStore({
//     reducer: rootReducer.reducer,
//     middleware: [thunk],
//   });

//   export type RootState = ReturnType<typeof store.getState>;
//   export type AppDispatch = typeof store.dispatch;