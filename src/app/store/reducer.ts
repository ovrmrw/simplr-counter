import { combineReducers } from '@ngrx/store';
import { Wrapper } from 'ngrx-store-simplr';

import { AppState } from './models';
import { counterNgrxReducer } from './reducers/counter-ngrx';

const wrapper = new Wrapper<AppState>();


const finalReducer = combineReducers({
  counter: wrapper.createWrappedReducer('counter'),
  'counter-ngrx': counterNgrxReducer,
});

export function reducer(state, action) {
  return finalReducer(state, action);
}

export const initialState: AppState = {
  counter: {
    value: 0,
  },
  'counter-ngrx': {
    value: 0,
  },
};
