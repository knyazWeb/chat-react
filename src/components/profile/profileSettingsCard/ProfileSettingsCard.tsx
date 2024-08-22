import { DropdownMenu, SelectSettingCard, ToggleSettingCard } from "@/components";
import { useOnClickOutside } from "@/hooks";
import { ThemeContext } from "@/shared";
import { Clock } from "lucide-react";
import { Languages } from "lucide-react";
import { Eclipse } from "lucide-react";
import { useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const ProfileSettingsCard = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  });

  const changeLanguage = (lng: string) => {
    setIsDropdownOpen(false);
    setCurrentLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <div className="w-full shadow-customLight bg-white rounded-2xl p-5 flex flex-col justify-start gap-4 dark:bg-darkCard dark:shadow-darkCustomLight">
      <SelectSettingCard
        Image={Clock}
        defaultValue="Default"
        bgColor="bg-pblue bg-opacity-15 dark:bg-opacity-30"
        iconColor="text-pblue"
        children="Timezone"
      />
      <div
        className="relative w-full flex justify-end items-center"
        ref={dropdownRef}
      >
        <SelectSettingCard
          Image={Languages}
          defaultValue={currentLanguage === "en" ? "English" : "Russian"}
          bgColor="bg-green bg-opacity-15 dark:bg-opacity-30"
          iconColor="text-green"
          children="Language"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />

        {isDropdownOpen && (
          <DropdownMenu
            isDropdownActive={isDropdownOpen}
            setIsDropdownActive={setIsDropdownOpen}
          >
            <button
              disabled={currentLanguage === "en"}
              onClick={() => changeLanguage("en")}
              className={`px-2 py-1 rounded-md duration-200 ease-in-out w-full text-start font-bold ${
                (currentLanguage === "en" && "bg-body text-white") || "text-body hover:bg-stroke"
              } text-xs dark:text-white`}
            >
              {t("English")}
            </button>
            <button
              disabled={currentLanguage === "ru"}
              onClick={() => changeLanguage("ru")}
              className={` px-2 py-1 rounded-md duration-200 ease-in-out w-full text-start font-bold ${
                (currentLanguage === "ru" && "bg-body text-white") || "text-body hover:bg-stroke"
              } text-xs dark:text-white`}
            >
              {t("Russian")}
            </button>
          </DropdownMenu>
        )}
      </div>

      <ToggleSettingCard
        Image={Eclipse}
        changeToggleValue={setTheme}
        defaultToggleValue={theme}
        bgColor="bg-skyblue bg-opacity-15 dark:bg-opacity-30"
        iconColor="text-skyblue"
        children="Dark Mode"
      />
    </div>
  );
};

export default ProfileSettingsCard;
