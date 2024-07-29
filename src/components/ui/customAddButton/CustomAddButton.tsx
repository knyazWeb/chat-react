import { MessageSquarePlus } from "lucide-react";

interface CustomAddButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

const CustomAddButton = ({type, onClick}: CustomAddButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-blueGradient rounded-full p-3  text-white">
      <MessageSquarePlus  />
    </button>
  );
};

export default CustomAddButton;
