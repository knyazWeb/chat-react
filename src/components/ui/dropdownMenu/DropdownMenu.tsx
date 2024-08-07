
import { useRef } from "react";
import { Transition } from "react-transition-group";

interface DropdownMenuProps {
  isDropdownActive: boolean;
  setIsDropdownActive: (value: boolean) => void;
  children: React.ReactNode;
}

const DropdownMenu = ({ isDropdownActive, setIsDropdownActive, children }: DropdownMenuProps) => {
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  return (
    <div className="absolute w-full z-30 top-[115%] ">
      <Transition
        nodeRef={dropdownMenuRef}
        in={isDropdownActive}
        timeout={200}
        unmountOnExit={true}
      >
        {(state) => (
          <div
            ref={dropdownMenuRef}
            className={`relative ${
              state === "entering" || state === "entered" ? "opacity-100" : "opacity-0"
            } text-title w-full bg-white p-2 border rounded-md text-xs transition-opacity ease-in-out duration-200 flex flex-col items-start gap-2 overflow-hidden`}
          >
            {children}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default DropdownMenu;

function setIsDropdownActive(arg0: boolean) {
  throw new Error("Function not implemented.");
}
