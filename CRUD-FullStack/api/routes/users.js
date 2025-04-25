import express from "express";
import { 
  addUser, 
  deleteUser, 
  getUsers, 
  updateUser, 
  getUser // ⬅️ nova função importada
} from "../controllers/user.js";

const router = express.Router();

router.get("/:id", getUser);

router.get("/", getUsers);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
