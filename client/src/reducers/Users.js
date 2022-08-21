export default (user=[], action) => {
    switch (action.type) {
        case "CREATE":
            return action.payload;
            break;
        case "LOGIN":
            return action.payload;
            break;
        case "LOGINLOCALLY":
            return action.payload;
            break;
        case "LOGOUT":
            return [];
            break;
    
        default:
            return user;
    }
}