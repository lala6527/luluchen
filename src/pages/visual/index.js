import styles from "./visual.module.scss";

export const Visual = () =>{
    return(
        <div className={styles.visual}>
        <div className="container">
        <h1>Visual Portfolio</h1>
        <p>Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.</p>
        <div className={styles.grid}>
        <div className={styles.card}>
		    <img src="./images/visual_01.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>Project Name</h3>
                        <p>Visal project description Visal project description Visal project description<br/>
			                <a href="#">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual_02.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>Project Name</h3>
                        <p>Visal project description Visal project description Visal project description<br/>
			                <a href="#">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual_03.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>Project Name</h3>
                        <p>Visal project description Visal project description Visal project description<br/>
			                <a href="#">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual_04.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>Project Name</h3>
                        <p>Visal project description Visal project description Visal project description<br/>
			                <a href="#">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual_05.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>Project Name</h3>
                        <p>Visal project description Visal project description Visal project description<br/>
			                <a href="#">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual_06.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>Project Name</h3>
                        <p>Visal project description Visal project description Visal project description<br/>
			                <a href="#">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        
     </div>
 </div>
  </div>   
    
      
     
       

       
    )
}