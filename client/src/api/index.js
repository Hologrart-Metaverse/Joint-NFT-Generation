import axios from "axios";


const createUserUrl = "http://localhost:8080/user/register";
const loginUserUrl = "http://localhost:8080/user/login";

export const createUser = (newUser) => axios.post(createUserUrl, newUser);
export const loginUser = (user) => axios.post(loginUserUrl, user);