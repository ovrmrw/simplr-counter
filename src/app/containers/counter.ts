import { Component, OnInit } from '@angular/core';
import { State } from '@ngrx/store';

import { AppState } from '../store/models';
import { CounterService } from '../services/counter';


@Component({
  selector: 'app-counter-container',
  template: `
    <button (click)="increment()">increment</button>
    <button (click)="decrement()">decrement</button>
    <button (click)="reset()">reset</button>
    <pre>{{ state$ | async | json }}</pre>
  `
})
export class CounterContainerComponent {
  constructor(
    public state$: State<AppState>,
    private service: CounterService,
  ) { }

  increment() {
    this.service.increment();
  }

  decrement() {
    this.service.decrement();
  }

  reset() {
    this.service.reset();
  }
}
