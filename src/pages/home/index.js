import { PortfolioItem } from "../../components/PortfolioItem";
import styles from "./home.module.scss";

  export const Home = () =>{
  return (
  <div className={styles.container}>
    <div className={styles.home}>
    <div className={styles.titlePage}>
    <img src="./images/titlepage.png" alt="封面"></img>
    <p>I am a front-end developer,<br />
      Visual designer and foody<br />
      from Tainan, Taiwan.</p>
    </div>
     <h3> Featured Work</h3>
    <PortfolioItem
        title="HurryBuy Dashboard"
        summary="A dashboard for online retailers which helps to quickly identify the most efficient channels. Monitor conversion rates, new customer 
        traffic, channel revenue and optimize your marketing activities based on results."
        img="./images/Dashboard.png"  />
        <PortfolioItem
        title="React Todolist"
        summary="A dashboard for online retailers which helps to quickly identify the most efficient channels. 
        Monitor conversion rates, new customer traffic, channel revenue and optimize your marketing activities based on results."
        img="./images/todolist.png"  
        
        />
    <div className={styles.aPortfolio}>
    <a href="Portfolio">
    More Portfolio
    </a>
    
    </div>
    </div>
     </div>
  )
}
