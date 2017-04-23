import { Injectable } from '@angular/core';
import { Simplr } from 'ngrx-store-simplr';

import { AppState } from '../store/models';
import { initialState } from '../store/reducer';


@Injectable()
export class CounterService {
  constructor(
    private simplr: Simplr<AppState>,
  ) { }

  increment(num: number) {
    this.simplr.dispatch('counter', (state) => ({ value: state.value + num }));
  }

  reset() {
    this.simplr.dispatch('counter', ({ ...initialState.counter }));
  }
}
