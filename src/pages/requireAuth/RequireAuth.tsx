import { supabase } from "@/helpers/supabaseClient";
import { useAppDispatch } from "@/hooks/redux";
import { logout } from "@/store/slices/authSlice";
import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const RequireAuth = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await supabase.auth.getUser();
        console.log("data", data);
        if (data.user) {
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
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      replace
    />
  );
};

export default RequireAuth;
