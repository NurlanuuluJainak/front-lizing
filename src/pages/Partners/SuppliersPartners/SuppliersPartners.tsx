import {usePrismicDocumentByUID} from "@prismicio/react";
import { useTranslation } from "react-i18next";
import Loading from "../../../components/UI/loading";

const SuppliersPartners = () => {
    const [document] = usePrismicDocumentByUID('for_clients', 'partners');
    const {t} = useTranslation()
    console.log(document);

    if (!document) {
        return (
          <Loading/>
        )
    }

    return (
        <div className='mb-[100px]'>
            <p className="mb-7 text-2xl md:text-3xl lg:text-4xl">{t('routes.suppliersPartners')}</p>
            <div className="flex justify-between flex-wrap">
                {document.data.body[0].items.map((item: any) => (
                    <img key={item.id} src={item.logo.url} alt={item.logo.alt} className="mb-4"/>
                ))}
            </div>
        </div>
    );
};

export default SuppliersPartners;
