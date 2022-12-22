import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./portfolio.module.scss";

export const Portfolio = () => {

  return (
    <div className={styles.container}>
    <div className={styles.portfolio}>
    <main>
    <h3>Front-end Development Portfolio</h3>
    <p>Succeed online with a website that is fast, easy to use, 
      and built with best practices and a passion for design.</p>
    </main>  
        <PortfolioItem
        title="HurryBuy Dashboard"
        summary="A dashboard for online retailers which helps to quickly identify the most efficient channels. Monitor conversion rates, new customer 
        traffic, channel revenue and optimize your marketing activities based on results."
        img="./images/Dashboard.png"  />
        <PortfolioItem
        title="React Todolist"
        summary="A dashboard for online retailers which helps to quickly identify the most efficient channels. 
        Monitor conversion rates, new customer traffic, channel revenue and optimize your marketing activities based on results."
        img="./images/todolist.png"  />
        <PortfolioItem
        title="React Calculator"
        summary="A dashboard for online retailers which helps to quickly identify the most efficient channels. Monitor conversion rates, new customer traffic, channel revenue and optimize your marketing activities based on results."
        img="./images/calculator.png"  />

  </div>
  </div>     
  );
};
