import { Injectable } from '@angular/core';
import { Simplr } from 'ngrx-store-simplr';

import { AppState } from '../store/models';
import { initialState } from '../store/reducer';


@Injectable()
export class CounterService {
  constructor(
    private simplr: Simplr<AppState>,
  ) { }

  increment() {
    this.simplr.dispatch('counter', (state) => ({ value: state.value + 1 }));
  }

  decrement() {
    this.simplr.dispatch('counter', (state) => ({ value: state.value - 1 }));
  }

  reset() {
    this.simplr.dispatch('counter', ({ ...initialState.counter }));
  }
}
