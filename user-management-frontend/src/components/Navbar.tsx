import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <Link href="/dashboard">Dashboard</Link>
      </div>
      {session ? (
        <button onClick={() => signOut()} className="bg-red-500 px-3 py-1 rounded">
          Logout
        </button>
      ) : (
        <Link href="/">Login</Link>
      )}
    </nav>
  );
}
