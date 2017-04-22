export interface AppState {
  counter: CounterState;
  'counter-ngrx': CounterState;
}

export interface CounterState {
  value: number;
}
