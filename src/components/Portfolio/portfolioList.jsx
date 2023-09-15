import { Link } from 'react-router-dom';

const portfolio = [
  {
    name: "HurryBuy Dashboard",
    summary: "A dashboard for online retailers which helps to quickly identify the most efficient channels. Monitor conversion rates, new customer traffic, channel revenue and optimize your marketing activities based on results.",
    img: "images/Dashboard.png",
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
    img: "images/calculator.png",
    link: "/portfolio/calculator",
    tag: ["JavaScript", "HTML", "CSS/SASS", "React"]
  }
];

export const PortfolioList = () => {
  return (
    <section className="container space-y-12">
      {portfolio.map((item) => {
        return (
          <figure key={`portfolio-${item.name}`} className="flex flex-row-reverse leading-6">
            <Link to={item.link} className="w-2/3 block">
              <img src={item.img} alt={item.title} />
            </Link>
            <figcaption className="w-1/3 pr-12">
              <h2 className="text-2xl mx-0 mt-0 mb-7">{item.name}</h2>
              <p className=" mx-0 mt-0 mb-7 text-gray">{item.summary}</p>
              <div className="mr-1 bg-white text-xs px-1 py-2 rounded-lg">
                {item.tag.map((tag) => {
                  return (
                    <span key={`tag-${tag}`} className="inline-block mr-4 mb-4 bg-[#d9d9d9] text-sm p-1 rounded">{tag} </span>
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