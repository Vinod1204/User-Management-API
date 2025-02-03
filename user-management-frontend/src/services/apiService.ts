import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: API_URL,
});

export const fetchUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const createUser = async (name: string, email: string) => {
  const response = await api.post("/users", { name, email });
  return response.data;
};

export const updateUser = async (id: string, name: string, email: string) => {
  const response = await api.put(`/users/${id}`, { name, email });
  return response.data;
};

export const deleteUser = async (id: string) => {
  await api.delete(`/users/${id}`);
};
