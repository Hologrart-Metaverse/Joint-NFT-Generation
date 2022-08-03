import * as api from "../api";


export const createCanvas = (newCanvas) => async (dispatch) => {
    try {
        const { data } = await api.createCanvas(newCanvas);
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const getCanvases = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCanvases();
        dispatch({ type: "FETCH_CANVASES", payload: data });
    } catch (error) {
        console.log(error);
    }
}



export const editCanvas = (user) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(user);
        dispatch({ type: "LOGIN", payload: data });
    } catch (error) {
        console.log(error);
    }
}
