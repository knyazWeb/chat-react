import { CustomAddButton } from "@/components";
import { navbarList } from "./navbarList";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav
      style={{
        boxShadow: "0 -1px 3px -1px rgba(0, 0, 0, 0.1), 0 -2px 2px -1px rgba(0, 0, 0, 0.06)",
      }}
      className={`h-[70px] px-3 bg-white w-full fixed bottom-0 left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out z-10`}
    >
      <ul className="relative flex justify-between  max-w-[320px] mx-auto h-full items-center px-6">
        {navbarList.map((navbarItem, index) => {
          const ImageComponent = navbarItem.image;
          return (
            <li
              key={index}
              className={`text-pblue transition-all duration-300 ease-in-out basis-[59px] ${
                location.pathname === navbarItem.link
                  ? "brightness-100 opacity-100"
                  : "brightness-75 opacity-70 hover:brightness-100 hover:opacity-100 "
              }`}
            >
              <Link
                to={navbarItem.link}
                className="flex flex-col gap-1 items-center"
              >
                <ImageComponent size={28} />
                <span className="text-xs font-medium">{navbarItem.name}</span>
              </Link>
            </li>
          );
        })}
        <CustomAddButton />
      </ul>
    </nav>
  );
};

export default Navbar;
