import { Router } from "express";
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from "../controllers/tasks";

const router = Router();
//definiendo rutas que usara la app de todo list

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get all tasks
 *      tags: [Tasks] 
 */
router.get("/tasks", getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get total tasks count
 *      tags: [Tasks]
 */
router.get("/tasks/count", getTaskCount);

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get a task by id
 *      tags: [Tasks]
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: save a new task
 *      tags: [Tasks]
 */
router.post("/tasks", saveTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: delete a task by id
 *      tags: [Tasks]
 */
router.delete("/tasks/:id", deleteTask);

/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: update a task by id
 *      tags: [Tasks]
 */
router.put("/tasks/:id", updateTask);

export default router;