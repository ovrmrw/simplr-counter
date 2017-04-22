import { Injectable } from '@angular/core';
import { Dispatcher } from '@ngrx/store';

import * as counter from '../store/actions/counter-ngrx';


@Injectable()
export class CounterNgrxService {
  constructor(
    private dispatcher$: Dispatcher,
  ) { }

  increment(num: number) {
    this.dispatcher$.dispatch(new counter.ActionIncrement(num));
  }

  reset() {
    this.dispatcher$.dispatch(new counter.ActionReset());
  }
}
