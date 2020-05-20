import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'

// support the redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// use redux-thunk
const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk)
)

// create global redux store
const store = createStore(reducer, enhancer)

export default store