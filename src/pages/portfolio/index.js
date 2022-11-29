import styles from "./portfolio.module.scss";

export const Portfolio = () =>{
return(
    <div className={styles.container}>
    <div className={styles.portfolio}>  
    <article>
     <h3 className ={styles.h3Portfolio}>Front-end Development Portfolio</h3> 
     <p className ={styles.pPortfolio}>Succeed online with a website that is fast, easy to use, 
        and built with best practices and a passion for design.</p>  
    </article>
    <section>
    <div className={styles.flexItem}>
    <h2>HurryBuy Dashboard</h2>
    <p>
    A dashboard for online retailers which helps to quickly identify 
    the most efficient channels. Monitor conversion rates, new customer 
    traffic, channel revenue and optimize your marketing activities based on results.
    </p>
    <div className={styles.tag}> <span>JavaScript</span><span>HTML</span><span>CSS/SASS</span><span>React</span></div>
    </div>
    <img src="./images/chart.png"  alt="chart"/>
    </section>
    <section>
    <div className={styles.flexItem}>
    <h2>React Todolist</h2>
    <p>
    A dashboard for online retailers which helps to quickly identify the most efficient channels. 
    Monitor conversion rates, new customer traffic, channel revenue and optimize your marketing activities based on results.
    </p>
    <div className={styles.tag}> <span>JavaScript</span><span>HTML</span><span>CSS/SASS</span><span>React</span></div>
    </div>
    <img src="./images/todolist.png"  alt="/todolist"/>
    </section>
    <section>
    <div className={styles.flexItem}>
    <h2>React Calculator</h2>
    <p>
    A dashboard for online retailers which helps to quickly identify the most efficient channels. 
    Monitor conversion rates, new customer traffic, channel revenue and optimize your marketing activities based on results.
    </p>
    <div className={styles.tag}> <span>JavaScript</span><span>HTML</span><span>CSS/SASS</span><span>React</span></div>
    </div>
    <img src="./images/calculator.png"  alt="/calculator"/>
    </section>
    </div>
    </div>
    
);
}