import { useTranslation } from "react-i18next";
import ButtonLInk from "../../../components/UI/ButtonLInk.tsx";
import { usePrismicDocumentByUID } from "@prismicio/react";
import { useLanguage } from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";
import Loading from "../../../components/UI/loading.tsx";

export default function AllNews() {
    const [document] = usePrismicDocumentByUID('for_clients', 'news');
    const { language } = useLanguage();
    const { t } = useTranslation()

    if (!document) {
        return <Loading />;
    }

    return (
        <div className="mb-[100px]">
            <div className='mb-[30px]'>
                <h1 className='text-center text-[32px] font-[700] leading-[41px] md:text-left'>{t("routes.allNews")}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-7'>
                {document.data.body.map((news: any) => (
                    <div key={news.id} className='bg-gray_F8  overflow-hidden rounded-[16px]'>
                        <div className="w-full h-[300px]">
                            <img src={news.primary.img.url} alt={news.primary.img.alt} className="w-full h-full object-cover" />
                        </div>
                        <div className='min-w-[370px] flex flex-col gap-[16px] py-[24px] px-[24px] max-md:min-w-[320px]'>
                            <p className='text-[16px] font-[500] leading-[20px] text-gray'>{news.primary.date}</p>
                            <h3 className='text-[18px] font-[700] leading-[23px]'>{news.primary[`title_${language}`]}</h3>
                            <p className='text-[16px] font-[400] leading-[22px] text-gray'>{news.items[0][`info_${language}`]}</p>
                            <div className='mt-[60px]'>
                                <ButtonLInk link={news.id} text={t('detailsButton')} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
