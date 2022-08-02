import Users from "../models/UsersModel";

export const createUser = async (req, res) => {
    const user = req.body;

    const isUserExist = await Users.findOne({email: user.email});
    if (isUserExist !== null) {
        return res.status(409).json({ message: "user is exist"});
    }
    const newUser = new Users(user);
    
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}


export const login = async (req, res) => {
    const user = req.body;
    try {
        const isUserExist = await Users.findOne({email: user.email, password: user.password});
        if (isUserExist !== null) {
            res.send(isUserExist);
        }
        else {
            res.status(400).json({ message: "deneme" });
            console.log(isUserExist);
        }
    } catch (error) {
        res.status(409);
    }
}