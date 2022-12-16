import styles from "./home.module.scss";
import Portfolio from "../portfolio";
  export const Home = () =>{
  return (
  <div className={styles.container}>
    <div className={styles.home}>
    <div className={styles.titlePage}>
    <img src="./images/titlePage.png" alt="封面"></img>
    <p>I am a front-end developer,<br />
      Visual designer and foody<br />
      from Tainan, Taiwan.</p>
    </div>
     <h3> Featured Work</h3>
    <section>
    <Portfolio>
    <div className={styles.flexItem}>
    <h2>HurryBuy Dashboard</h2>
    <p>
    A dashboard for online retailers which helps to quickly identify 
    the most efficient channels. Monitor conversion rates, new customer 
    traffic, channel revenue and optimize your marketing activities based on results.
    </p>
    <div className={styles.tag}> <span>JavaScript</span><span>HTML</span><span>CSS/SASS</span><span>React</span></div>
    </div>
    </Portfolio>
    <img src="./images/chart.png"  alt="chart"/>
    </section>
    <section>
    <div className={styles.flexItem}>
    <h2>React Todolist</h2>
    <p>
    A dashboard for online retailers which helps to quickly identify the most efficient channels. 
    Monitor conversion rates, new customer traffic, channel revenue and optimize your marketing activities based on results.
    </p>
    <div className={styles.tag}> <span>JavaScript</span><span>HTML</span><span>CSS/SASS</span><span>React</span></div>
    </div>
    <img src="./images/todolist.png"  alt="/todolist"/>
    </section>
    <div className={styles.aPortfolio}>
    <a href="Portfolio">
    More Portfolio
    </a>
    
    </div>
    </div>
     </div>
  )
}
