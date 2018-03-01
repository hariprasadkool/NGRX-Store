import { Action } from '@ngrx/store';

import { Topping } from '../../models/topping.model';
//import { LOAD_TOPPINGS, LoadToppingsFail } from './toppings.action';

// by using the alias or name space we can avoid confusion with the other same named variables from other modules
// to keep it consistenly we write the module as an alias.

export const LOAD_TOPPINGS = '[Products] Load Toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings Fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings Success';
export const VISUALISE_TOPPINGS = '[Products] Visualise Toppings'
export class LoadToppings implements Action {
    readonly type = LOAD_TOPPINGS;
}


//action creators
export class LoadToppingsFail implements Action {
    readonly type = LOAD_TOPPINGS_FAIL;
    constructor(public payload: any){

    }
}

export class LoadToppingsSuccess implements Action {
    readonly type = LOAD_TOPPINGS_SUCCESS;
    constructor(public payload: Topping[]){

    }
}

export class VisualiseToppings implements Action {
    readonly type = VISUALISE_TOPPINGS;
    constructor(public payload: number[]){}
}

//action types

export type ToppingsAction = LoadToppings | LoadToppingsFail | LoadToppingsSuccess | VisualiseToppings;