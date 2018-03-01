import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

export interface ProductsState{
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap <ProductsState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');




//this is the selectors file for the reducers which will create the selectors and export