import { useTranslation } from "react-i18next"
import {usePrismicDocumentByUID} from "@prismicio/react";
import {useLanguage} from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";

export default function LeasingTerms() {
  const {t} = useTranslation();
  const [document] = usePrismicDocumentByUID('for_clients', 'leasing_terms');
    const { language } = useLanguage();

    if (!document) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mb-[100px] ">
            <div className='mb-[30px]'>
                <h1 className='text-center text-[32px] font-[700] leading-[41px] md:text-left'>{t('routes.leasingTerms')}</h1>
            </div>
            <div className='flex flex-col gap-4 product-text'>
                {document.data.body.map((item: any) => (
                    <p>
                        {item.primary[`subtitle_${language}`] && <span className='product-h3'> {item.primary[`subtitle_${language}`]}: </span>}
                        {item.primary[`text_${language}`]}
                    </p>
                ))}
            </div>
        </div>
    )
}
