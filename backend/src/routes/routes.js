import { Router } from "express";
import { getAllGames, getbyID, createGame, updateGames, deleteGames } from "../controllers/games.controllers.js"
import { verifyToken, verifyRole } from "../middleware/auth.middeware.js";

const router = Router();

router.get("/games", getAllGames);

router.get("/games/:id", getbyID);

router.post("/games",verifyToken, verifyRole("admin", "superadmin"), (createGame));

router.put("/games/:id",verifyToken, verifyRole("admin", "superadmin"), (updateGames));

router.delete("/games/:id", verifyToken, verifyRole("admin", "superadmin"), (deleteGames));

export default router;