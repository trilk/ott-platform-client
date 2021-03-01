import { combineReducers } from "redux";

// child reducers
import pathsReducer from "./reducers/paths";
import sidebarReducer from "./reducers/sidebar";
import drawerReducer from "./reducers/drawer";

export const allReducers = combineReducers({
  pathsReducer,
  sidebarReducer,
  drawerReducer,
});
