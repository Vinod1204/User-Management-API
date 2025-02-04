import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import UserTable from "@/components/UserTable";
import { isAdmin } from "@/utils/authUtils";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    router.push("/");
    return null;
  }

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl p-4">Dashboard</h1>
      {session.user?.role && isAdmin(session.user.role) && <UserTable />}
    </div>
  );
}
