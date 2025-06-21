import { Router } from "express";
import { getStatistics } from "../controllers/stat.controller.js";
import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, getStatistics);

export default router;
