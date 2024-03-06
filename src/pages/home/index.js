import { PortfolioList } from "../../components/Portfolio/PortfolioList";

export const Home = () => {
  return (
    <div className="container">
      <div className="relative">
        <div className="max-w-full	">
          <img src="./images/titlepage.png" alt="封面" />
          <div className="container">
            <p className="lg:absolute lg:bg-black/30 lg:text-white lg:top-1/2 lg:-translate-y-1/2 lg:text-4xl lg:m-4 lg:w-[500px] text-[#7d7d7d] m-4 text-center">
              I am a front-end developer
              Visual designer and foody
              from Tainan, Taiwan.</p>
          </div>
        </div>
      </div>
      <h2 className="lg:text-4xl text-2xl font-bold lg:my-12 my-6 text-center">Featured Work</h2>
      <PortfolioList />
    </div>
  )
}
