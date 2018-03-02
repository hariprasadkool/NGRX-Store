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

// create pizzas
export const CREATE_PIZZA = '[Products] Create Pizza';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizza Fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success';

export class CreatePizza implements Action{
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza){}
}

export class CreatePizzaFail implements Action{
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: any){}
}

export class CreatePizzaSuccess implements Action{
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza){}
}

// action types
export type PizzasAction = LoadPizza | LoadPizzaFail | LoadPizzaSuccess | CreatePizza | CreatePizzaFail | CreatePizzaSuccess;
