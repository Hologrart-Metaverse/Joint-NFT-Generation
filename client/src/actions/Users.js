import * as api from "../api";


export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const login = (user) => async (dispatch) => {
    try {
        const { data } = await api.loginUser(user);
        dispatch({ type: "LOGIN", payload: data });
    } catch (error) {
        console.log(error);
    }
}


export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: "LOGOUT", payload: [] });
    } catch (error) {
        console.log(error);
    }
}