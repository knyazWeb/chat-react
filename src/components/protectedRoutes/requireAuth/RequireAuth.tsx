import { Loader, Navbar } from "@/components";
import { supabase } from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { SocketProvider } from "@/shared";
import { fetchChats, login, logout } from "@/store";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const RequireAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState(false);
  const uniqueParam = new Date().getTime();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data.user && data.user.email && data.user.id && data.user.user_metadata.first_name) {
          const { data: avatarData } = await supabase.storage
            .from("avatars")
            .download(`${data.user?.id}/avatar?${uniqueParam}`);
          dispatch(
            login({
              userId: data.user.id,
              userName: data.user.user_metadata.first_name,
              userEmail: data.user.email,
              isAuth: true,
              avatarUrl: avatarData ? URL.createObjectURL(avatarData) : null,
            })
          );
          setIsAuth(true);
          await dispatch(fetchChats(data.user.id));
        }
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  if (loading) {
    return <Loader />
  } else if (!loading && !isAuth) {
    dispatch(logout());
  }

  return isAuth ? (
    <SocketProvider>
      <div className="px-3">
        <main>
          <Outlet />
        </main>
        <Navbar />
      </div>
    </SocketProvider>
  ) : (
    <Navigate
      to="/login"
      replace
    />
  );
};

export default RequireAuth;
