import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SelectSettingCardProps {
  children: React.ReactNode;
  defaultValue: string;
  Image: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  iconColor: string;
  bgColor: string;
  onClick?: () => void;
}

const SelectSettingCard = ({ children, defaultValue, Image, iconColor, bgColor, onClick }: SelectSettingCardProps) => {
  const { t } = useTranslation();

  

  return (
    <div className="bg-transparent flex justify-between items-center gap-2 w-full ">
      <div className="flex gap-2 items-center justify-start">
        <div className={`${bgColor} p-2 rounded-xl`}>
          <Image className={`${iconColor}`} />
        </div>
        <div className="font-medium text-title text-sm dark:text-white">{t(`${children}`)}</div>
      </div>
      <div
        onClick={onClick}
        className="flex gap-2 items-center justify-end cursor-pointer"
      >
        <div className="text-secondary text-xs dark:text-white">{t(`${defaultValue}`)}</div>
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
