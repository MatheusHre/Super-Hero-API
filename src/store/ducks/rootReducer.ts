import { combineReducers } from "redux"
import hero from "./hero"


const createRootReducer = () => combineReducers({
    hero
})

export default createRootReducer