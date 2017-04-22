import { Action } from '@ngrx/store';
import { Resolver } from 'ngrx-store-simplr';

import { AppState } from '../models';

export type Resolver = Resolver<AppState, 'counter'>;
