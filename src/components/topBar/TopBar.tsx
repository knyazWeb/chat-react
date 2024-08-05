import { ArrowLeft } from "lucide-react";

import { Ellipsis } from "lucide-react";
import { useNavigate } from "react-router-dom";
interface TopBarProps {
  children: React.ReactNode;
}

const TopBar = ({ children }: TopBarProps) => {
  const navigate = useNavigate()
  return (
    <div

      className="h-[50px] fixed bg-white w-full top-0 left-0 flex justify-between gap-2 items-center px-4 shadow-topBar dark:shadow-darkTopBar dark:bg-darkCard"
    >
      <button type="button" onClick={() => {
        navigate(-1)
      }}>
        <ArrowLeft className="text-secondary dark:text-white " />
      </button>

      <div className="text-title text-base font-medium dark:text-white">{children}</div>
      <button type="button">
        <Ellipsis className="text-secondary dark:text-white" />
      </button>
    </div>
  );
};

export default TopBar;
