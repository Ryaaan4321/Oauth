import express from 'express';
import { test, updatUser,deleteUser } from '../controller/usercontroller.js';
import {verifyUser} from '../utils/verifyUser.js'


const router=express.Router();

router.get('/' ,test)
router.post('/update/:id',verifyUser,updatUser)
router.delete('/delete/:id',verifyUser,deleteUser);

export default router;
