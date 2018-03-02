
import { Injectable } from '@angular/core';
//import { ProductsState } from '../store/reducers/index';
import {CanActivate } from '@angular/router';

import { Store } from '@ngrx/store'
 
import {of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { tap,filter,take,switchMap,catchError } from 'rxjs/operators';

import * as fromStore from '../store';
@Injectable()
export class PizzasGuard implements CanActivate {
    constructor(private store: Store<fromStore.ProductsState>){}
    canActivate(): Observable<boolean>{
        return this.checkStore()
        .pipe(
            switchMap(()=>of(true)),
            catchError(()=>of(false))
        );
    }

    checkStore(): Observable<boolean>{
        return this.store.select(fromStore.getPizzasLoaded)
        .pipe(
            tap(loaded=>{
                    if(!loaded){
                        this.store.dispatch(new fromStore.LoadPizzas());
                    }
                }),
                filter(loaded=>loaded),
                take(1)
        )
    }
}