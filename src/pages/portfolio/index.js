import { useEffect } from 'react';
import styles from './portfolio.module.scss'

const Home = (props) => {
  return (
    <div className={styles.message}>
      <img src={props.img} alt={props.title} />
      <div className={styles.content}>
        <p className={styles.date}>{props.date}</p>
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
      </div>
    </div>
  )
}



export const Portfolio = () => {
  useEffect(() => {
    document.title = "";
  }, [])
}