import axios from "axios";

// const server = "http://localhost:5000";
const server = "https://joint-nft-api.herokuapp.com"


// const createUserUrl = "http://localhost:8080/user/register";
// const loginUserUrl = "http://localhost:8080/user/login";
// const loginLocallyUrl = "http://localhost:8080/user/login-with-localstorage";
const createUserUrl = `${server}/user/register`;
const loginUserUrl = `${server}/user/login`;
const loginLocallyUrl = `${server}/user/login-with-localstorage`;

// const createCanvasUrl = "http://localhost:8080/canvas/create";
// const fetchCanvasesUrl = "http://localhost:8080/canvas/get";
const createCanvasUrl = `${server}/canvas/create`;
const fetchCanvasesUrl = `${server}/canvas/get`;

// const fetchCanvasUrl = "http://localhost:8080/canvas/fetchCanvasPixels";
// const changePixelUrl = "http://localhost:8080/canvas/changeCanvas";
// const refreshCanvasUrl = "http://localhost:8080/canvas/refresh";
const fetchCanvasUrl = `${server}/canvas/fetchCanvasPixels`;
const changePixelUrl = `${server}/canvas/changeCanvas`;
const refreshCanvasUrl = `${server}/canvas/refresh`;


export const createUser = (newUser) => axios.post(createUserUrl, newUser);
export const loginUser = (user) => axios.post(loginUserUrl, user);
export const loginLocally = (user) => axios.post(loginLocallyUrl, user);


export const createCanvas = (newCanvas) => axios.post(createCanvasUrl, newCanvas);
export const fetchCanvases = () => axios.get(fetchCanvasesUrl);


export const fetchCanvas = (canvas_id) => axios.post(fetchCanvasUrl, {id: canvas_id});
export const changePixel = 
    (canvas_id, rowNumber, columnNumber, newColor, whose) => 
        axios.patch(changePixelUrl, 
            {canvas_id: canvas_id, rowNumber: rowNumber, columnNumber: columnNumber, newColor: newColor, whose: whose}
        );
export const refreshCanvas = (canvas_id) => axios.post(refreshCanvasUrl, {id: canvas_id});