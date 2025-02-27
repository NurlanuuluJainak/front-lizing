import { useState, useEffect } from 'react';
import './Banner.css';
import { useTranslation } from 'react-i18next';
import { usePrismicDocumentByUID } from "@prismicio/react";
import { useLanguage } from "./LanguageSwitcher/LanguageContextProps.tsx";
import { Link } from "react-router-dom";
import Loading from "./UI/loading.tsx";


const Banner = () => {
  const [document] = usePrismicDocumentByUID('management', 'home');
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(autoSlide);
  }, [currentSlide]);



  if (!document) {
    return <Loading />;
  }

  const filteredItems = document.data.body.filter((item: any) => {
    return item.primary.title_ru || item.primary.title_kg;
  });



  const nextSlide = () => {
    setIsTextVisible(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % filteredItems.length);
      setIsTextVisible(true);
    }, 500);
  };

  const prevSlide = () => {
    setIsTextVisible(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + filteredItems.length) % filteredItems.length);
      setIsTextVisible(true);
    }, 500);
  };


  return (
    <div className="relative mb-16 ">
      <div className="carousel w-full h-[560px] relative overflow-hidden">
        <div
          className="slides flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {filteredItems.map((slide: any) => (
            <div key={slide.id} className="carousel-item bg-[#122247] w-full flex-shrink-0 ">
              <img
                src={slide.primary.img?.url || ''}
                className="w-[600px] ml-auto h-[400px]  object-cover hidden sm:block"
                alt={slide.alt || 'Слайд'}
              />
              <img
                src={slide.primary.img_mobile?.url || ''}
                className="w-[400px]  mt-[80%]  object-cover sm:hidden"
                alt="Mobile Banner"
              />
              <div
                className="absolute left-0 sm:left-[5rem] w-full h-full flex items-center justify-start px-5 sm:px-10 bg-blue-900/50 max-md:top-[-8rem]"
              >
                <div
                  className={`text-white max-w-[630px] mb-10 text-center sm:text-left ${isTextVisible ? 'show-text' : 'fade-text'}`}>
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4">{slide.primary[`title_${language}`]}</h1>
                  <div className="flex mb-[30px] gap-8  max-md:hidden">
                    {filteredItems?.length > 0 && filteredItems[0].items?.length > 0 ? (
                      filteredItems[0].items.map((item: any, index: number) => (
                        <div key={index} className="flex flex-col gap-4">
                          <p>{item[`text_${language}`]}</p>
                          <div className="flex items-center  text-[32px] font-[400]">
                            <img src={item.icon.url} alt="Телефон" />
                            <h1>{item.num}</h1>

                          </div>
                        </div>
                      ))
                    ) : (
                      <div>Данные отсутствуют</div>
                    )}

                  </div>
                  <Link to={"/products"} className="bg-white mt-10 text-black px-[80px] text-[24px] py-[10px]  rounded-lg">
                    {t('detailsButton')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex sm:justify-between px-4 max-md:hidden">
          <button onClick={prevSlide} className="bg-white rounded-full py-2 px-6 sm:block hidden">❮</button>
          <button onClick={nextSlide} className="bg-white rounded-full py-2 px-6">❯</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
