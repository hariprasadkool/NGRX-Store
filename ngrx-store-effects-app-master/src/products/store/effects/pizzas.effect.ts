import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import * as pizzaActions from '../actions/pizzas.action';
@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions
  ){

  }
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS);
}
