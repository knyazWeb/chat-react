import { Switch } from "antd";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface ToggleSettingCardProps {
  children: React.ReactNode;
  defaultToggleValue: string;
  changeToggleValue: (value: string) => void;
  Image: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  iconColor: string;
  bgColor: string;
}

const ToggleSettingCard = ({ children, defaultToggleValue, changeToggleValue, Image, iconColor, bgColor }: ToggleSettingCardProps) => {
  return (
    <div className="bg-transparent flex justify-between items-center gap-2 w-full">
      <div className="flex gap-2 items-center justify-start">
        <div className={`${bgColor} p-2 rounded-xl`}>
          <Image className={`${iconColor}`} />
        </div>
        <div className="font-medium text-title text-sm dark:text-white">{children}</div>
      </div>
      <div className="flex gap-2 items-center justify-end pr-1">
        <Switch
          onChange={() => changeToggleValue(defaultToggleValue === "dark" ? "light" : "dark")}
          className="bg-stroke aria-checked:bg-pblue "
          defaultChecked={defaultToggleValue === "dark" ? true : false} 
          size="small"
        />
      </div>
    </div>
  );
};

export default ToggleSettingCard;
