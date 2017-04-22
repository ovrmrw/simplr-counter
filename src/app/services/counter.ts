import { Injectable } from '@angular/core';
import { Dispatcher } from '@ngrx/store';
import { Simplr } from 'ngrx-store-simplr';
import { AppState } from '../store/models';
import * as counter from '../store/actions/counter';


@Injectable()
export class CounterService {
  constructor(
    private simplr: Simplr<AppState>,
    private dispatcher$: Dispatcher,
  ) { }

  async increment(num: number) {
    const result = await this.simplr
      .dispatch('counter', (state) => ({ value: state.value + num }))
      .toPromise();
    return result.action;
  }

  reset() {
    this.dispatcher$.dispatch(new counter.ActionReset());
  }
}
