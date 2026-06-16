import { Router } from "express";
import { getAllGames, getbyID, createGame, updateGames, deleteGames } from "../controllers/games.controllers.js"

const router = Router();

router.get("/games", getAllGames);

router.get("/games/:id", getbyID);

router.post("/games",createGame);

router.put("/games/:id", updateGames);

router.delete("/games/:id", deleteGames);

export default router;