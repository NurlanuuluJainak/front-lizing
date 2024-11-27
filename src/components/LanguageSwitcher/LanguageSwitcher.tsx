import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLanguage } from "./LanguageContextProps.tsx";
import Kg from "../../../public/icon/kg.svg";
import Ru from "../../../public/icon/ru.svg";
import En from "../../../public/icon/um.svg"; // English flag icon

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const { changeLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    changeLanguage(language);
    i18n.changeLanguage(language);
    setDropdownOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button to toggle dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        id="language-menu-button"
        aria-haspopup="true"
      >
        <img
          src={
            selectedLanguage === "ru"
              ? Ru
              : selectedLanguage === "kg"
              ? Kg
              : En
          }
          className="w-6 h-4"
          alt={
            selectedLanguage === "ru"
              ? "Russian flag"
              : selectedLanguage === "kg"
              ? "Kyrgyz flag"
              : "English flag"
          }
        />
        <span>
          {selectedLanguage === "ru"
            ? t("Русский")
            : selectedLanguage === "kg"
            ? t("Кыргызча")
            : t("English")}
        </span>
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-labelledby="language-menu-button"
        >
          <button
            onClick={() => handleLanguageChange("ru")}
            className="flex items-center gap-3 w-full px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            role="menuitem"
          >
            <img src={Ru} className="w-5 h-5" alt="Russian flag" />
            <p>{t("Русский")}</p>
          </button>
          <button
            onClick={() => handleLanguageChange("kg")}
            className="flex items-center gap-3 w-full px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            role="menuitem"
          >
            <img src={Kg} className="w-5 h-5" alt="Kyrgyz flag" />
            <p>{t("Кыргызча")}</p>
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className="flex items-center gap-3 w-full px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            role="menuitem"
          >
            <img src={En} className="w-5 h-5" alt="English flag" />
            <p>{t("English")}</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
