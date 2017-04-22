import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Simplr, Adapter, AdapterForNgrxStore } from 'ngrx-store-simplr';

import { AppComponent } from './app.component';
import { CounterContainerComponent } from './containers/counter';
import { CounterService } from './services/counter';
import { reducer, initialState } from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer, initialState),
    StoreDevtoolsModule.instrumentStore(),
  ],
  providers: [
    Simplr,
    { provide: Adapter, useClass: AdapterForNgrxStore },
    CounterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
