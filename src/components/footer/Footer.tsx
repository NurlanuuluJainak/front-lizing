import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import  Logo from "../../../public/icon/logo.svg"
import Instagram from "../../../public/icon/instagram.svg"
import Telegram from "../../../public/icon/telegram.svg"
import Facebook from "../../../public/icon/facebook.svg"
export default function Footer() {
    const {t} = useTranslation();

    return (
        <div className="mt-[10px] py-[58px] bg-dark_blue">
            <div className="max-w-[1100px] mx-auto">
                <div className="flex max-md:flex-col items-center">
                    <div className="flex gap-1 max-md:flex-col items-stretch">
                        <img src={Logo} alt="logo" className="h-full"/>
                        <h4 className="w-[164px] text-white">
                            {t('footer.companyName')}
                        </h4>
                    </div>
                    <div className="flex  max-md:flex-col max-md:mt-[24px] max-md:items-center text-white">
                        <a
                            href="tel:+996700497413"
                            className="decoration-none flex gap-1 hover:text-gray transition-colors duration-300 group"
                        >


                            <span          className="inline-block max-md:text-[20px] md:border-r md:border-[#d9d9d921] md:pr-4 md:mr-4"
                            >
    +996 700 49 74 13
  </span>
                        </a>



                        <span
                            className="inline-block max-md:text-[20px] md:border-r md:border-[#d9d9d921] md:pr-4 md:mr-4">
                    <a href="mailto:info@slc.kg" target="_blank"
                       className="decoration-none hover:text-gray transition-colors duration-300">
              info@slc.kg
            </a>
            </span>
                        <div className="md:hidden border border-[#d9d9d921] max-md:w-[24px] max-md:my-6"/>

                        <span
                            className="inline-block max-md:text-[20px] md:border-r md:border-[#d9d9d921] md:pr-4 md:mr-4">
              {t('footer.address')}
            </span>

                        <span className="inline-block max-md:text-[20px]">
              {t('footer.workingHours')}
            </span>
                    </div>
                </div>
                <hr className="text-white/25 my-6"/>
                <div className="flex max-md:flex-col items-center">
          <span className="text-white/75 max-md:text-center">
            {t('footer.copyright')}
          </span>
                    <div className="flex max-md:justify-center gap-x-5 md:ml-auto max-md:mt-6">

                        <Link to={"/"}>
                            <img src={Instagram} className="w-5 h-5"/>
                        </Link>
                        <Link to={"/"}>
                            <img src={Telegram} className="w-5 h-5"/>
                        </Link>
                        <Link to={"/"}>
                            <img src={Facebook} className="w-5 h-5"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
