import { ActionReducer } from '@ngrx/store';

import { CounterState } from '../models';
import * as counter from '../actions/counter';


export const counterReducer: ActionReducer<CounterState> =
  (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
