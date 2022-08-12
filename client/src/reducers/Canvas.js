export default (canvas_pixels=[], action) => {
    switch (action.type) {
        case "FETCH_CANVAS_PIXELS":
            return action.payload;
            break;
        case "CHANGEPIXEL":
            return [ ...canvas_pixels, action.payload ];
            break;
        case "REFRESH":
            return action.payload;
            break;
    
        default:
            return canvas_pixels;
    }
}