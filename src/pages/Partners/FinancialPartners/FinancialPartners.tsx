import {usePrismicDocumentByUID} from "@prismicio/react";
import { useTranslation } from "react-i18next";
import Loading from "../../../components/UI/loading";

const FinancialPartners = () => {
  const [document] = usePrismicDocumentByUID('for_clients', 'partners');
  const {t} = useTranslation()

  if (!document) {
    return (
        <Loading/>
    )
  }

  return (
      <div className='mb-[100px]'>
          <p className="mb-7 text-2xl md:text-3xl lg:text-4xl">{t('routes.financialPartners')}</p>
          <div className="flex justify-between flex-wrap">
              {document.data.body[1].items.map((item: any) => (
                  <div  className="w-[430px] mb-4 bg-gray_F8 p-8 rounded-lg">
                  <img key={item.id} src={item.logo.url} alt={item.logo.alt} className="mb-4"/>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default FinancialPartners;
