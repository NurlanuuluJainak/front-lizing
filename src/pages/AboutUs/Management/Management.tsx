import {usePrismicDocumentByUID} from "@prismicio/react";
import {useLanguage} from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";

const Management = () => {
  const [document] = usePrismicDocumentByUID('management', 'managementpage');
  const { language } = useLanguage();

  if (!document) {
      return <div>Loading...</div>;
  }
    console.log(document);
    return (
    <div className='mb-[100px'>

      <div className="flex flex-wrap justify-start gap-8">
          {document.data.body[0].items.map((item: any) => (
              <div className="w-full sm:w-5/12 lg:w-64 bg-gray-200 p-4" key={item.id}>
                  <img
                      style={{width: "100%", height: "auto", borderRadius: '8px'}}
                      alt={item.img.alt}
                      src={item.img.url}
                  />
                  <div>
                      <p className="mt-6 mb-2.5 font-bold text-base sm:text-xl lg:text-2xl">
                          {item.name[0].text}
                      </p>
                      <p className="font-bold text-xs sm:text-sm lg:text-base">
                          {item[`info_${language}`]}
                      </p>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

export default Management;
