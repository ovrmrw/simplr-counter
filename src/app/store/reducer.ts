import { combineReducers } from '@ngrx/store';
import { Wrapper } from 'ngrx-store-simplr';

import { AppState } from './models';
import { counterNgrxReducer } from './reducers/counter-ngrx';

const wrapper = new Wrapper<AppState>();


const wrappedReducers = wrapper.mergeReducersIntoWrappedReducers({
  counter: null, // if you have a reducer for this key, set it here instead of null.
  'counter-ngrx': counterNgrxReducer,
});

const rootReducer = combineReducers(wrappedReducers);

export function reducer(state, action) { // workaround for AoT compile
  return rootReducer(state, action);
}

export const initialState: AppState = {
  counter: 0,
  'counter-ngrx': 0,
};
