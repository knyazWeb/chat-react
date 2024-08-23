import { ArrowLeft } from "lucide-react";

import { Ellipsis } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropdownMenu } from "../ui";
import { useState, useRef } from "react";
import { useAppDispatch, useOnClickOutside } from "@/hooks";
import { logout } from "@/store";
import { supabase } from "@/helpers";
import { useTranslation } from "react-i18next";
interface TopBarProps {
  children: React.ReactNode;
}

const TopBar = ({ children }: TopBarProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useOnClickOutside(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  });

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      dispatch(logout());
      navigate("/login", { replace: true });
    }
  };

  return (
    <div className="h-[50px] fixed bg-white w-full top-0 left-0  px-4 shadow-topBar dark:shadow-darkTopBar dark:bg-darkCard ">
      <div className="flex justify-between gap-2 items-center h-full w-full sm:max-w-[780px] sm:mx-auto">
        <div className="flex-1 flex justify-start items-center">
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowLeft className="text-secondary dark:text-white " />
          </button>
        </div>

        <div className="text-title text-base flex-1 font-medium text-center text-nowrap dark:text-white ">{children}</div>
        <div
          className="relative flex-1 flex items-center justify-end"
          ref={dropdownRef}
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            type="button"
          >
            <Ellipsis className="text-secondary dark:text-white" />
          </button>

          <DropdownMenu
            isDropdownActive={isDropdownOpen}
            setIsDropdownActive={setIsDropdownOpen}
          >
            <button
              onClick={signOut}
              className="hover:bg-stroke px-2 py-1 rounded-md duration-200 ease-in-out w-full text-start font-bold text-red dark:text-rose-500 dark:hover:bg-zinc-600"
            >
              {t("Exit")}
            </button>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
