import * as api from "../api";

export const fetchCanvasPixels = (id) => async (dispatch) => {
    console.log("Action");
    console.log(id);
    try {
        const { data } = await api.fetchCanvas(id);
        dispatch({ type: "FETCH_CANVAS_PIXELS", payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateCanvas = (canvas_id, rowNumber, columnNumber, newColor, whose) => async (dispatch) => {
    try {
        const { data } = await api.changePixel(canvas_id, rowNumber, columnNumber, newColor, whose);
        dispatch({ type: "CHANGEPIXEL", payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const refreshCanvas = (canvas_id) => async (dispatch) => {
    try {
        const { data } = await api.refreshCanvas(canvas_id);
        dispatch({ type: "REFRESH", payload: data });
    } catch (error) {
        console.log(error);
    }
}