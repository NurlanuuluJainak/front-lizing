import { usePrismicDocumentByUID } from "@prismicio/react";
import {useLanguage} from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";
import Loading from "../../../components/UI/loading.tsx";

const Career = () => {
    const [document] = usePrismicDocumentByUID('management', 'career');
    const { language } = useLanguage();

    if (!document) {
        return <Loading/>;
    }

    console.log(document);

    return (
      <div className='mb-[100px]'>

          <div className="mb-6">
              <div className="join join-vertical " style={{width: '100%'}}>
                  {document.data.body.map((item: any, index: number) => (
                      <div key={item.id} className="collapse collapse-arrow join-item">
                          <input type="radio" name="my-accordion-4" defaultChecked={index === 0}/>
                              <p className="collapse-title font-bold text-base mb-5 sm:text-xl md:text-2xl underline">
                                  {item.primary[`title_${language}`]}
                              </p>
                          <div className="collapse-content">
                                  {item.items.map((subItem: any, index: number) => (
                                      subItem && (
                                          <div key={index}
                                              className="font-medium text-base mb-5 sm:text-xl md:text-[22px]">
                                              <p>{subItem[`subtitle_${language}`]}</p>
                                              <p
                                                  className="text-base mb-5 sm:text-xl md:text-[20px]"
                                                  dangerouslySetInnerHTML={{
                                                      __html: subItem[`text_${language}`]
                                                          ? subItem[`text_${language}`].replace(/\n\n/g, '<br />').replace(/\n/g, '<br />')
                                                          : '',
                                                  }}
                                              />

                                          </div>
                                      )
                                  ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    );
};

export default Career;
