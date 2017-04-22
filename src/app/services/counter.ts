import { Injectable } from '@angular/core';
import { Dispatcher } from '@ngrx/store';
import { Simplr } from 'ngrx-store-simplr';

import { AppState } from '../store/models';
import * as counter from '../store/actions/counter';
import { initialState } from '../store/reducer';


@Injectable()
export class CounterService {
  constructor(
    private simplr: Simplr<AppState>,
    private dispatcher$: Dispatcher,
  ) { }

  increment(num: number) {
    this.simplr.dispatch('counter', (state) => ({ value: state.value + num }));
  }

  reset() {
    this.simplr.dispatch('counter', () => ({ ...initialState.counter }));
  }

  resetByNgrxStyle() {
    this.dispatcher$.dispatch(new counter.ActionReset());
  }
}
