import styles from "./visual.module.scss";

export const Visual = () => {
  return (
    <div className={styles.visual}>
      <div className="container">
        <h1>視覺作品集</h1>
        <p>
        這個作品集展示設計和創意能力，同時反映我的個人風格，每一個作品都有我對設計的熱情和追求。
        並且注重細節和實用性，力求讓每一個設計都具有美感和功能性。。
        </p>
        
        <div className={styles.grid}>

        <div className={styles.card}>
		    <img src="./images/visual01.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                      <h3>蜂與鳥</h3>
                        <p>營造出柔和、輕盈的氛圍，與酒體有相呼應，凸顯商品特色。<br/>
			                    <a href="Visual/1">View More</a> 
                            </p> 
                    </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual02.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                      <h3>Project Name</h3>
                        <p>Visal project description Visal project description Visal project description<br/>
                        <a href="Visual/2">View More</a> 
                            </p> 
                      </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual03.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>Project Name</h3>
                        <p>Visal project description Visal project description Visal project description<br/>
                        <a href="Visual/3">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual04.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>Project Name</h3>
                        <p>Visal project description Visal project description Visal project description<br/>
                        <a href="Visual/4">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual05.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>Project Name</h3>
                        <p>Visal project description Visal project description Visal project description<br/>
                        <a href="Visual/5">View More</a> 
                            </p> 
                            </div>
                </div>
        </div>
        <div className={styles.card}>
		    <img src="./images/visual06.png" />
                <div className={styles.info}>
                    <div className={styles.desc}>
                    <h3>Project Name</h3>
                        <p>Visal project description Visal project description Visal project description<br/>
                        <a href="Visual/6">View More</a> 
                            </p> 
                         </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>          

       
    );
};

         