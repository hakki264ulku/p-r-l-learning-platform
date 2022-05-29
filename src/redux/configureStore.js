import { combineReducers, createStore } from "redux";

import MenuReducer from './ducks/menu'


const reducer = combineReducers({
    menu: MenuReducer
})


const store = createStore(reducer)
export default store