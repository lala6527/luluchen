import styles from "./styles/tailwind.css";

export const PortfolioItem =(props) =>{
return( 
  <section>
    <div className="flex">
    <h2>{props.title}</h2>
      <p>{props.summary}</p>
      <div className="mr-1 bg-white text-xs px-1 py-2 rounded-lg"> <span>JavaScript</span><span>HTML</span><span>CSS/SASS</span><span>React</span></div>
      <div className="block bg-gary text-[#009861]">
      <a href="ToDo">View detail</a>
      </div>
     </div>
      <a href="ToDo" className={styles.img}>
     <img src={props.img} alt={props.title} />
     </a>
   
</section>



)
}