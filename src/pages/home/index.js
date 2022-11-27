import styles from "./home.module.scss";
import {Button} from '../../components/Button';

export const Home = () => {

  return (
  <div className={styles.container}>
    <div className={styles.titlePage}>
    <img src="./images/titlePage.png" alt="封面"></img>
    <p>I am a front-end developer,<br />
      Visual designer and foody<br />
      from Tainan, Taiwan.</p>
    </div>
     <h3> Featured Work</h3>
    <section>
    <div className={styles.flexItem}>
    <h2>HurryBuy Dashboard</h2>
    <p>
    A dashboard for online retailers which helps to quickly identify 
    the most efficient channels. Monitor conversion rates, new customer 
    traffic, channel revenue and optimize your marketing activities based on results.
    </p>
    <div className={styles.tag}> <span>JavaScript</span><span>HTML</span><span>CSS/SASS</span><span>React</span></div>
    </div>
    <img src="./images/charts.png"  alt="chart"/>
    </section>
    </div>
     
  )
};
