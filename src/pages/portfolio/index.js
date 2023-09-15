
import { PortfolioList } from "../../components/Portfolio/PortfolioList";

export const Portfolio = () =>{
    return(
        <div className="">
            <div className="m-32">
                 <h3 className="font-sans font-bold text-5xl leading-[67px] text-center">前端開發作品集</h3>
                     <p className="font-sans font-normal text-4xl leading-[50px] text-center text-gray"> 
                      作品集展示對於HTML、CSS、JavaScript和React框架的熟悉程度，
                      能夠應用不同的技術來創建出具有良好用戶體驗、互動性和視覺效果的網站。</p>
            </div>
                <PortfolioList />
        </div>
    );
};
