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
        return next(errorhandler(401, 'you can update only your account'))
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
            {new:true}
        );
        const {password,...rest}=updatUser._doc
        res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
}
