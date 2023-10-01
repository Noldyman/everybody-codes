import express, { Express } from "express";
import cors from "cors";
import cameras from "../routes/cameras";

const startRoutes = (app: Express) => {
  app.use(express.json());
  app.use(cors());

  app.use("/api/cameras", cameras);
};

export default startRoutes;
