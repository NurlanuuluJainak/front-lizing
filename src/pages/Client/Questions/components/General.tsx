import {usePrismicDocumentByUID} from "@prismicio/react";
import {useLanguage} from "../../../../components/LanguageSwitcher/LanguageContextProps.tsx";
import Loading from "../../../../components/UI/loading.tsx";

export default function General() {
  const [document] = usePrismicDocumentByUID('for_clients', 'questions');
  const { language } = useLanguage();

  if (!document) {
      return <Loading/>;
  }

  return (
    <div >
        <h3 className='text-[20px] font-[600] leading-[30px] mb-[20px]'>{document.data.body[0].primary[`title_${language}`]}</h3>
        <div>
            <div className="join join-vertical ">
                {document.data.body[0].items.map((item: any, index: number) => (
              <div key={index} className="collapse collapse-arrow join-item border-base-300 border">
                  <input type="radio" name="my-accordion-4" defaultChecked={index === 0}/>
                  <div className="collapse-title text-[18px] font-[500] leading-[28px]">
                  {item[`question_${language}`]}
                  </div>
                  <div className="collapse-content">
                      <p className="text-[16px] font-[400] leading-[24px]">
                          {item[`answer_${language}`]}
                      </p>
                  </div>
              </div>
          ))}
          </div>
      </div>
    </div>
  );
}
