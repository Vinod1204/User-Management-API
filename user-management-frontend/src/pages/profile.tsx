import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl p-4">Profile</h1>
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
}
