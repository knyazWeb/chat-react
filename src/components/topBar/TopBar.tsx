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
      style={{
        boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.1), 0 2px 2px -1px rgba(0, 0, 0, 0.06)",
      }}
      className="h-[50px] fixed bg-white w-full top-0 left-0 flex justify-between gap-2 items-center px-4"
    >
      <button type="button" onClick={() => {
        navigate(-1)
      }}>
        <ArrowLeft className="text-secondary " />
      </button>

      <div className="text-title text-base font-medium">{children}</div>
      <button type="button">
        <Ellipsis className="text-secondary" />
      </button>
    </div>
  );
};

export default TopBar;
