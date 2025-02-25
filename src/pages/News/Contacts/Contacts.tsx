import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { t } = useTranslation();
  return (
    <div className="mb-[100px]">
      <div className="mb-[30px]">
        <h1 className="text-center text-[32px] font-[700] leading-[41px] md:text-left">
          {t('feedback')}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[40px] md:gap-[80px]">
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[16px] font-[500] leading-[25px] text-[#122247]">
            {t('contacts.officeAddress')}
          </h3>
          <p className="text-[16px] font-[400] leading-[22px]">
            {t('contacts.officeLocation')}
          </p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[16px] font-[500] leading-[25px] text-[#122247]">
            {t('contacts.phoneNumber')}
          </h3>
          <a href="tel:+996700497413" className="decoration-none hover:text-gray transition-colors duration-300">
            <p className="text-[16px] font-[400] leading-[22px]">+996 557 755 711</p>
          </a>

        </div>
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[16px] font-[500] leading-[25px] text-[#122247]">
            {t('contacts.workingHours')}
          </h3>
          <p className="text-[16px] font-[400] leading-[22px]">
            {t('contacts.workingDays')}
          </p>
          <p className="text-[16px] font-[400] leading-[22px]">9:00 - 18:00</p>
        </div>
        <div className="flex flex-col gap-[12px]">
          <h3 className="text-[16px] font-[500] leading-[25px] text-[#122247]">
            {t('contacts.email')}
          </h3>
          <a href="mailto:info@slc.kg" target="_blank" className="decoration-none hover:text-gray transition-colors duration-300">
            info@slc.kg
          </a>

        </div>
      </div>
    </div>
  );
}
