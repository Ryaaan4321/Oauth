import User from '../models/db.js';
import { errorhandler } from '../utils/error.js';
import bcryptjs from 'bcryptjs'
export const test = (req, res) => {
    res.json({
        msg: "API IS BREAKING THE RECORD"
    });
};


export const updatUser = async (req, res, next) => {
    if (req.user.id != req.user.params.id) {
        return res.status(404).json({
            msg:"you can only update your account"
        })
    }
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        const updatUser = await User.findByIdAndUpdate(req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,

                }
            },
            { new: true }
        );
        const { password, ...rest } = updatUser._doc
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}


export const deleteUser = async function (req, res, next) {
    if (req.user.id != req.params.id) {
        return res.status(404).json(
            {
                msg: "you can only delte your account"
            }
        )
    }
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted');
    } catch (error) {
        next(error);
    }
}