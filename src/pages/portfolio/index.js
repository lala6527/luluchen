
import { PortfolioList } from "../../components/Portfolio/portfolioList";

export const Portfolio = () =>{
    return(
        <div className="">
            <div className="m-6 lg:m-32">
                 <h3 className="text-4xl text-center leading-10 font-bold mb-3 lg:text-5xl lg:leading-[67px] ">前端開發作品集</h3>
                     <p className="text-xl text-center leading-10 text-gray lg:text-4xl lg:leading-[50px] "> 
                      作品集展示對於HTML、CSS、JavaScript和React框架的熟悉程度，
                      能夠應用不同的技術來創建出具有良好用戶體驗、互動性和視覺效果的網站。</p>
            </div>
                <PortfolioList />
        </div>
    );
};
