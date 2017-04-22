import { Component, OnInit } from '@angular/core';
import { State } from '@ngrx/store';

import { AppState } from '../store/models';
import { CounterNgrxService } from '../services/counter-ngrx';


@Component({
  selector: 'app-counter-ngrx-container',
  template: `
    <button (click)="increment()">increment</button>
    <button (click)="decrement()">decrement</button>
    <button (click)="reset()">reset</button>
    <pre>{{ state$ | async | json }}</pre>
  `
})
export class CounterNgrxContainerComponent {
  constructor(
    public state$: State<AppState>,
    private service: CounterNgrxService,
  ) { }

  increment() {
    this.service.increment(1);
  }

  decrement() {
    this.service.increment(-1);
  }

  reset() {
    this.service.reset();
  }
}
