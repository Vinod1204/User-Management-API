import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useSession } from "next-auth/react";
import { AuthContextType } from "@/types/AuthContext"; // Import the AuthContextType

// Create the context with a default value of null
const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data: session } = useSession();
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    if (session?.user) {
      setUserRole(session.user.role);
    }
  }, [session]);

  return (
    <AuthContext.Provider value={{ userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
