import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLanguage } from "./LanguageContextProps.tsx";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const { changeLanguage } = useLanguage();

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLanguage = event.target.value;
        setSelectedLanguage(newLanguage);
        changeLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div >
            <select

                id="language-select"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="block w-full p-2 cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 hover:bg-gray-50 transition ease-in-out duration-150"
            >
                <option value="ru">
                     Русский
                </option>
                <option value="kg">
                     Кыргызча
                </option>
            </select>

        </div>
    );
};

export default LanguageSwitcher;
