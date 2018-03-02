import { PizzasGuard } from './pizzas.guard';
import { ToppingsGuard } from './toppings.guard';
import { PizzaExistsGuard } from './pizza-exists.guard';

export const guards: any[] = [PizzasGuard,ToppingsGuard,PizzaExistsGuard];

export * from './pizzas.guard';
export * from './toppings.guard';
export * from './pizza-exists.guard';