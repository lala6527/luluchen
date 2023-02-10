import { Link } from 'react-router-dom';
import styles from './portfolio.module.scss';

const portfolio = [
  { 
    name: "HurryBuy Dashboard",
    summary: "A dashboard for online retailers which helps to quickly identify the most efficient channels. Monitor conversion rates, new customer traffic, channel revenue and optimize your marketing activities based on results.",
    img: "images/Dashhbors.png",
    link: "/portfolio/dashboard",
    tag: ["JavaScript", "HTML", "CSS/SASS", "React"]
},
{
  name: "React Todolist",
  summary: "A dashboard for online retailers which helps to quickly identify the most efficient channels. Monitor conversion rates, new customer traffic, channel revenue and optimize your marketing activities based on results.",
  img: "images/todolist.png",
  link: "/portfolio/todo",
  tag: ["JavaScript", "HTML", "CSS/SASS", "React"]
},
{
  name: "React Calculator",
  summary: "A dashboard for online retailers which helps to quickly identify the most efficient channels. Monitor conversion rates, new customer traffic, channel revenue and optimize your marketing activities based on results.",
  img: "images/Dashhbors.png",
  link: "/portfolio/dashboard",
  tag: ["JavaScript", "HTML", "CSS/SASS", "React"]
}
];

export const PortfolioList = () =>{
  return(
    <section>
      {portfolio.map((item) =>{
        return (
          <figure key = {`portfolio-${item.name}`} className={styles.PortfolioItem}>
            <Link to={item.link} className={styles.img}>
              <img src={item.img} alt={item.title} />
            </Link>
            <figcaption>
              <h2>{item.name}</h2>
              <p>{item.summary}</p>
              <div className={styles.tags}>
                {item.tag.map((tag)=>{
                  return (
                    <span key={`tag-${tag}`}></span>
                  )
                })}
              </div>
              <Link to={item.link}>View detail</Link>
            </figcaption>
          </figure>
        )
      })}
    </section>
  )
}