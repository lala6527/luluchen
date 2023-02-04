import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flex}>
          <Link to="/"><img src="/images/logo.png" alt="Home" /></Link>
          <nav>
            <Link to="about">About</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="visual">Visual</Link>
            <a href="https://drive.google.com/file/d/1NA9qCxp1107MC6_g1D59PrntHGl_sM0t/view" target="_blank">Resume</a>
          </nav>
          <button>close</button>
        </div>
      </div>
    </header>
  )
}
