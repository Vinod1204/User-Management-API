const express = require('express');
const cors = require('cors');
import { fetchUsers, fetchUser, addUser, editUser, removeUser } from "../controllers/userController";

const router = express.Router();

router.get("/users", fetchUsers);
router.get("/users:id", fetchUser);
router.post("/users", addUser);
router.put("/users:id", editUser);
router.delete("/users:id", removeUser);

export default router;
