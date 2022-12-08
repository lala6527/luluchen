import styles from "./visual.module.scss";

export const Visual = () =>{
    return(
        <div className={styles.visual}>
         <div className="container">
        <h3>Visual Portfolio</h3>
        <p>Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.</p>
        <div className={styles.grid}>
        <img src="./images/visual_01.png" alt="visual"/>
        <img src="./images/visual_02.png" alt="visual"/>
        <img src="./images/visual_03.png" alt="visual"/>
        <img src="./images/visual_04.png" alt="visual"/>
        <img src="./images/visual_05.png" alt="visual"/>
        <img src="./images/visual_06.png" alt="visual"/>
        </div>
        </div>
        </div>   
    )
}