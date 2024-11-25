import Home from './pages/Home/Home.tsx';
import {Route, Routes} from 'react-router-dom';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';
import Layout from './layout/Layout.tsx';
import {
	AboutMicroRoutes,
	ClientsMicroRoutes,
	ContactsMicroRoutes,
	NewsMicroRoutes,
	PartnersMicroRoutes,
	ProductsMicroRoutes
} from './micro-routes.tsx';
import {LanguageProvider} from "./components/LanguageSwitcher/LanguageContextProps.tsx";

const routes = [
	{path: '/', element: <Home/>},
	{path: '/about-us/*', element: <Layout title="about" routes={AboutMicroRoutes}/>},
	{path: '/clients/*', element: <Layout title="clients" routes={ClientsMicroRoutes}/>},
	{path: '/partners/*', element: <Layout title="partners" routes={PartnersMicroRoutes}/>},
	{path: '/news/*', element: <Layout title="news" routes={NewsMicroRoutes}/>},
	{path: '/products/*', element: <Layout title="products" routes={ProductsMicroRoutes}/>},
	{path: "/contact/*", element: <Layout title="feedback" routes={ContactsMicroRoutes}/>},
];

const App = () => {
	return (
		<>
			<div className="min-h-screen flex flex-col">
				<LanguageProvider>
					<Header/>
					<main className="flex-1">
						<Routes>
							{routes.map((route, index: number) => (
								<Route key={index} path={route.path} element={route.element}/>
							))}
						</Routes>
					</main>
					<Footer/>
				</LanguageProvider>
			</div>
		</>
	);
};

export default App;
