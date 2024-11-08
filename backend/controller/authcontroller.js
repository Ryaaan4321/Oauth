import User from '../models/db.js'
import bcryptjs from 'bcryptjs'
import { errorhandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();


export const signup = async (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const hashedpassword = bcryptjs.hashSync(password, 10);
    console.log(hashedpassword)
    const newUser = new User({ username, email, password: hashedpassword });
    try {
        await newUser.save();
        res.status(201).json({
            msg: "user is created succesfully"
        })
    } catch (err) {
        next(err);
    }
};
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validuser = await User.findOne({ email: email });
        if (!validuser) {
            return next(errorhandler(401, 'User not found'));
        }
        const validpassword = bcryptjs.compareSync(password, validuser.password);
        if (!validpassword) {
            return next(errorhandler(401, 'Invalid Credentials'));
        }
        const token = jwt.sign({ id: validuser._id },
            process.env.JWT_SECRET
        )
        const { password: hashedpassword, ...userData } = validuser._doc;
        res.cookie('access_token', token, {
            httpOnly: true
        })
            .status(200)
            .json(userData);
    } catch (error) {
        next(error);
    }
}