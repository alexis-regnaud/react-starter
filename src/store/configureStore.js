import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import commonReducer from './reducers/common'

export default () => {
    /* eslint-disable no-underscore-dangle */
    let store = createStore(combineReducers({commonReducer}),  {}, composeWithDevTools(
        applyMiddleware(),
    ))
    /* eslint-enable */
    return { store }
}