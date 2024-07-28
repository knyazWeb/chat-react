import { Navbar } from "@/components";
import { supabase } from "@/helpers";
import { useAppDispatch } from "@/hooks";
import { login, logout } from "@/store";
import { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        //FIXME: УБРАТЬ CL
        console.log("data", data);
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
    <div className="px-3">
      <main>
        <Outlet />
      </main>
      <Navbar />
    </div>
  ) : (
    <Navigate
      to="/login"
      replace
    />
  );
};

export default RequireAuth;
