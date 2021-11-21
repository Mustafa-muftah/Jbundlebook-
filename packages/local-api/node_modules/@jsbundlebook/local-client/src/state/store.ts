import { createStore ,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Reducers } from "./reducers";
import { persistMiddlware } from './middlewares/presistMiddleware';




export const Store  = createStore(Reducers , {} , composeWithDevTools( applyMiddleware( persistMiddlware , thunk)));








