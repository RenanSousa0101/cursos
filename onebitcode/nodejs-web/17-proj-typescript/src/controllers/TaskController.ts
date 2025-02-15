import {  Handler, Request, Response } from "express";
import { Task } from "../models/Task";
import { z } from "zod";
import { HttpError } from "../errors/HttpError";

const StoreRequestSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["todo", "doing", "done"]),
    priority: z.enum(["low", "medium", "high"])
});

const updateRequestSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    status: z.enum(["todo", "doing", "done"]).optional(),
    priority: z.enum(["low", "medium", "high"]).optional()
});

export class TaskController {
    //GET /api/tasks
    index: Handler = (req, res) => { // uma forma de fazer usando o Handler
        const tasks = Task.findAll();
        res.json(tasks);
    }
    //POST /api/tasks
    store = (req: Request, res: Response) => { // outra forma de fazer usando request e response
        const parseBody = StoreRequestSchema.parse(req.body);
        const newTask = Task.create(parseBody);
        res.status(201).json(newTask);
    }
    //GET /api/tasks/:id
    show = (req: Request, res: Response) => {
        const { id } = req.params;
        const task = Task.findById(+id);
        if (!task) throw new HttpError(404, "task not found");
        res.json(task);
    }
    // PUT /api/tasks/:id
    update = (req: Request, res: Response) => {
        const { id } = req.params;
        const parsedBody = updateRequestSchema.parse(req.body);
        const updatedTask = Task.update(+id, parsedBody);
        if (!updatedTask) throw new HttpError(404, "task not found");
        res.json(updatedTask);
    }
    // DELETE /api/tasks/:id
    delete =  (req: Request, res: Response) => {
        const { id } = req.params;
        const deletedTask = Task.delete(+id);
        if (!deletedTask) throw new HttpError(404, "task not found");
        res.json(deletedTask);
    }
}