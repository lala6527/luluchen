
import { PortfolioList } from "../../components/portfolio/PortfolioList";
import styles from "./portfolio.module.scss";

export const Portfolio = () =>{
    return(
        <div className="container">
            <div className={styles.portfolio}>
                 <h3>前端開發作品集</h3>
                     <p> 作品集展示對於HTML、CSS、JavaScript和React框架的熟悉程度，
                         能夠應用不同的技術來創建出具有良好用戶體驗、互動性和視覺效果的網站。</p>
            </div>
                <PortfolioList />
        </div>
    );
};
