import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap,createFeatureSelector } from '@ngrx/store';
//import { createFeatureSelector } from '@ngrx/store/src/selector';
export interface RouterStateUrl{
    url: string;
    queryParams: Params;
    params: Params;
}
export interface State{
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State> = {
    routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
    fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');