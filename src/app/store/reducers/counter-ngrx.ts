import { ActionReducer } from '@ngrx/store';

import * as counter from '../actions/counter-ngrx';
import { initialState } from '../reducer';


export const counterNgrxReducer: ActionReducer<number> =
  (state, action: counter.Actions) => {
    switch (action.type) {
      case counter.INCREMENT:
        return state + action.payload;

      case counter.RESET:
        return initialState.counter;

      default:
        return state;
    }
  };
