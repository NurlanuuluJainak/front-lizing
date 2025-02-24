import { NavLink, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

type RouteType = {
  path: string;
  element: React.ReactNode;
  text: string;
};

interface Props {
  title: string;
  routes: RouteType[];
}

export default function Layout(props: Props) {
  const { t } = useTranslation('');

  const isActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "font-bold" : "font-normal";
  };

  return (
    <div className="container mt-2 max-md:max-w-[343px] mx-auto">
      <h2 className="text-[#122247] text-[40px] font-bold">{t(props.title)}</h2>
      <div className="mb-5 flex max-md:flex-col gap-5 mx-5 md:mt-[43px] gap-x-[64px]">
        <ul className="flex flex-col text-[16px] font-[400] leading-[20px] w-[250px]">
          {props.routes.map((route) => {
            const path = route.path.replace("*", "");
            return (
              <li className="mb-4" key={route.path}>
                <NavLink end className={isActive} to={path}>
                  {t(route.text)}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="" style={{ width: "100%" }}>
          <Routes>
            {props.routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </div>
    </div>
  );
}
