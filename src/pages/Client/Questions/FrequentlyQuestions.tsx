import { Routes, Route, NavLink } from "react-router-dom";
import { FrequentlyQuestionsMicroRoutes } from "../../../micro-routes.tsx";
import { useTranslation } from "react-i18next";

export default function FrequentlyQuestions() {
  const { t } = useTranslation();

  return (
    <div className="mb-[100px]">
      <h1 className='text-center text-[32px] font-[700] leading-[41px] mb-[30px] md:text-left max-md:text-[24px]'>
        {t('routes.frequentlyQuestions')}
      </h1>
      <div className="flex gap-[71px] max-md:flex-col ">
        <div className="flex flex-col gap-[8px]">
          {FrequentlyQuestionsMicroRoutes.map((route) => (
            <li className="flex flex-col gap-[8px]" >
              <NavLink
                to={route.path}
                end
                className={({ isActive }) =>
                  isActive ? 'font-[500] bg-gray_CD rounded-[8px] p-2' : 'font-[500] text-gray'
                }>
                {t(route.text)}
              </NavLink>
            </li>
          ))}
        </div>
        <Routes>
          {FrequentlyQuestionsMicroRoutes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}
