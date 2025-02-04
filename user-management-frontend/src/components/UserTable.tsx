import { useEffect, useState } from "react";
import { fetchUsers, deleteUser, createUser, updateUser } from "../services/apiService";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUserId) {
      await updateUser(editingUserId, name, email);
      setEditingUserId(null);
    } else {
      await createUser(name, email);
    }
    setName("");
    setEmail("");
    fetchUsers().then(setUsers);
  };

  const handleEdit = (user: User) => {
    setName(user.name);
    setEmail(user.email);
    setEditingUserId(user.id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{editingUserId ? "Update User" : "Create User"}</button>
      </form>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)} className="bg-blue-500 px-2 py-1 text-white">
                  Edit
                </button>
                <button onClick={() => handleDelete(user.id)} className="bg-red-500 px-2 py-1 text-white">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
