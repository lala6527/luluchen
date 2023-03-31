import styles from "./visualDetailItem.module.scss";

export const VisualDetailItem = (props) => {
  return (
    <div className={styles.visualDetailItem}>
      <img src={props.background} alt={props.title} />
        <h2 className={styles.visualTitle}>{props.title}</h2>
        <p className={styles.visualSummary}>{props.summary}</p>
        <h3 className={styles.visualSubtitle}>{props.subtitle}</h3>
        <p className={styles.visualContent}>{props.content}</p>
        <h3 className={styles.visualSubtitleOne}>{props.subtitleOne}</h3>
        <p className={styles.visualContentOne}>{props.contentOne}</p>
    </div>
  );
};
