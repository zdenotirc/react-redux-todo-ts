import Data from '../models/Data'

/*
 * In order to automatically generate id for our todos
 */  
let nextId = 0

/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better 
 */
export enum ActionTypes {
  FETCH_DATA = 'FETCH_DATA',
}

/*
 * Define return types of our actions 
 * Every action returns a type and a payload
 */
export interface FetchDataAction { type: ActionTypes.FETCH_DATA, payload: { data: Data } }

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function fetchData(): FetchDataAction {

  return {
    type: ActionTypes.FETCH_DATA,
    payload: {
      data: {
        id: nextId++,
        name: name,
      }
    }
  }
}

/*
 * Define the Action type
 * It can be one of the types defining in our action/todos file
 * It will be useful to tell typescript about our types in our reducer
 */
export type Action = FetchDataAction