import { PortfolioList } from "../../components/portfolio/PortfolioList";
import styles from "./styles/tailwind.css";


export const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="max-w-full	">
        <img src="./images/titlepage.png" alt="封面"/>
         
        <p className="absolute bg-black bg-opacity-30 text-white font-sans font-normal 
        2xl:max-w-2xl 2xl:max-h-48  2xl:text-5xl  2xl:left-48  2xl:top-80 2xl:p-5
        xl:max-w-xl xl:max-h-48 xl:text-4xl xl:left-40 xl:top-32 xl:p-5
        lg:max-w-lg lg:max-h-40 lg:text-xl lg:left-28 lg:top-32 lg:p-5
        md:max-w-md md:max-h-36 md:text-md md:left-20 md:top-16 md:p-5
        sm:max-w-xs sm:max-h-16 sm:text-xs sm:left-4 sm:top-24  sm:p-2
        ">
          I am a front-end developer,<br />
          Visual designer and foody<br />
          from Tainan, Taiwan.</p>
      </div>
      </div>
      <div className="m-30">
      <PortfolioList />
      </div>
    </div>
  )
}

