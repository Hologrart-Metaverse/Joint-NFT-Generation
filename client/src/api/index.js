import axios from "axios";

const server = axios.create({
    baseURL: "https://joint-nft-api.herokuapp.com",
    withCredentials: true,
});

// const server = "http://localhost:8080";
// const server = "https://joint-nft-api.herokuapp.com";


const createUserUrl = `/user/register`;
const loginUserUrl = `/user/login`;
const loginLocallyUrl = `/user/login-with-localstorage`;


const createCanvasUrl = `/canvas/create`;
const fetchCanvasesUrl = `/canvas/get`;


const fetchCanvasUrl = `/canvas/fetchCanvasPixels`;
const changePixelUrl = `/canvas/changeCanvas`;
const refreshCanvasUrl = `/canvas/refresh`;


export const createUser = (newUser) => server.post(createUserUrl, newUser);
export const loginUser = (user) => server.post(loginUserUrl, user);
export const loginLocally = (user) => server.post(loginLocallyUrl, user);

export const createCanvas = (newCanvas) => server.post(createCanvasUrl, newCanvas);
export const fetchCanvases = () => server.get(fetchCanvasesUrl);

export const fetchCanvas = (canvas_id) => server.post(fetchCanvasUrl, { id: canvas_id });
export const changePixel = (canvas_id, rowNumber, columnNumber, newColor, whose) => {
    return server.patch(changePixelUrl,
        {
            canvas_id: canvas_id,
            rowNumber: rowNumber,
            columnNumber: columnNumber,
            newColor: newColor,
            whose: whose
        }
    );
};

export const refreshCanvas = (canvas_id) => {
    return server.post(refreshCanvasUrl, { id: canvas_id });
};
