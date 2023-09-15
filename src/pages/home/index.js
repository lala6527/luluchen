import { PortfolioList } from "../../components/Portfolio/portfolioList";


export const Home = () => {
  return (
    <div className="container">
      <div className="relative">
        <div className="max-w-full	">
          <img src="./images/titlepage.png" alt="封面" />
          <div className="container">
            <p className="absolute bg-black/30 text-white top-1/2 -translate-y-1/2 text-4xl p-4">
              I am a front-end developer,<br />
              Visual designer and foody<br />
              from Tainan, Taiwan.</p>
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold my-12 text-center">Featured Work</h2>
      <PortfolioList />
    </div>
  )
}

