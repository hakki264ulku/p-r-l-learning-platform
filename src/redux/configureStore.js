import { combineReducers, createStore } from "redux";

import MenuReducer from './ducks/menu'
import UserReducer from "./ducks/user";


const reducer = combineReducers({
    menu: MenuReducer,
    user: UserReducer
})


const store = createStore(reducer)
export default store