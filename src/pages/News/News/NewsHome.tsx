import { useTranslation } from "react-i18next";
import ButtonLInk from "../../../components/UI/ButtonLInk.tsx";
import { Link } from "react-router-dom";
import { usePrismicDocumentByUID } from "@prismicio/react";
import { useLanguage } from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";

const NewsHome = () => {
    const [document] = usePrismicDocumentByUID('for_clients', 'news');

    const { language } = useLanguage();
    const { t } = useTranslation();

    if (!document) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-[397px] flex flex-col min-h-[90px] gap-[16px]'>
                    <h1 className='text-[32px] md:text-[40px] font-[700] leading-[48px] text-blue text-center md:text-left'>
                        {t('newsHome.title')}
                    </h1>
                    <p className='text-[14px] font-[500] leading-[24px] text-center md:text-left'>
                        {t('newsHome.description')}
                    </p>
                </div>
                <div className='mt-[16px] md:mt-0'>
                    <Link className='py-[10px] px-[18px] bg-blue rounded-[8px] text-[white] text-[16px] font-[500] leading-[24px]' to={'/news'}>
                        {t('newsHome.seeAll')}
                    </Link>
                </div>
            </div>

            {/* Mobile Carousel with Text */}
            <div className='block md:hidden mt-[40px]'>
                <div className="carousel w-full rounded-box">
                    {document.data.body.map((item, index) => (
                        <div key={index} className="carousel-item bg-[#F5F6FF] overflow-hidden flex flex-col justify-center gap-[16px] max-w-[528px] m-auto mt-0 px-[16px]">
                            <img
                                src={item.primary?.img.url}
                                alt={`carousel-image-${index}`}
                                className='w-full '
                            />
                            <div className='flex flex-col gap-[16px]  px-[16px] mt-[16px] mb-[23px]'>
                                <h3 className='text-[18px] font-[700] leading-[24px] text-[#2B2D33]'>
                                    {item.primary?.[`title_${language}`]}
                                </h3>
                                <p className='text-[16px] font-[400] leading-[22px] text-[#8B8B8B]'>
                                    {item.items[0]?.[`info_${language}`]?.length > 100
                                        ? `${item.items[0][`info_${language}`].slice(0, 100)}...`
                                        : item.items[0][`info_${language}`]}
                                </p>
                                <ButtonLInk link='news' text={t('detailsButton')} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop View */}
            <div className='hidden md:flex flex-col md:flex-row justify-between mt-[40px] md:mt-[60px] mb-[60px] gap-[24px]'>
                <div className='w-full md:w-[592px] flex flex-col gap-[32px] bg-[#F5F6FF] overflow-hidden h-[515px] rounded-[16px]'>
                    <img src={document.data.body?.[document.data.body.length - 1]?.primary?.img.url} alt='frame1'
                         className='w-full h-[auto] md:h-[282px]'
                    />
                    <div className='flex flex-col justify-center gap-[16px] max-w-[528px] m-auto mt-0 px-[16px] md:px-0 h-[auto] md:h-[142px]'>
                        <h3 className='text-[18px] font-[700] leading-[24px] text-[#2B2D33]'>
                            {document.data.body?.[document.data.body.length - 1].primary?.[`title_${language}`]}
                        </h3>
                        <p className='text-[16px] font-[400] leading-[22px] text-[#8B8B8B]'>
                            {document.data.body?.[document.data.body.length - 1].items[0]?.[`info_${language}`]?.length > 150 ?
                                `${document.data.body[document.data.body.length - 1].items[0][`info_${language}`].slice(0, 150)}...` :
                                document.data.body[document.data.body.length - 1].items[0][`info_${language}`]}
                        </p>
                        <ButtonLInk link='news' text={t('detailsButton')} />
                    </div>
                </div>

                <div className='w-full md:w-[564px] min-h-[514px]'>
                    <div className='flex flex-col gap-[15px]'>
                        <div className='flex flex-col md:flex-row w-full h-auto md:h-[250px] overflow-hidden rounded-[16px] bg-[#F5F6FF]'>
                            <img
                                src={document.data.body?.[document.data.body.length - 2]?.primary?.img.url}
                                alt='frame2'
                                className='h-[250px] w-[250px] object-cover'
                            />
                            <div className='flex flex-col gap-[16px] max-w-[270px] m-auto py-[22px] px-[16px] md:px-[22px]' style={{ paddingLeft: 0 }}>
                                <h3 className='text-[18px] font-[700] leading-[24px] text-[#2B2D33]'>
                                    {document.data.body?.[document.data.body.length - 2].primary?.[`title_${language}`]}
                                </h3>
                                <p className='text-[16px] font-[400] leading-[22px] text-[#8B8B8B]'>
                                    {document.data.body?.[document.data.body.length - 2].items[0]?.[`info_${language}`]?.length > 50
                                        ? `${document.data.body[document.data.body.length - 2].items[0][`info_${language}`].slice(0, 50)}...`
                                        : document.data.body[document.data.body.length - 2].items[0][`info_${language}`]}
                                </p>
                                <ButtonLInk link='news' text={t('detailsButton')} />
                            </div>
                        </div>
                    </div>

                    <div className='hidden md:flex flex-col gap-[15px] mt-3'>
                        <div className='flex flex-col md:flex-row w-full h-auto md:h-[250px] overflow-hidden rounded-[16px] bg-[#F5F6FF]'>
                            <img
                                src={document.data.body?.[document.data.body.length - 3]?.primary?.img.url}
                                alt='frame3'
                                className='h-[250px] w-[250px] object-cover'
                            />
                            <div className='flex flex-col gap-[16px] max-w-[270px] m-auto py-[22px] px-[16px] md:px-[22px]' style={{ paddingLeft: 0 }}>
                                <h3 className='text-[18px] font-[700] leading-[24px] text-[#2B2D33]'>
                                    {document.data.body?.[document.data.body.length - 3].primary?.[`title_${language}`]}
                                </h3>
                                <p className='text-[16px] font-[400] leading-[22px] text-[#8B8B8B]'>
                                    {document.data.body?.[document.data.body.length - 3]?.items[0]?.[`info_${language}`]?.length > 50
                                        ? `${document.data.body[document.data.body.length - 3]?.items[0][`info_${language}`].slice(0, 50)}...`
                                        : document.data.body[document.data.body.length - 3]?.items[0][`info_${language}`]}
                                </p>
                                <ButtonLInk link='news' text={t('detailsButton')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsHome;
