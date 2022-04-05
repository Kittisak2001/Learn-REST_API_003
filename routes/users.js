import express, { json } from 'express';
import { createUser, getUsers, getUser, updateUser, deleteuser } from '../controllers/user.js';

const router = express.Router();

// GET Request
router.get('/', getUsers);

// POST Request
router.post('/add', createUser)

// GET one document Request
// /users/2 => req.params {id:2}
router.get('/:id', getUser);

// DELETE Request
router.delete('/:id', deleteuser);

// Update Request
router.patch('/:id', updateUser)

export {router};