import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { ChevronRight } from "lucide-react";

interface SelectSettingCardProps {
  children: React.ReactNode;
  defaultValue: string;
  Image: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  iconColor: string;
  bgColor: string;
}

const SelectSettingCard = ({ children, defaultValue, Image, iconColor, bgColor }: SelectSettingCardProps) => {
  return (
    <div className="bg-transparent flex justify-between items-center gap-2 w-full ">
      <div className="flex gap-2 items-center justify-start">
        <div className={`${bgColor} p-2 rounded-xl`}>
          <Image className={`${iconColor}`} />
        </div>
        <div className="font-medium text-title text-sm dark:text-white">{children}</div>
      </div>
      <div className="flex gap-2 items-center justify-end">
        <div className="text-secondary text-xs dark:text-white">{defaultValue}</div>
        <button type="button">
          <ChevronRight
            className="text-secondary dark:text-white"
            size={22}
          />
        </button>
      </div>
    </div>
  );
};

export default SelectSettingCard;
