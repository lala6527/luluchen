import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => {
  return (

    <header className={styles.header}>

     <Link to ="home"><img src="/images/logo.png" alt="Home" /></Link>
      <nav>
        <ul >
          <li>
            <Link to ="about">About</Link>
          </li>
          <li>
            <Link to ="portfolio">Portfolio</Link>
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
