import {usePrismicDocumentByUID} from "@prismicio/react";
import {useLanguage} from "../../../../components/LanguageSwitcher/LanguageContextProps.tsx";

export default function Payment(){
  const [document] = usePrismicDocumentByUID('for_clients', 'questions');
  const { language } = useLanguage();

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
      <div >
        <h3 className='text-[20px] font-[600] leading-[30px] mb-[20px]'>{document.data.body[2].primary[`title_${language}`]}</h3>
        <div>
          <div className="join join-vertical ">
          {document.data.body[2].items.map((item: any, index: number) => (
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
  // const {t} = useTranslation()
  // return (
  //   <div>
  //     <h3 className='text-[20px] font-[600] leading-[30px] mb-[20px]'>{t('routes.payment')}</h3>
  //
  //     <div className="w-full max-w-lg mx-auto p-8">
  //       <div className="bg-gray_CD rounded-lg shadow-lg p-6">
  //         <h2 className="text-lg font-medium mb-6">Payment Information</h2>
  //         <form>
  //           <div className="grid grid-cols-2 gap-6">
  //             <div className="col-span-2 sm:col-span-1">
  //               <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-2">Card
  //                 Number</label>
  //               <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000"
  //                      className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
  //             </div>
  //             <div className="col-span-2 sm:col-span-1">
  //               <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700 mb-2">Expiration
  //                 Date</label>
  //               <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY"
  //                      className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
  //             </div>
  //             <div className="col-span-2 sm:col-span-1">
  //               <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
  //               <input type="text" name="cvv" id="cvv" placeholder="000"
  //                      className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
  //             </div>
  //             <div className="col-span-2 sm:col-span-1">
  //               <label htmlFor="card-holder" className="block text-sm font-medium text-gray-700 mb-2">Card
  //                 Holder</label>
  //               <input type="text" name="card-holder" id="card-holder" placeholder="Full Name"
  //                      className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"/>
  //             </div>
  //           </div>
  //           <div className="mt-8">
  //             <button type="submit"
  //                     className="w-full bg-green-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg focus:outline-none">Submit
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // )
}
