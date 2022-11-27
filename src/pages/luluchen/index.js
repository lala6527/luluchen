import styles from "./luluchen.module.scss";
import {Button} from '../../components/Button';

export const LuluChen = () => {
       const javascript=(e)=>{(e.preventDefault()                 
        );
      }
       const html=(e)=>{(e.preventDefault()                 
        );
       }
       const cssSass=(e)=>{(e.preventDefault()                 
            );
       }
       const react=(e)=>{(e.preventDefault()                 
        );
   }
  return (
  <div className={styles.luluchen}>
    <div className={styles.titlepage}>
    <img src="./images/titlepage.png" alt="封面"></img>
    <p className={styles.container}>I am a front-end developer,<br />
      Visual designer and foody<br />
      from Tainan, Taiwan.</p>
    </div>
     <p className={styles.text}> Featured Work</p>
    <section className={styles.grid}>
    <div className={styles.griditem}>
    <p className={styles.gridbox1}>
    <h2>HurryBuy Dashboard</h2>
    A dashboard for online retailers which helps to quickly identify 
    the most efficient channels. Monitor conversion rates, new customer 
    traffic, channel revenue and optimize your marketing activities based on results.
    </p>
    <Button onClick={javascript}>JavaScript</Button>
    <Button onClick={html}>HTML</Button>
    <Button onClick={cssSass}>CSS/SASS</Button>
    <Button onClick={react}>React</Button>
    </div> 
    <img src="./images/charts.png"  alt="chart"/>
    </section>
     </div>
     
  )
};
