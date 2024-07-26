import { Switch } from "antd";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface ToggleSettingCardProps {
  children: React.ReactNode;
  defaultToggleValue: boolean;
  Image: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  iconColor: string;
  bgColor: string;
}

const ToggleSettingCard = ({ children, defaultToggleValue, Image, iconColor, bgColor }: ToggleSettingCardProps) => {
  return (
    <div className="bg-transparent flex justify-between items-center gap-2 w-full">
      <div className="flex gap-2 items-center justify-start">
        <div className={`${bgColor} p-2 rounded-xl`}>
          <Image className={`${iconColor}`} />
        </div>
        <div className="font-medium text-title text-sm">{children}</div>
      </div>
      <div className="flex gap-2 items-center justify-end pr-1">
        <Switch
          className="bg-stroke aria-checked:bg-pblue "
          defaultChecked={defaultToggleValue}
          size="small"
        />
      </div>
    </div>
  );
};

export default ToggleSettingCard;
