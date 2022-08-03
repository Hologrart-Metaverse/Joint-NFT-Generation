import { combineReducers } from "redux";

import user from "./Users";
import canvases from "./Canvases";

export default combineReducers({
    user,
    canvases, // user: user
});