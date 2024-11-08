import User from '../models/db.js'
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const hashedpassword = bcryptjs.hashSync(password, 10);
    const newUser = await new User({ username, email, password:hashedpassword });
    console.log(hashedpassword);
    try {
        newUser.save();
        res.status(201).json({
            msg: "user is created succesfully"
        })
    } catch (err) {
        res.status(500).json({
            msg: err.msg
        })
    }



}