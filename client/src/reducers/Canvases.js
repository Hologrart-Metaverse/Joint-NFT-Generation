export default (canvases=[], action) => {
    switch (action.type) {
        case "FETCH_CANVASES":
            return action.payload;
            break;
        case "CREATE":
            return [ ...canvases, action.payload ];
            break;
        case "EDIT":
            return action.payload;
            break;
    
        default:
            return canvases;
    }
}