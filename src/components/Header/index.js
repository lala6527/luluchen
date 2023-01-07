import { Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
    <header className={styles.header}>

     <Link to ="/"><img src="/images/logo.png" alt="Home" /></Link>
      <nav>
       <ul class="flex-nav">
          <li>
            <Link to ="about">About</Link>
          </li>
          <li>
            <Link to ="portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="visual">Visual</Link>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1NA9qCxp1107MC6_g1D59PrntHGl_sM0t/view?usp=sharing" target={"_blank"}>Resume</a>
          </li>
        </ul>
      </nav>
    
    </header>
</div>
  )
}
