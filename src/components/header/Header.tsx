import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.tsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation('common'); // Получение функции перевода

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
      <header>
        <div className="container flex min-h-[90px] justify-between items-center px-4">
          <div className="flex gap-1 w-[100px]">
            <button onClick={toggleNavbar} className="lg:hidden block p-2">
              <img src="../../../public/icon/menu.svg" alt="menu" />
            </button>
            <div className="flex w-[40px] gap-1">
              <img src="../../../public/icon/logo.svg" alt="logo" />
              <span className="fontSize11 font-[600] leading-[13px]">
              {t('companyName')}
            </span>
            </div>
          </div>

          <nav
              className={`${
                  isOpen
                      ? 'translate-x-0 lg:translate-x-0'
                      : '-translate-x-[100vw] lg:translate-x-0'
              } fixed lg:static top-0 left-0 w-[100vw] lg:w-auto h-[100vh] lg:h-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-transform duration-500 ease-in-out z-50 lg:flex lg:items-center lg:gap-8`}
          >
            <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-gray-300 rounded-full p-2 hover:bg-gray-400 transition-colors duration-300 lg:hidden"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row gap-4 fontSize14 font-medium leading-6 text-gray-800 p-6 lg:p-0">
              <Link
                  to={'/'}
                  onClick={() => setIsOpen(false)}
                  className="decoration-none hover:text-black transition-colors duration-300"
              >
                {t('main')}
              </Link>
              <Link
                  to={'/about-us'}
                  onClick={() => setIsOpen(false)}
                  className="decoration-none hover:text-black transition-colors duration-300"
              >
                {t('about')}
              </Link>
              <Link
                  to={'/clients'}
                  onClick={() => setIsOpen(false)}
                  className="decoration-none hover:text-black transition-colors duration-300"
              >
                {t('clients')}
              </Link>
              <Link
                  to={'/partners'}
                  onClick={() => setIsOpen(false)}
                  className="decoration-none hover:text-black transition-colors duration-300"
              >
                {t('partners')}
              </Link>
              <Link
                  to={'/news'}
                  onClick={() => setIsOpen(false)}
                  className="decoration-none hover:text-black transition-colors duration-300"
              >
                {t('news')}
              </Link>
              <Link
                  to={'/products'}
                  onClick={() => setIsOpen(false)}
                  className="decoration-none hover:text-black transition-colors duration-300"
              >
                {t('products')}
              </Link>
              <Link
                  to={'/'}
                  onClick={() => setIsOpen(false)}
                  className="decoration-none hover:text-black transition-colors duration-300"
              >
                {t('feedback')}
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-[22px] max-md:gap-[10px]">
            <div className="flex items-center gap-[8px]">
              <img src="../../../public/icon/language.svg" alt="language" className="w-6 h-6 max-md:hidden"/>

              <LanguageSwitcher/>
              <img src="../../../public/icon/language.svg" alt="language" className="w-6 h-6 hidden max-md:block"/>

            </div>
            <div className="flex items-center gap-[8px] cursor-pointer max-md:hidden">
              <a href="tel:+996700497413"
                   className="decoration-none  hover:text-black transition-colors duration-300 flex gap-1 items-center">
                  <img src="../../../public/icon/call.svg" alt="call"/>
                  <p className="hidden md:block md:fontSize15 font-[900] leading-[21px]">+996 700 49 74 13</p>

                </a>

            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
