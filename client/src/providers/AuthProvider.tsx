import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { useAuthStore } from "@/store/useAuthStore";
import { useChatStore } from "@/store/useChatStore";

const updateApiToken = (token: string | null) =>
  token
    ? (axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`)
    : delete axiosInstance.defaults.headers.common["Authorization"];

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getToken, userId } = useAuth();
  const [loading, setLoading] = useState(true);
  const { checkAdminStatus } = useAuthStore();
  const { initSocket, disconnectSocket } = useChatStore();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateApiToken(token);
        if (token) {
          await checkAdminStatus();
          // initialize socket if user is authenticated
          if (userId) initSocket(userId);
        }
      } catch (error) {
        updateApiToken(null);
        console.log(`Error fetching token: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    initAuth();

    return () => disconnectSocket();
  }, [getToken, checkAdminStatus]);
  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader className="size-12 text-emerald-500 animate-spin" />
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthProvider;
