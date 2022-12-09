import styles from "./visual.module.scss";

export const Visual = () =>{
    return(
        <div className={styles.visual}>
         <div className="container">
        <h3>Visual Portfolio</h3>
        <p>Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.</p>
        <div className={styles.grid}>
        <div className={styles.card}>
        <div className={styles.desc}> 
        <h3>Project Name</h3>
        <p>Visal project description Visal project description Visal project description</p>
        <a href="#" >View More</a>
        </div>
        <img src="./images/visual_01.png" alt="visual" />   

        </div>
        <a href="#" className={styles.card}><img src="./images/visual_02.png" alt="visual" /></a> 
        <a href="#" className={styles.card}><img src="./images/visual_03.png" alt="visual" /></a> 
        <a href="#" className={styles.card}><img src="./images/visual_04.png" alt="visual" /></a> 
        <a href="#" className={styles.card}><img src="./images/visual_05.png" alt="visual" /></a> 
        <a href="#" className={styles.card}><img src="./images/visual_06.png" alt="visual" /></a> 
        </div>
        </div>
        </div>

       
    )
}