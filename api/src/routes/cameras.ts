import { Router } from "express";
import cameras from "../controllers/cameras";

const router = Router();

router.get("/all", cameras.getAll);

export default router;
