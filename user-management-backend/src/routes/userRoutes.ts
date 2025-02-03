const express = require('express');
const cors = require('cors');
import { fetchUsers, fetchUser, addUser, editUser, removeUser } from "../controllers/userController";

const router = express.Router();

router.get("/", fetchUsers);
router.get("/:id", fetchUser);
router.post("/", addUser);
router.put("/:id", editUser);
router.delete("/:id", removeUser);

export default router;
