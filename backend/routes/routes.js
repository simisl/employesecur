import { empControl } from "../controllers/controllers.js";
import express from "express";
import bodyparser from "body-parser";
import { Auth } from "../auth/auth.js";

const router = express.Router();
router.use(bodyparser.json());

router.get('/list', Auth.authGuard, empControl.employeeList);
router.post('/new', empControl.newEmployee);
router.get('/auth/:id', empControl.empAuth)

export const route = {router}
