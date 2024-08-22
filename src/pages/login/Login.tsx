import { LoginForm } from "@/components";
import { useAppSelector } from "@/hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Login = () => {
  const userSession = useAppSelector((state) => state.auth);
  const { t } = useTranslation();
  
  return (
    <div className="shadow-lg shadow-slate-300 w-[500px] p-5 flex flex-col items-center justify-start rounded-lg border-t-slate-200 border bg-white dark:bg-darkCard dark:shadow-neutral-700 dark:border-neutral-700">
      <LoginForm />
      <div className="mt-3 text-sm text-body dark:text-gray-200">
       {t("Don't have an account?")}{" "}
        <Link
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out dark:text-blue-400 dark:hover:text-blue-500"
          to="/signup"
        >
          {t("Signup")}
        </Link>
      </div>
    </div>
  );
};

export default Login;
