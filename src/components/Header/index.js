import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => {
  return (

    <header className={styles.header}>

      <a href="luluchen"><img src="/images/logo.png" alt="" /></a>
      <nav>
        <ul>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="visual">Visual</Link>
          </li>
          <li>
            <Link href="Resume">Resume</Link>
          </li>
        </ul>
      </nav>
    
    </header>

  );
};
