import {Link } from 'react-router-dom';
import styles from "./styles/tailwind.css";

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
          <figure key={`portfolio-${item.name}`} className="mt-4 flex-row-reverse leading-6">
            <Link to={item.link} className="w-2/3">
              <div className="w-full">
              <img src={item.img} alt={item.title} />
              </div>
            </Link>
            <figcaption className="w-1/3 pr-12">
              <h2 className="text-base mx-0 mt-0 mb-7">{item.name}</h2>
              <p className=" mx-0 mt-0 mb-7 text-gray">{item.summary}</p>
              <div className="mr-1 bg-white text-xs px-1 py-2 rounded-lg">
                {item.tag.map((tag) => {
                  return (
                    <span key={`tag-${tag}`} className="mr-4 bg-[#d9d9d9] text-sm px-1 py-2 rounded">{tag} </span>
                  )
                })}
              </div>
              <Link to={item.link} className="block mt-5 text-[#009861] no-underline">View detail</Link>
            </figcaption>
          </figure>
        )
      })}
      {/* <Link href="/portfolio">View all</Link> */}
    </section>



  )
}