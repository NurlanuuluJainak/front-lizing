import { usePrismicDocumentByUID } from "@prismicio/react";
import { useTranslation } from "react-i18next";
import Loading from "../../../components/UI/loading";
import {useLanguage} from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";

const SuppliersPartners = () => {
    const [document] = usePrismicDocumentByUID('for_clients', 'suppliers');
    const { t } = useTranslation();
    const { language } = useLanguage();

    if (!document) {
        return (
            <Loading />
        )
    }
    console.log(document);

    return (
        <div className='mb-[100px]'>
            <p className="mb-7 text-2xl md:text-3xl lg:text-4xl">{t('routes.suppliersPartners')}</p>
            <div className="flex justify-between flex-wrap">
                {document.data.body.map((item: any) => (
                    <>
                        <div className="w-[430px] mb-4 bg-gray_F8 p-8 rounded-lg">
                            <p>{item.primary[`title_${language}`]}</p>
                            <img style={{margin: '10px 0'}} key={item.id} src={item.primary.logo.url} alt="img"/>
                            <p>{item.primary[`info_${language}`]}</p>
                            <a href={item.primary.link.url}>{item.primary.link.url}</a>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default SuppliersPartners;
