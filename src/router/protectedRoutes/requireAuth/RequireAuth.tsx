import Navbar from "@/components/navbar/Navbar";
import { supabase } from "@/helpers/supabaseClient";
import { useAppDispatch } from "@/hooks/redux";
import { login, logout } from "@/store/slices/authSlice";
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
    // div wrapper 70px for top menu
    <div className="px-3 pt-[70px]">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate
      to="/login"
      replace
    />
  );
};

export default RequireAuth;
