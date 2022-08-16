import axios from "axios";


const createUserUrl = "http://localhost:8080/user/register";
const loginUserUrl = "http://localhost:8080/user/login";

const createCanvasUrl = "http://localhost:8080/canvas/create";
const fetchCanvasesUrl = "http://localhost:8080/canvas/get";

const fetchCanvasUrl = "http://localhost:8080/canvas/fetchCanvasPixels";
const changePixelUrl = "http://localhost:8080/canvas/changeCanvas";


export const createUser = (newUser) => axios.post(createUserUrl, newUser);
export const loginUser = (user) => axios.post(loginUserUrl, user);


export const createCanvas = (newCanvas) => axios.post(createCanvasUrl, newCanvas);
export const fetchCanvases = () => axios.get(fetchCanvasesUrl);


export const fetchCanvas = (canvas_id) => axios.post(fetchCanvasUrl, {id: canvas_id});
export const changePixel = 
    (canvas_id, rowNumber, columnNumber, newColor, whose) => 
        axios.patch(changePixelUrl, 
            {canvas_id: canvas_id, rowNumber: rowNumber, columnNumber: columnNumber, newColor: newColor, whose: whose}
        );