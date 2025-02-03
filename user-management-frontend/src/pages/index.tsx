import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={() => signIn()} className="bg-blue-500 px-4 py-2 text-white">
        Login
      </button>
    </div>
  );
}
