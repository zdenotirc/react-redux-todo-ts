import Data from '../models/Data'
import { ActionTypes, Action } from '../actions/datas'
// import { actionTypes } from 'redux-form'

// Define our State interface for the current reducer
export interface State {
  datas: Data[]
}

// Define our initialState
export const initialState: State = {
  datas: [] // We don't have any todos at the start of the app
}

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {

    case ActionTypes.FETCH_DATA: {
      /*
       * We have autocompletion here
       * Typescript knows the action is type of AddTodoAction thanks to the ActionTypes enum
       * todo is type of Todo
       */
      const data: Data[] = [{ id: 0, name: 'AAA' }, { id: 1, name: 'BBB' }]

      const d = {
        ...state,
        datas: [...state.datas, ...data] // Add todo to todos array
      }

      return d;
    }

    /*
    case actionTypes.CHANGE: {
      debugger;
      return state
    }*/

    default:
      return state
  }
}