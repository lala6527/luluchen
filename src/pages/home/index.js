import { PortfolioList } from "../../components/Portfolio/PortfolioList";
import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.titlePage}>
        <img src="./images/titlePage.png" alt="封面"></img>
        <p>I am a front-end developer,<br />
          Visual designer and foody<br />
          from Tainan, Taiwan.</p>
      </div>
      <div className="container">
        <h3> Featured Work</h3>
        <PortfolioList />
      </div>
    </div>
  )
}
