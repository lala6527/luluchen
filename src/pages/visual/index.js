import styles from "./visual.module.scss";

export const Visual = () =>{
    return(
        <div className={styles.visual}>
        <div className="container">
        <h3>Visual Portfolio</h3>
        <p>Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design.</p>
        <div className={styles.grid}>
        <div className={styles.card}>
		    <img src="./images/visual_01.png" />
                <div className={styles.info}>
                    <h1>Project Name</h1>
                        <p>Visal project description Visal project description Visal project description</p> 
			                <button>View More</button> 
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual_02.png" />
                <div className={styles.info}>
                    <h1>Project Name</h1>
                        <p>Visal project description Visal project description Visal project description</p> 
			                <button>View More</button> 
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual_03.png" />
                <div className={styles.info}>
                    <h1>Project Name</h1>
                        <p>Visal project description Visal project description Visal project description</p> 
			                <button>View More</button> 
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual_04.png" />
                <div className={styles.info}>
                    <h1>Project Name</h1>
                        <p>Visal project description Visal project description Visal project description</p> 
			                <button>View More</button> 
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual_05.png" />
                <div className={styles.info}>
                    <h1>Project Name</h1>
                        <p>Visal project description Visal project description Visal project description</p> 
			                <button>View More</button> 
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual_06.png" />
                <div className={styles.info}>
                    <h1>Project Name</h1>
                        <p>Visal project description Visal project description Visal project description</p> 
			                <button>View More</button> 
                </div>
        </div>
        
     </div>
 </div>
  </div>   
    
      
     
       

       
    )
}