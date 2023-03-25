import { Link } from 'react-router-dom';
import styles from './portfolio.module.scss';

const portfolio = [
  {
    name: "統計分析圖",
    summary: "展示使用數據可視化工具，以及如何在網頁上創建吸引人的視覺效果。",
    img: "images/Dashboard.png",
    link: "/portfolio/dashboard",
    tag: ["JavaScript", "HTML", "CSS/SASS", "React"]
  },
  {
    name: "待辦清單",
    summary: "使用React框架和CSS來實現的。這個應用程式展示了我對React框架的掌握以及如何應用React的組件化概念來創建複雜的應用程式。",
    img: "images/todolist.png",
    link: "/portfolio/todo",
    tag: ["JavaScript", "HTML", "CSS/SASS", "React"]
  },
  {
    name: "計算機",
    summary: "創建計算機展現了邏輯運算能力和對React的掌握程度，同時也體現了我的用戶界面設計能力和對CSS的掌握程度。",
    img: "images/calculator.png",
    link: "/portfolio/calculator",
    tag: ["JavaScript", "HTML", "CSS/SASS", "React"]
  }
];

export const PortfolioList = () => {
  return (
    <section>
      {portfolio.map((item) => {
        return (
          <figure key={`portfolio-${item.name}`} className={styles.portfolioItem}>
            <Link to={item.link} className={styles.img}>
              <img src={item.img} alt={item.title} />
            </Link>
            <figcaption>
              <h2>{item.name}</h2>
              <p>{item.summary}</p>
              <div className={styles.tags}>
                {item.tag.map((tag) => {
                  return (
                    <span key={`tag-${tag}`}>{tag}</span>
                  )
                })}
              </div>
              <Link to={item.link}>View detail</Link>
            </figcaption>
          </figure>
        )
      })}
      {/* <Link href="/portfolio">View all</Link> */}
    </section>



  )
}