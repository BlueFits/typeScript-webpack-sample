import { RequestHandler } from "express";

//Models
import { Todo } from "../models/Todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as { text: string }).text;
    const newTodo = new Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "Created the todo.", createdTodo: newTodo});

};

export const getTodos: RequestHandler = (req, res, next) => {
    res.json({ todos: TODOS });
}

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = (req.body as { text: string }).text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) res.status(500).json({ err: "Todo does not exist" });
    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
    res.status(201).json({ message: "Updated!", update: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler = (req, res, next) => {
    //Find id
    const idToDelete = req.params.id;
    //find id in TODOS arr and delete from array
    let deleteIndex = TODOS.findIndex(todo => todo.id === idToDelete);
    if (deleteIndex < 0) res.status(404).json({ err: "todo not found" });
    let removedTodo = TODOS.splice(deleteIndex, 1);
    //return deleted object from array
    res.status(200).json({ message: "deleted", removedTodo });
};