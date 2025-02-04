import AdminRoute from "../components/AdminRoute";
import UserTable from "../components/UserTable";

const AdminDashboard = () => {
  return (
    <AdminRoute>
      <h1>Admin Dashboard</h1>
      <UserTable />
    </AdminRoute>
  );
};

export default AdminDashboard;
