import { ArrowLeft } from "lucide-react";

import { Ellipsis } from "lucide-react";
interface TopBarProps {
  children: React.ReactNode;
}

const TopBar = ({ children }: TopBarProps) => {
  return (
    <div
      style={{
        boxShadow: "0 1px 3px -1px rgba(0, 0, 0, 0.1), 0 2px 2px -1px rgba(0, 0, 0, 0.06)",
      }}
      className="h-[50px] fixed bg-white w-full top-0 left-0 flex justify-between gap-2 items-center px-4"
    >
      <button type="button">
        <ArrowLeft className="text-[#B3BACE] " />
      </button>

      <div className="text-title text-base">{children}</div>
      <button type="button">
        <Ellipsis className="text-[#B3BACE]" />
      </button>
    </div>
  );
};

export default TopBar;
