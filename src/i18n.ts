import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Инициализация i18next
i18n
  .use(Backend) // Подключение backend для загрузки переводов
  .use(LanguageDetector) // Определение языка
  .use(initReactI18next) // Интеграция с React
  .init({
    fallbackLng: 'ru', // Язык по умолчанию
    supportedLngs: ['ru', 'kg'], // Поддерживаемые языки
    debug: true,
    interpolation: {
      escapeValue: false, // Безопасность строк
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Путь к файлам с переводами
    },
  });

export default i18n;
