import { Action } from '@ngrx/store';

import {Pizza} from '../../models/pizza.model';

//Load pizzas     //action-constants
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

//action-creators
export class LoadPizza implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzaFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload:any){}
}

export class LoadPizzaSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]){}
}


//action types
export type PizzasAction = LoadPizza | LoadPizzaFail | LoadPizzaSuccess;
