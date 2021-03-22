import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import configReducer from "./config-reducer";
import dataReducer from "./data-reducer";
import gameStateRecuder from "./gameState-reducer";

let reducers = combineReducers({
  config: configReducer,
  data: dataReducer,
  game: gameStateRecuder,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;