import LoginForm from "@/components/forms/LoginForm";
import { useAppSelector } from "@/hooks/redux";
import { Link, Navigate } from "react-router-dom";



const Login = () => {
  
  const userSession = useAppSelector((state) => state.auth);

  return (
    <div className="shadow-lg shadow-slate-300 w-[500px] p-5 flex flex-col items-center justify-start rounded-lg border-t-slate-200 border">
      <LoginForm />
      <div className="mt-3 text-sm">
        Don't have an account?{" "}
        <Link
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out"
          to="/signup"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}

export default Login