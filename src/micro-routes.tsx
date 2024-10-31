import AboutCompany from "./pages/AboutUs/AboutCompany/AboutCompany.tsx";
import Management from "./pages/AboutUs/Management/Management.tsx";
import History from "./pages/AboutUs/History/History.tsx";
import Finance from "./pages/AboutUs/Finance/Finance.tsx";
import Corruption from "./pages/AboutUs/Corruption/Corruption.tsx";
import Career from "./pages/AboutUs/Career/Career.tsx";
import Documents from "./pages/AboutUs/Documents/Documents.tsx";
import LeasingTerms from "./pages/Client/LeasingTerms/LeasingTerms.tsx";
import LeasingCalculator from "./pages/Client/Calculator/LeasingCalculator.tsx";
import SuppliersRegister from "./pages/Client/SuppliersRegister/SuppliersRegister.tsx";
import Insurance from "./pages/Client/Insurance/Insurance.tsx";
import FrequentlyQuestions from "./pages/Client/Questions/FrequentlyQuestions.tsx";
import SuppliersPartners from "./pages/Partners/SuppliersPartners/SuppliersPartners.tsx";
import FinancialPartners from "./pages/Partners/FinancialPartners/FinancialPartners.tsx";
import InternationalPartners from "./pages/Partners/InternationalPartners/InternationalPartners.tsx";
import AllNews from "./pages/News/News/AllNews.tsx";
import Contacts from "./pages/News/Contacts/Contacts.tsx";
import NewsDetails from "./pages/News/News/NewsDetails.tsx";
import LeasingProduct from "./pages/Products/LeasingProduct/LeasingProduct.tsx";
import BusinessLeasing from "./pages/Products/BusinessLeasing/BusinessLeasing.tsx";
import General from "./pages/Client/Questions/components/General.tsx";
import Deposits from "./pages/Client/Questions/components/Deposits.tsx";
import Payment from "./pages/Client/Questions/components/Payment.tsx";
import Support from "./pages/Client/Questions/components/Support.tsx";
import SubmitApplication from "./pages/Client/SubmitApplication.tsx";

export const AboutMicroRoutes = [
  { path: "", element: <AboutCompany />, text: "routes.aboutCompany" },
  { path: "history", element: <History />, text: "routes.history" },
  { path: "management", element: <Management />, text: "routes.management" },
  { path: "finance", element: <Finance />, text: "routes.finance" },
  { path: "corruption", element: <Corruption />, text: "routes.corruption" },
  { path: "career", element: <Career />, text: "routes.career" },
  { path: "documents", element: <Documents />, text: "routes.documents" },
];

export const ClientsMicroRoutes = [
  { path: "", element: <LeasingTerms />, text: "routes.leasingTerms" },
  { path: "submit-application", element: <SubmitApplication />, text: "routes.submitApplication" },
  { path: "leasing-calculator", element: <LeasingCalculator />, text: "routes.leasingCalculator" },
  { path: "suppl-register", element: <SuppliersRegister />, text: "routes.suppliersRegister" },
  { path: "insurance", element: <Insurance />, text: "routes.insurance" },
  { path: "freq-questions/*", element: <FrequentlyQuestions />, text: "routes.frequentlyQuestions" },
];

export const PartnersMicroRoutes = [
  { path: "", element: <SuppliersPartners />, text: "routes.suppliersPartners" },
  { path: "financial-partners", element: <FinancialPartners />, text: "routes.financialPartners" },
  { path: "international-partners", element: <InternationalPartners />, text: "routes.internationalPartners" },
];

export const NewsMicroRoutes = [
  { path: "", element: <AllNews />, text: "routes.allNews" },
  { path: "contacts", element: <Contacts />, text: "routes.contacts" },
  { path: "/:id", element: <NewsDetails />, text: "" }, 
];

export const ProductsMicroRoutes = [
  { path: "", element: <LeasingProduct />, text: "routes.leasingProduct" },
  { path: "business-leasing", element: <BusinessLeasing />, text: "routes.businessLeasing" },
];

export const FrequentlyQuestionsMicroRoutes = [
  { path: "", element: <General />, text: "routes.general" },
  { path: "deposits", element: <Deposits />, text: "routes.deposits" },
  { path: "payment", element: <Payment />, text: "routes.payment" },
  { path: "support", element: <Support />, text: "routes.support" },
];
