import { combineReducers } from "redux";

import user from "./Users";
import canvases from "./Canvases";
import canvas_pixels from "./Canvas";

export default combineReducers({
    user,
    canvases, // user: user
    canvas_pixels,
});