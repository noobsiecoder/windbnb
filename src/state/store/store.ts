import { createStore, combineReducers, compose } from "redux";

// Redux reducers
import { guestCountReducer } from "../reducers/guestReducer";
import { locationReducer } from "../reducers/locationReducer";
import { filterStayReducer } from "../reducers/filterStayReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  guestCount: guestCountReducer,
  location: locationReducer,
  stay: filterStayReducer,
});

export const store = createStore(rootReducers, composeEnhancers());
