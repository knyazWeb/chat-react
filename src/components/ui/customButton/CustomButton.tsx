import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";


interface CustomButtonProps {
  children: React.ReactNode;
  Image?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  onClick?: () => void;
}


const CustomButton = ({children, Image, onClick}: CustomButtonProps) => {
  return (
    <button onClick={onClick} className="w-full flex justify-center gap-1 items-center py-3 px-2 text-white bg-pblue text-xs font-medium rounded-lg">
      {Image && <Image />}
      {children}
    </button>
  )
}

export default CustomButton