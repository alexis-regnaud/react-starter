import { TEST_ACTION } from '../actions/actionTypes'

type State = {
    +testParam: string
};

const initialState:State = { testParam: "" }

const  commonReducer = (state:State = initialState, action) => {
    let nextState
    switch (action.type) {
        case TEST_ACTION :
            nextState = {
                ...state,
                testParam: action.data
            }
            return nextState || state
        default:
            return state
    }
}

export default commonReducer