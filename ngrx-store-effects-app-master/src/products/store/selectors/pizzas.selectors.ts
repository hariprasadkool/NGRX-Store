import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromToppings from './toppings.selectors';
import { Pizza } from '../../models/pizza.model';
import { getSelectedPizza } from './pizzas.selectors';
// pizzas state
export const getPizzaState = createSelector( fromFeature.getProductsState , (state: fromFeature.ProductsState) => state.pizzas );

export const getPizzasEntities = createSelector(getPizzaState,fromPizzas.getPizzasEntities);  //getPizzasEntities is an object we want it to be an array

export const getSelectedPizza = createSelector(
    getPizzasEntities,
    fromRoot.getRouterState,
    (entities,router): Pizza => {
        return router.state && entities[router.state.params.pizzaId];
    }
)

export const getPizzaVisualised =createSelector(
  getSelectedPizza,
  fromToppings.getToppingsEntities,
  fromToppings.getSelectedToppings,
  (pizza,toppingEntities,selectedToppings)=>{
    const toppings = selectedToppings.map(id => toppingEntities[id]);
    return { ...pizza, toppings };
  }
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities)=>{
    return Object.keys(entities).map( id => entities[ parseInt(id,10) ] )   //it gives the array of id 1,2,3
  }
)
export const getPizzasLoaded = createSelector(getPizzaState,fromPizzas.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState,fromPizzas.getPizzasLoading);

