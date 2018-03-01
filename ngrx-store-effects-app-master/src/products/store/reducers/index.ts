import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

export interface ProductsState{
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap <ProductsState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

// pizzas state
export const getPizzaState = createSelector( getProductsState , (state: ProductsState) => state.pizzas );

export const getPizzasEntities = createSelector(getPizzaState,fromPizzas.getPizzasEntities);  //getPizzasEntities is an object we want it to be an array
export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities)=>{
    return Object.keys(entities).map( id => entities[ parseInt(id,10) ] )   //it gives the array of id 1,2,3
  }
)
export const getPizzasLoaded = createSelector(getPizzaState,fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState,fromPizzas.getPizzasLoading);





//this is the selectors file for the reducers which will create the selectors and export