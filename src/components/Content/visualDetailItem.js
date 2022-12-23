import styles from './visualDetailItem.module.scss';

export const VisualDetailItem = (props) =>{
return(

<section>
    <div className={styles.background}>  
   <img src ={props.background} alt={props.title} />
   </div>  
   <h2>{props.title}</h2>
   <p>{props.summmary}</p>
   <h3>{props.subtitle}</h3>
   <p>{props.content}</p>
   <div className={styles.detailimg}>
   <img src={props.img} alt={props.subtitleOne}></img>
   </div>
   <h3>{props.subtitleOne}</h3>
   <p>{props.contentOne}</p>
   </section>

   )
}