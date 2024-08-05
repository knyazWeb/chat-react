import { Link, Navigate } from "react-router-dom";
import RegistrationForm from "@/components/forms/RegistrationForm";
import { useAppSelector } from "@/hooks";

const Registration = () => {
  
  const userSession = useAppSelector((state) => state.auth)
  
  
  return (
    <div className="shadow-lg shadow-slate-300 w-[500px] p-5 flex flex-col items-center justify-start rounded-lg border-t-slate-200 border bg-white dark:bg-darkCard dark:shadow-neutral-700 dark:border-neutral-700">
      <RegistrationForm />
      <div className="mt-3 text-sm text-body dark:text-gray-200">
        Already have an account?{" "}
        <Link
          className="text-blue-600 hover:text-blue-800 bg-pb transition-colors duration-200 ease-in-out dark:text-blue-400 dark:hover:text-blue-500"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Registration;
