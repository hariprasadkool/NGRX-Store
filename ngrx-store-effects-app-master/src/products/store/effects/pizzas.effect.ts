import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// Actions is a observable
import * as pizzaActions from '../actions/pizzas.action';

import {of} from 'rxjs/observable/of';
import { map, switchMap, catchError} from 'rxjs/operators';

import * as fromServices from '../../services'; 
@Injectable()
export class PizzasEffects {
  constructor(
    private pizzaService: fromServices.PizzasService, 
    private actions$: Actions
    // actions$ we add $ at the end to denote it is an observables
  ){

  }
  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS)
  .pipe(
    switchMap(()=>{
      return this.pizzaService.getPizzas().pipe(
        map(
          pizzas => new pizzaActions.LoadPizzaSuccess(pizzas),
         // catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        )
      )
    })
  )
}






// OBSERVABLE OPERATORS -
// 1. map
// 2. switchMap
// 3. catchError
// 4. of
// 5.