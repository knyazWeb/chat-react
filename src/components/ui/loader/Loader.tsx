import { ThemeContext } from "@/shared";
import { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";



export default function Loader() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color={theme === "dark" ? "#4a86fc" : "#5074bd"}
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
