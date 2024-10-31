// import { Link } from 'react-router-dom';
import {usePrismicDocumentByUID} from "@prismicio/react";
import { useTranslation } from 'react-i18next';
import {useLanguage} from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";

export default function SuppliersRegister() {
    const [document] = usePrismicDocumentByUID('for_clients', 'suppliers');
    const {t} = useTranslation()
    const { language } = useLanguage();

    if (!document) {
        return <div>Loading...</div>;
    }
    return (
        <div className=" mb-[100px]">
            <div className="mb-[30px]">
                <h1 className="text-center text-[32px] font-[700] leading-[41px] md:text-left">
                    {t("routes.suppliersRegister")}
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-7">
                {document.data.body.map((company: any) => (
                    <div key={company.id} className="bg-gray_F8 shadow-md py-[24px] px-[24px]  rounded-[16px]">
                        <h1>{company.primary[`title_${language}`]}</h1>
                        <img src={company.primary.logo.url} alt={company.primary.logo.alt}/>
                        <p className="text-[14px] font-[400] leading-[20px] ">
                            {company.primary[`info_${language}`]}
                        </p>
                        <a href={company.primary.link.url} className="text-[14px] font-[500] leading-[23px]">
                            {company.primary.link.url}
                        </a>
                    </div>

                ))}
            </div>
        </div>
    );
}
