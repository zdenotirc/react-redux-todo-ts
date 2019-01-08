// import { Action } from 'redux';
// import { ActionTypes } from 'redux-form'
import { actionTypes, FormStateMap, reducer as formReducer } from 'redux-form';

// export type Action = ActionTypes;

// Define our State interface for the current reducer
/*
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface State {
  form: FormStateMap['simple']
}

/*
 * initialState of the app
 */
export const initialState: State = {
  form: {
    registeredFields: [],
    values: [],
    active: '',
    anyTouched: false,
    submitting: false,
  }
}

/* 
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */

export const reducer = formReducer.plugin({
  simple: (state, action) => {
    switch (action.type) {
      case actionTypes.CHANGE: {
        const v = {
          ...state,
          values: {
            ...state.values,
            lastName: 'BBB',
            email: 'a@a.com',
          },
          registeredFields: {
            ...state.registeredFields,
            lastName: undefined // <----- clear field state, too (touched, etc.)
          }
        }
        debugger;
        return v;
      }

      default:
        return state
    }
  }
});