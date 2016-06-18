import { combineReducers } from "redux"
import * as model from "../models"

const increment = (state:model.Counter = { count: 0 }, action:{ type:string }): model.Counter => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        default:
            return state;
    }
}

export default combineReducers({ increment })
