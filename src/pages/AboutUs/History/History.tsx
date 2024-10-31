import {usePrismicDocumentByUID} from "@prismicio/react";
import {useLanguage} from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";

const History = () => {
  const [document] = usePrismicDocumentByUID('for_clients', 'history');
  const { language } = useLanguage();

  if (!document) {
    return <div>Loading...</div>;
  }

    console.log(document);

    return (
      <div className='mb-[100px]'>
        <p className="text-lg md:text-xl xl:text-2xl font-bold mb-4">{document.data.body[0].primary[`subtitle_${language}`]}</p>
        <ul className="list-disc ">
          {document.data.body[0].items.map((item: any) => (
              <li className="font-medium text-xs md:text-sm xl:text-base" key={item.id}>{item[`item_${language}`]}</li>
          ))}
        </ul>
        <p className="text-lg md:text-xl xl:text-2xl font-bold mb-4 mt-5">{document.data.body[0].primary[`subtitle_${language}`]}</p>
        <p className="text-sm md:text-base xl:text-xl">{document.data.body[0].primary[`text_${language}`]}</p>
      </div>
  );
};

export default History;
