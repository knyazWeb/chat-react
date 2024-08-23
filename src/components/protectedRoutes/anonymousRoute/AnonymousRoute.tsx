import { Loader } from "@/components";
import { supabase } from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { login, logout } from "@/store";
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
          //dispatch(
          //  login({
          //    userId: data.user.id,
          //    userName: data.user.user_metadata.first_name,
          //    userEmail: data.user.email,
          //    isAuth: true,
          //    avatarUrl: data.user.user_metadata.avatar_url,
          //  })
          //);
          setIsAuth(true);
        }
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  if (loading) {
    return <Loader />;
  } else if (!loading && !isAuth) {
    dispatch(logout());
  }

  return isAuth ? (
    <Navigate
      to="/"
      replace
    />
  ) : (
    // section for login and signup page 
    <section className="flex w-screen h-screen justify-center items-center px-3">
      <Outlet />
    </section>
  );
};

export default AnonymousRoute;
