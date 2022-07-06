import bcrypt from "bcrypt";
import cors from "cors";
import express from "express";
import "express-async-errors"; 
import jwt from "jsonwebtoken";
import connection from "./database.js";

import router from "../routers/masterRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);



export default app;
