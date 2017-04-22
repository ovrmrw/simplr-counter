import { Action } from '@ngrx/store';
import { Resolver } from 'ngrx-store-simplr';

import { AppState } from '../models';

export type Resolver = Resolver<AppState, 'counter'>;


export const INCREMENT = 'counter INCREMENT';
export const RESET = 'counter RESET';

export class ActionIncrement implements Action {
  readonly type = INCREMENT;
  constructor(public payload: number) { }
}

export class ActionReset implements Action {
  readonly type = RESET;
  constructor(public payload?: undefined) { }
}

export type Actions = ActionIncrement | ActionReset;
