
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface AdminRouteProps {
  children: ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session?.user.role !== "admin") {
    router.push("/auth/signin"); 
    return null;
  }

  return <>{children}</>;
};

export default AdminRoute;
