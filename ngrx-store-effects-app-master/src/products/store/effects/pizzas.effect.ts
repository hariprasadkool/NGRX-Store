import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
// Actions is a observable
import * as pizzaActions from '../actions/pizzas.action';

import {of} from 'rxjs/observable/of';
import { map, switchMap, catchError} from 'rxjs/operators';

import * as fromRoot from '../../../app/store'
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
         //catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        )
      )
    })
  )

  @Effect()
  createPizza$ = this.actions$
  .ofType(pizzaActions.CREATE_PIZZA)
  .pipe(
    map((action: pizzaActions.CreatePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService
      .createPizza(pizza)
      .pipe(
        map(pizza=> new pizzaActions.CreatePizzaSuccess(pizza)),
        catchError(error=>of(new pizzaActions.CreatePizzaFail(error)))
      )
    })
  ) 

  @Effect()
  createPizzaSuccess$ = this.actions$
  .ofType(pizzaActions.CREATE_PIZZA_SUCCESS)
  .pipe(
    map( (action: pizzaActions.CreatePizzaSuccess) => action.payload ),
    map( pizza => {return new fromRoot.Go({
      path: ['/products',pizza.id],
    })
  })
  )

  @Effect()
  updatePizza$ = this.actions$
  .ofType(pizzaActions.UPDATE_PIZZA)
  .pipe(
    map((action: pizzaActions.UpdatePizza) => action.payload),
    switchMap((pizza)=>{
      return this.pizzaService
      .updatePizza(pizza)
      .pipe(
        map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
        catchError(error=> of(new pizzaActions.UpdatePizzaFail(error)))
      )
    }) 
  ) 

  @Effect()
  removePizza$ = this.actions$
  .ofType(pizzaActions.REMOVE_PIZZA)
  .pipe(
    map((action: pizzaActions.RemovePizza) => action.payload),
    switchMap(pizza => {
      return this.pizzaService
      .removePizza(pizza)
      .pipe(
        map(()=> new pizzaActions.RemovePizzaSuccess(pizza)),
        catchError(error=>of(new pizzaActions.RemovePizzaFail(error)))
      )
    })
  ) 

  @Effect()
  handlePizza$ = this.actions$
  .ofType(
    pizzaActions.UPDATE_PIZZA_SUCCESS,
    pizzaActions.REMOVE_PIZZA_SUCCESS
  )
  .pipe(
    map(pizza=>{
      return new fromRoot.Go({
        path: ['/products'],
      })
    })
  )
  
}






// OBSERVABLE OPERATORS -
// 1. map
// 2. switchMap
// 3. catchError
// 4. of
// 5.