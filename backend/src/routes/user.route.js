import { Router } from "express";
import { getAllUsers, getbyID, updateUsers, deleteUser } from "../controllers/user.controllers.js"
import { verifyRole, verifyToken } from "../middleware/auth.middeware.js";

const router = Router();

router.get("/users", verifyToken, verifyRole("admin", "superadmin") , (getAllUsers));
router.get("/users/:id", verifyToken, verifyRole("admin", "superadmin"), (getbyID));
router.put("/users/:id", verifyToken, verifyRole("superadmin"), (updateUsers));
router.delete("/users/:id", verifyToken, verifyRole("superadmin"), (deleteUser));

export default router;