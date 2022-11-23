import {Link } from "react-router-dom";
import styles from "./header.module.scss";

export const Header = () =>{
    return(
        <header className={styles.header}>
            <img src ="/"></img>
            <nav>
                <ul>
                    <li>
                        <Link href="home">Home</Link>
                    </li>
                    <li>
                        <Link href="about">About</Link>
                    </li>
                    <li>
                        <Link href="/"></Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}