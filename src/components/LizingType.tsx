import { Link } from "react-router-dom";
import CarImg from "../../public/images/auto.png";
import CombineImg from "../../public/images/gs2124 1.png";
import { useTranslation } from "react-i18next";

export default function LizingType() {
  const { t } = useTranslation()
  return (
    <div className="py-[60px]">
      <div className="flex gap-x-6 max-md:flex-col">
        <div className="flex max-md:flex-col max-md:text-center max-md:p-6 items-center px-6 bg-[#F8F8F8] rounded-[24px]">
          <div className="flex-1">
            <h4 className="font-bold text-[20px]">{t('gosLizingType.lizingGos')}</h4>
            <span className="text-[#8B8B8B] text-[16px]">
              {t('gosLizingType.avtoLizing')}
              <Link to={"/products"} className="text-[#122247] font-bold">
                {t('gosLizingType.favorable')}
              </Link>{" "}
            </span>
          </div>
          <div className="flex-1">
            <img src={CombineImg} className="h-[200px]" />
          </div>
        </div>
        <div className="flex max-md:flex-col max-md:text-center max-md:p-6 items-center px-6 bg-[#F8F8F8] rounded-[24px] max-md:mt-[28px]">
          <div className="flex-1">
            <h4 className="font-bold text-[20px]">{t('gosLizingType.lizingBisnes')}</h4>
            <span className="text-[#8B8B8B] text-[16px]">
              {t('gosLizingType.carLizing')}
              <Link to={"/products/business-leasing"} className="text-[#122247] font-bold">
                {t('gosLizingType.favorable')}
              </Link>{" "}
            </span>
          </div>
          <div className="flex-1">
            <img src={CarImg} className="h-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
