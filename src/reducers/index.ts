import { combineReducers } from 'redux'
import * as fromTodos from './todos'
import * as fromDatas from './data'
import * as form from './form'

/*
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface State {
  todos: fromTodos.State
  datas: fromDatas.State
  // form: form.State
}

/*
 * initialState of the app
 */
export const initialState: State = {
  todos: fromTodos.initialState,
  datas: fromDatas.initialState,
  // form: form.initialState,
}

/*
 * Root reducer of the app
 * Returned reducer will be of type Reducer<State>
 */
export const reducer = combineReducers<State>({
  todos: fromTodos.reducer,
  datas: fromDatas.reducer,
  form: form.reducer,
})