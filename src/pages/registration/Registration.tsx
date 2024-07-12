import { Link } from "react-router-dom";
import RegistrationForm from "@/components/forms/RegistrationForm";

const Registration = () => {
  return (
    <div className="shadow-lg shadow-slate-300 w-[500px] p-5 flex flex-col items-center justify-start rounded-lg border-t-slate-200 border">
      <RegistrationForm />
      <div className="mt-5 text-sm">
        Already have an account?{" "}
        <Link
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200 ease-in-out"
          to="/login"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Registration;
