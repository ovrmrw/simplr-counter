import { Injectable } from '@angular/core';
import { Dispatcher } from '@ngrx/store';

import * as counter from '../store/actions/counter-ngrx';


@Injectable()
export class CounterNgrxService {
  constructor(
    private dispatcher$: Dispatcher,
  ) { }

  increment() {
    this.dispatcher$.dispatch(new counter.ActionIncrement(1));
  }

  decrement() {
    this.dispatcher$.dispatch(new counter.ActionIncrement(-1));
  }

  reset() {
    this.dispatcher$.dispatch(new counter.ActionReset());
  }
}
