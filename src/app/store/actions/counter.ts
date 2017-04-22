import { Action } from '@ngrx/store';
import { Resolver } from 'ngrx-store-simplr';

import { AppState } from '../models';

export type Resolver = Resolver<AppState, 'counter'>;


export const RESET = 'counter RESET';

export class ActionReset implements Action {
  readonly type = RESET;
  constructor(public payload?: undefined) { }
}

export type Actions = ActionReset;
