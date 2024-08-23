import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";


interface CustomButtonProps {
  children: React.ReactNode;
  Image?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}


const CustomButton = ({children, Image, type, onClick}: CustomButtonProps) => {
  return (
    <button onClick={onClick} type={type} className="w-full flex justify-center gap-1 items-center py-3 px-2 text-white bg-pblue text-xs font-medium rounded-lg max-w-[350px]">
      {Image && <Image />}
      {children}
    </button>
  )
}

export default CustomButton