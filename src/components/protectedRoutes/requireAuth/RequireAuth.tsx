import { Navbar } from "@/components";
import { supabase } from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { SocketProvider } from "@/shared";
import { fetchChats, login, logout } from "@/store";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const RequireAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        // TODO: сделать кастомное получение пользователя с обновлением user таблицы (for update email)
        const { data } = await supabase.auth.getUser();
        const { data: avatarData } = await supabase.storage.from("avatars").download(`${data.user?.id}/avatar`);
        //FIXME: УБРАТЬ CL
        console.log("data", data);
        if (data.user && data.user.email && data.user.id && data.user.user_metadata.first_name) {
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
    //TODO: СДЕЛАТЬ LOADER
    return <div className="text-black">Loading...</div>;
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
