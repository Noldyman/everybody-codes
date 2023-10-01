import express from "express";
import startRoutes from "./startup/startRoutes";

const app = express();
startRoutes(app);

export default app;
