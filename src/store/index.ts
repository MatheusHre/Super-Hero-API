import { compose ,applyMiddleware, createStore, Store } from "redux"
import createSagaMiddleware from "redux-saga"

import createRootReducer from './ducks/rootReducer'
import rootSaga from "./ducks/rootSaga"

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [
    sagaMiddleware
]

const store: Store<any> = createStore(
    createRootReducer(),
    composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store