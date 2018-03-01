import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map,catchError,switchMap } from 'rxjs/operators';


import * as toppingsAction from '../actions/toppings.action';
import * as fromServices from '../../services/toppings.service';


export class ToppingsEffects{
    constructor(
        private actions$: Actions,
        private toppingsService: fromServices.ToppingsService
    ){}

    @Effect()
    loadToppings$ = this.actions$.ofType(toppingsAction.LOAD_TOPPINGS)
    .pipe(
        switchMap(()=>{
            return this.toppingsService.getToppings().pipe(
                map(
                    toppings => new toppingsAction.LoadToppingsSuccess(toppings),
                //catchError(error => of(new toppingsAction.LoadToppingsFail(error)))
                )
            )
        })
    )
}