import styles from "./about.module.scss";

export const About = () => {
    return(
        <div className={styles.container}>
            <div className={styles.about}>
            <section>
              <img src="images/photo.png" alt="照片" />
              <div className={styles.flexItem}> 
              <h3>Hey, I’m Lulu. Nice to meet you!</h3>
                <p>I am a xxxxxxx with x years of industry experoemce including e-commerce, xxx and xxx.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                 labore et dolore magna aliqua.
                 </p> 
                 <p>I am a xxxxxxx with x years of industry experoemce including e-commerce, xxx and xxx.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                 labore et dolore magna aliqua.
                 </p> 
                 </div> 
            </section>
            <hr />
            </div>
        </div>
    )

}