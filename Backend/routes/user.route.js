import express from 'express';
import { deleteUser, forgotPassword, getUser, getUsers, test, updatePassword, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test)
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);


router.get('/getusers', verifyToken, getUsers);
router.get('/:userId',  getUser);
router.post('/forgotPassword', forgotPassword);
router.put('/updatePassword/:userId',verifyToken,  updatePassword);


export default router;