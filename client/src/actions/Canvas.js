import * as api from "../api";

export const fetchCanvasPixels = (id) => async (dispatch) => {
    console.log("Action");
    console.log(id);
    try {
        const { data } = await api.fetchCanvas(id);
        console.log(data);
        dispatch({ type: "FETCH_CANVAS_PIXELS", payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateCanvas = (user) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(user);
        dispatch({ type: "LOGIN", payload: data });
    } catch (error) {
        console.log(error);
    }
}