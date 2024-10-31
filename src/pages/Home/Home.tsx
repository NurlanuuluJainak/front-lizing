import Banner from "../../components/Banner.tsx";
import CompanyIndicators from "../../components/CompanyIndicators.tsx";
import NewsHome from "../News/News/NewsHome.tsx";
import CalculatorLizing from "../Client/Calculator/CalculatorLizing.tsx";
import LizingType from "../../components/LizingType.tsx";


const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='max-w-[343px]  md:max-w-[1180px] mx-auto px-20px'>
        <CompanyIndicators/>
        <NewsHome/>
        <CalculatorLizing/>
        <LizingType/>
      </div>
    </div>
  )
}

export default Home
