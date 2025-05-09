import { Router } from "express";
import usersRouter from "./users.mjs";
import porductsRouter from "./products.mjs";

const router = Router();
router.use(usersRouter);
router.use(porductsRouter);

export default router;
