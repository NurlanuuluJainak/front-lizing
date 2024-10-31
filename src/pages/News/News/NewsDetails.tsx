import {Link, useParams} from "react-router-dom";
import  Back from '../../../../public/icon/back.svg'
import {usePrismicDocumentByUID} from "@prismicio/react";
import {useLanguage} from "../../../components/LanguageSwitcher/LanguageContextProps.tsx";

export default function NewsDetails() {
  const { id } = useParams();
  const [document] = usePrismicDocumentByUID('for_clients', 'news');
  const { language } = useLanguage();

  if (!document) {
    return <div>Loading...</div>;
  }

  const news = document.data.body.find((item: any) => item.id === id);

  if (!news) {
    return <div>Новость не существует</div>;
  }

  return (
    <div className=" mb-[100px] ">
      <div className=' flex flex-col gap-[30px] mb-[100px] '>
        <h3 className='text-[20px] font-[700] leading-[26px]'>{news.primary[`title_${language}`]}</h3>
        <p className='text-[16px] font-[500] leading-[20px] text-gray'>{news.primary.date}</p>
        <div className='flex flex-col gap-[16px] tex-[16px] font-[500] leading-[22px]'>
          {news.items.map((item: any) => (
              <p>
                {item[`info_${language}`]}
              </p>
          ))}
        </div>
        <Link
            className='flex gap-2.5 text-[16px] font-[500] leading-[20px] text-blue'
            to={'/news'}
        >
          <img src={Back} alt='back'/>
          Перейти к другим новостям
        </Link>
      </div>
    </div>
  )
}
