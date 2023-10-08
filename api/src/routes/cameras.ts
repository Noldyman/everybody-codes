import { Router } from "express";
import cameras from "../controllers/cameras";

const router = Router();

router.get("", cameras.getAll);

router.get("/name/:name", cameras.getByName);

export default router;
