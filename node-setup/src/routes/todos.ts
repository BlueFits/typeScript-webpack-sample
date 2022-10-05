import { Router } from 'express';

import { createTodo, getTodos, updateTodo, deleteTodo } from "../controllers/todosController";

const router = Router();

//CRUD

//Create
router.post('/', createTodo);

//Read
router.get('/', getTodos); 

//Update
router.patch('/:id', updateTodo);

//Delete
router.delete('/:id', deleteTodo);

export default router;