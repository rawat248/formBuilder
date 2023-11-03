import express from 'express';
import {addUser, addCategory, getCategory} from '../controller/user-controller.js';


const router = express.Router();

router.post('/',addUser);
router.post('/category',addCategory);
router.get('/category',getCategory);

export default router;