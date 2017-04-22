import { ActionReducer } from '@ngrx/store';

import { CounterState } from '../models';
import * as counter from '../actions/counter-ngrx';
import { initialState } from '../reducer';


export const counterNgrxReducer: ActionReducer<CounterState> =
  (state, action: counter.Actions) => {
    switch (action.type) {
      case counter.INCREMENT:
        return {
          ...state,
          value: state.value + action.payload,
        };

      case counter.RESET:
        return {
          ...initialState.counter,
        };

      default:
        return state;
    }
  };
