import { combineReducers } from '@ngrx/store';
import { Wrapper } from 'ngrx-store-simplr';

import { AppState } from './models';
import { counterNgrxReducer } from './reducers/counter-ngrx';

const wrapper = new Wrapper<AppState>();


// const finalReducer = combineReducers({
//   counter: wrapper.createWrappedReducer('counter'),
//   'counter-ngrx': counterNgrxReducer,
// });

// export function reducer(state, action) {
//   return finalReducer(state, action);
// }

const wrappedReducers = wrapper.mergeReducersIntoWrappedReducers({
  counter: null, // if you have the reducer for counter key, set here instead of null.
  'counter-ngrx': counterNgrxReducer,
});

const rootReducer = combineReducers(wrappedReducers);

export function reducer(state, action) { // workaround for AoT build
  return rootReducer(state, action);
}

export const initialState: AppState = {
  counter: {
    value: 0,
  },
  'counter-ngrx': {
    value: 0,
  },
};
