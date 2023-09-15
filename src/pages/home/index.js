import { PortfolioList } from "../../components/Portfolio/portfolioList";


export const Home = () => {
  return (
    <div className="container">
      <div className="relative">
        <div className="max-w-full	">
        <img src="./images/titlepage.png" alt="封面"/>
         
        <p className="absolute bg-black bg-opacity-30 text-white font-sans font-normal 
        sm:max-w-xs sm:max-h-20 sm:text-xs sm:left-3 sm:top-10  sm:p-1 
        md:max-w-md md:max-h-28 md:text-md md:left-48 md:top-20 md:p-3
        lg:max-w-lg lg:max-h-40 lg:text-xl lg:left-56 lg:top-28 lg:p-5
        xl:max-w-xl xl:max-h-48 xl:text-4xl xl:left-40% xl:top-32 xl:p-5
        2xl:max-w-2xl 2xl:max-h-48  2xl:text-5xl  2xl:left-44  2xl:top-40 2xl:p-5 ">

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

