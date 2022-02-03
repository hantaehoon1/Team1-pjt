import {createStore, combineReducers, applyMiddleware,compose} from 'redux'
import word from "./modules/word"
import desc from "./modules/desc"
import example from "./modules/example"
import thunk from 'redux-thunk'
const middlewares =[thunk]
const rootReducer = combineReducers({word, desc, example})
const enhancer = applyMiddleware(...middlewares)
const store = createStore(rootReducer,enhancer)
export default store