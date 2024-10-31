import { useTranslation } from "react-i18next";
import {usePrismicDocumentByUID} from "@prismicio/react";
import {useLanguage} from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";

export default function Insurance() {
  const [document] = usePrismicDocumentByUID('for_clients', 'insurance');
  const {t} = useTranslation()
  const { language } = useLanguage();

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-[100px]">
      <div className="mb-[30px]">
        <h1 className="text-center text-[32px] font-[700] leading-[41px] md:text-left">
          {t('routes.insurance')}
        </h1>
      </div>
      <div className='flex flex-col gap-4'>
        {document.data.body.map((item: any) => (
            <div>
              {item.primary[`subtitle_${language}`] && <h2 className="product-h3">{item.primary[`subtitle_${language}`]}</h2>}
              {item.primary[`text_${language}`] && <p className='product-text'>{item.primary[`text_${language}`]}</p>}
              {item.items.length > 0 && (
                  <div className='ml-4'>
                    {item.items.map((subItem: any, index: number) => (
                        <p key={index}>- {subItem[`item_${language}`]}</p>
                    ))}
                  </div>
              )}
            </div>
        ))}
      </div>
    </div>
  );
}
