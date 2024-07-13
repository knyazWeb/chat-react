import { supabase } from "@/helpers/supabaseClient";
import { useAppDispatch } from "@/hooks/redux";
import { login, logout } from "@/store/slices/authSlice";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";


const AnonymousRoute = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        if (data.user && data.user.email && data.user.id && data.user.user_metadata.first_name) {
          dispatch(
            login({
              userId: data.user.id,
              userName: data.user.user_metadata.first_name,
              userEmail: data.user.email,
              isAuth: true,
            })
          );
          setIsAuth(true);
        }
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (!loading && !isAuth) {
    dispatch(logout());
  }

  return isAuth ? (
    <Navigate
      to="/"
      replace
    />
  ) : (
    <Outlet />
  );
}

export default AnonymousRoute