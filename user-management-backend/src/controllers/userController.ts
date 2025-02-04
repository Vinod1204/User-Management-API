import { Request, Response } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../services/userService';

export const fetchUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { data, error } = await getAllUsers();
    if (error) {
      res.status(500).json(error);
      return;
    }
    res.json(data);
  } catch (err) {
    const errorMessage = (err instanceof Error) ? err.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
};

export const fetchUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { data, error } = await getUserById(req.params.id);
    if (error) {
      res.status(500).json(error);
      return;
    }
    res.json(data);
  } catch (err) {
    const errorMessage = (err instanceof Error) ? err.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email } = req.body;
    const { data, error } = await createUser(name, email);
    if (error) {
      res.status(500).json(error);
      return;
    }
    res.json(data);
  } catch (err) {
    const errorMessage = (err instanceof Error) ? err.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
};

export const editUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const { data, error } = await updateUser(req.params.id, name);
    if (error) {
      res.status(500).json(error);
      return;
    }
    res.json(data);
  } catch (err) {
    const errorMessage = (err instanceof Error) ? err.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
};

export const removeUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { data, error } = await deleteUser(req.params.id);
    if (error) {
      res.status(500).json(error);
      return;
    }
    res.json(data);
  } catch (err) {
    const errorMessage = (err instanceof Error) ? err.message : 'Unknown error';
    res.status(500).json({ error: errorMessage });
  }
};
