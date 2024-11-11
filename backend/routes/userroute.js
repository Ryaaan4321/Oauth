import express from 'express';
import { test, updatUser } from '../controller/usercontroller.js';
import {verifyToken} from '../utils/verifyUser.js'


const router=express.Router();

router.get('/' ,test)
router.post('/update/:id',verifyToken,updatUser)

export default router;
