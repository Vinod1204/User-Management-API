const express = require('express');
const cors = require('cors');
import { fetchUsers, fetchUser, addUser, editUser, removeUser } from "../controllers/userController";

const router = express.Router();

router.get("/users", fetchUsers);
router.get("/users/:id", fetchUser); // Added slash before :id
router.post("/users", addUser);
router.put("/users/:id", editUser); // Added slash before :id
router.delete("/users/:id", removeUser); // Added slash before :id

export default router;
