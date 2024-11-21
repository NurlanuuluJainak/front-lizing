import {usePrismicDocumentByUID} from "@prismicio/react";
import {useLanguage} from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";
import Loading from "../../../components/UI/loading.tsx";

const AboutCompany = () => {
    const [document] = usePrismicDocumentByUID('for_clients', 'about_us');
    const { language } = useLanguage();

    if (!document) {
        return <Loading/>;
    }

    return (
        <div className='mb-[100px]'>
            <p className="text-lg md:text-xl xl:text-2xl font-bold mb-4">{document.data.body[0].primary[`subtitle_${language}`]}</p>
            {document.data.body[0].items.map((item: any) => (
                <p className="text-sm md:text-base xl:text-xl">{item[`item_${language}`]}</p>
            ))}
        </div>
    );

};

export default AboutCompany;
