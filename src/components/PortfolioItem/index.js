import styles from './portfolioItem.module.scss';

export const PortfolioItem =(props) =>{
return( 
  <section>
    <div className={styles.flexItem}>
    <h2>{props.title}</h2>
      <p>{props.summary}</p>
      <div className={styles.tag}> <span>JavaScript</span><span>HTML</span><span>CSS/SASS</span><span>React</span></div>
      <div className={styles.a}>
      <a href="#">View detail</a>
      </div>
     </div>
      <a href="#" className={styles.img}>
     <img src={props.img} alt={props.title} />
     </a>
   
</section>



)
}