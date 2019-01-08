import { State } from '../reducers'
import { createSelector } from 'reselect'

/*
 * Get the todos state from the root state
 */
const getDatasState = ((state: State) => state.datas)

/*
 * Getting todos array from todos State
 */
export const getDatas = createSelector([getDatasState], s => s.datas)