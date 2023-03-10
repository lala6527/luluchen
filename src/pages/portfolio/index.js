
import { PortfolioList } from "../../components/Portfolio/PortfolioList";
import styles from "./portfolio.module.scss";

export const Portfolio = () =>{
    return(
        <div className="container">
            <div className={styles.portfolio}>
                 <h3>Front-end Development Portfolio</h3>
                     <p>Succeed online with a website that is fast, easy to use,
                         and built with best practices and a passion for design.</p>
            </div>
                <PortfolioList />
        </div>
    );
};
