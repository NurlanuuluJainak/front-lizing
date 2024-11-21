import {usePrismicDocumentByUID} from "@prismicio/react";
import {useLanguage} from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";
import Loading from "../../../components/UI/loading.tsx";

const Finance = () => {
    const { language } = useLanguage();
    const [document] = usePrismicDocumentByUID('pdf_files', 'pdf_files_pages');

  if (!document) {
    return <Loading/>;
  }

  return (
              <div>
                  <div className="join join-vertical " style={{width:'100%'}}>
                      {document.data.body[0].items.map((item: any, index: number) => (
                          <div key={index} className="collapse collapse-arrow join-item border-base-300 border">
                              <input type="radio" name="my-accordion-4" defaultChecked={index === 0}/>
                              <div className="collapse-title text-[16px] font-medium leading-[28px]">
                                  {item[`title_${language}`]}
                              </div>
                              <div className="collapse-content">
                                  <a href={item.link.url} target="_blank"
                                     rel="noopener noreferrer"
                                     style={{display: "flex"}}>
                                      <img src={item.icon.url}
                                           alt={item[`title_${language}`]}/>
                                      <p className="font-medium text-base ms-3">{item[`title_${language}`]}</p>
                                  </a>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
  );
};

export default Finance;
