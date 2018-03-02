import { PizzasGuard } from './pizzas.guard';

import { PizzaExistsGuard } from './pizza-exists.guard';
export const guards: any[] = [PizzasGuard];

export * from './pizzas.guard';
export * from './pizza-exists.guard';