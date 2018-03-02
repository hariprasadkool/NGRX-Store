import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
  // data: Pizza[];   refactoring into entities
  entities: {[id:number]: Pizza};
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  // data: [
  //  {
  //   "name": "Seaside Surfin'",
  //   "toppings": [
  //     {
  //       "id": 6,
  //       "name": "mushroom"
  //     },
  //     {
  //       "id": 7,
  //       "name": "olive"
  //     },
  //     {
  //       "id": 2,
  //       "name": "bacon"
  //     },
  //     {
  //       "id": 3,
  //       "name": "basil"
  //     },
  //     {
  //       "id": 1,
  //       "name": "anchovy"
  //     },
  //     {
  //       "id": 8,
  //       "name": "onion"
  //     },
  //     {
  //       "id": 11,
  //       "name": "sweetcorn"
  //     },
  //     {
  //       "id": 9,
  //       "name": "pepper"
  //     },
  //     {
  //       "id": 5,
  //       "name": "mozzarella"
  //     }
  //  ],
  //  "id": 2
  // }
  // ],
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {

  switch(action.type){
    case fromPizzas.LOAD_PIZZAS:{
      return {
        ...state,
        loading: true
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS:{
      console.log(action.payload);
      const pizzas = action.payload;
      const entities = pizzas.reduce((entities: { [id: number]:Pizza }, pizza: Pizza)=>{
        return {
          ...entities,
          [pizza.id]: pizza,
        };
      },{
        ...state.entities
      });
      // [{id: 1},{id: 2}]
      // const pizza: any = {
      //   1: {
      //     id: 1,
      //     name: 'Pizza',
      //     toppings: []
      //   }
      // }
      // const id = 1;
      // pizza[id]
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
        //data
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL:{
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    
    case fromPizzas.UPDATE_PIZZA_SUCCESS:
    case fromPizzas.CREATE_PIZZA_SUCCESS:{
      const pizza = action.payload;
      const entities = {
        ...state.entities,
        [pizza.id]: pizza
      }

      return{
        ...state,
        entities,
      };

    }

  }

  return state;
};

export const getPizzasEntities = ( state: PizzaState) => state.entities;
export const getPizzasLoading = ( state: PizzaState) => state.loading;
export const getPizzasLoaded = ( state: PizzaState) => state.loaded;
//export const getPizzas = ( state: PizzaState) => state.data;

