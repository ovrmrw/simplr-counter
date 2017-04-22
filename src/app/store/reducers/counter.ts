import { ActionReducer } from '@ngrx/store';

import { CounterState } from '../models';
import * as counter from '../actions/counter';
import { initialState } from '../reducer';


export const counterReducer: ActionReducer<CounterState> =
  (state, action: counter.Actions) => {
    switch (action.type) {
      case counter.RESET:
        return {
          ...state,
          ...initialState.counter,
        };

      default:
        return state;
    }
  };
