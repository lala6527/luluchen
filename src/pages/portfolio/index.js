import styles from "./portfolio.module.scss";

export const Portfolio = (props) => {
    return (
        <div className={styles.portfolio}>
            {props.children}
        </div>
    );
}

export default Portfolio;
