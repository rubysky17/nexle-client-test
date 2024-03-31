import { applyMiddleware, createStore, compose } from 'redux'
import { thunk } from 'redux-thunk'
import { rootReducer } from '../reducer/rootReducer'

const resignApplyMiddleware: any = applyMiddleware;
const middlewareEnhancer = resignApplyMiddleware(thunk)
const composedEnhancers = compose(middlewareEnhancer)

export const store = createStore(rootReducer, undefined, composedEnhancers)