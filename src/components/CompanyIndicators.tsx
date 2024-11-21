import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {usePrismicDocumentByUID} from "@prismicio/react";
import Car from "../../public/icon/car.svg"
import Briefcase  from "../../public/icon/briefcase.svg"
import Jobs from "../../public/icon/jobs.svg"
import Partners from "../../public/icon/partners.svg"
import Loading from './UI/loading';

const CompanyIndicators = () => {
  const { t } = useTranslation();
  const [document] = usePrismicDocumentByUID('management', 'home');

  if (!document) {
    return <Loading/>;
  }

  const result = document.data.body.find((item: any) =>
      item.primary.title &&
      item.primary.title[0]?.text === "Показатели компании"
  );

  return (
    <div className="mt-[120px] mb-[120px] ">
      <div className="flex flex-col gap-[40px] min-h-[225px]">
        <h1 className="text-[32px] md:text-[40px] font-[700] leading-[48px] text-blue text-center md:text-left">
          {t('companyIndicators.title')}
        </h1>

        <div className="bg-[#F5F6FF]  rounded-[15px] py-[12px] px-[24px] flex flex-col md:flex-row justify-between gap-[20px] md:gap-0">
          <div className="flex flex-col gap-[12px] md:gap-[32px] md:w-[250px]">
            <div className="flex gap-[16px] items-center">
              <img src={Car} alt="car" />
              <p className="text-[36px] md:text-[36px] font-[600] leading-[54px]">
                {result.items[0]?.num}
              </p>
            </div>
            <p className="text-[18px] md:text-[18px] font-[600] leading-[27px] text-blue">
              {t('companyIndicators.units')}
            </p>
          </div>

          <div className="hidden md:block h-[100px] w-[1px] bg-[#EAEAEA]"></div>
          <div className="block h-[1px] w-[100%] bg-[#EAEAEA] md:hidden"></div>

          <div className="flex flex-col gap-[12px] md:gap-[32px]">
            <div className="flex gap-[16px] items-center">
              <img src={Briefcase} alt="portfolio" />
              <p className="text-[36px] md:text-[36px] font-[600] leading-[54px]">
                {result.items[1]?.num}
              </p>
            </div>
            <p className="text-[18px] md:text-[18px] font-[600] leading-[27px] text-blue">
              {t('companyIndicators.portfolio')}
            </p>
          </div>

          <div className="hidden md:block h-[100px] w-[1px] bg-[#EAEAEA]"></div>
          <div className="block h-[1px] w-[100%] bg-[#EAEAEA] md:hidden"></div>

          <div className="flex flex-col gap-[12px] md:gap-[32px]">
            <div className="flex gap-[16px] items-center">
              <img src={Jobs} alt="jobs" />
              <p className="text-[36px] md:text-[36px] font-[600] leading-[54px]">
                {result.items[2]?.num}
              </p>
            </div>
            <p className="text-[18px] md:text-[18px] font-[600] leading-[27px] text-blue">
              {t('companyIndicators.newJobs')}
            </p>
          </div>

          <div className="hidden md:block h-[100px] w-[1px] bg-[#EAEAEA]"></div>
          <div className="block h-[1px] w-[100%] bg-[#EAEAEA] md:hidden"></div>

          <div className="flex flex-col gap-[12px] md:gap-[32px]">
            <div className="flex gap-[16px] items-center">
              <img src={Partners} alt="partners" />
              <p className="text-[36px] md:text-[36px] font-[600] leading-[54px]">
                {result.items[3]?.num}
              </p>
            </div>
            <p className="text-[18px] md:text-[18px] font-[600] leading-[27px] text-blue">
              {t('companyIndicators.partners')}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-[20px] md:mt-0">
            <Link className="px-[36px] py-[16px] bg-blue rounded-[8px] text-[18px] md:text-[24px] font-[700] leading-[34px] text-[white]" to={'/clients/submit-application'}>
              {' '}
              {t('companyIndicators.submitApplication')}
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyIndicators;
