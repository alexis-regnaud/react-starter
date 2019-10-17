//@flow
import { TEST_ACTION } from './actionTypes'

/*
 * action creators
 */

export const testAction = (data:string) => ({
    type: TEST_ACTION,
    data
})
