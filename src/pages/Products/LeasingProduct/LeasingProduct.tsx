import {usePrismicDocumentByUID} from "@prismicio/react";
import {useLanguage} from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";

export default function LeasingProduct() {
    const [document] = usePrismicDocumentByUID('products', 'product_page');
    const { language } = useLanguage();

    if (!document) {
        return (
            <div>Loading...</div>
        )
    }


    return (
        <div className="mb-[100px] ">
            <div className='mb-[30px]'>
                <h1 className='text-center text-[32px] font-[700] leading-[41px] md:text-left'>{document.data.body[1].primary[`title_${language}`]}</h1>
            </div>
            <div className='flex flex-col gap-4'>
                {document.data.body[1].items.map((item: any, index: number) => (
                    <div key={index}>
                        <h3 className='product-h3'>{item[`subtitle_${language}`]}</h3>
                        <p className='product-text'
                           dangerouslySetInnerHTML={{
                               __html: item[`text_${language}`] ? item[`text_${language}`].replace(/\n\n/g, '<br /><br />').replace(/\n/g, '<br />') : ''                           }}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
