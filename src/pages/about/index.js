import styles from "./about.module.scss";

export const About = () => {
    return(
        <div className="container">
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
             <article>
            <h3>Software I love to use</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
             <div className={styles.grid}>
             <img src="./images/Figma.png" alt="Figma"/>
             <img src="./images/Visual.png" alt="Visual Studio code"/>
             <img src="./images/Github.png" alt="Github"/>
             <img src="./images/chrome.png" alt="chrome"/>            
            </div>
            <hr />
            </article>
            <h3>Work experience</h3>
            <figure>
            <div className={styles.figureimg}>
            <img src="./images/workimage.png" alt="workimage"/>
            </div>
            <div className={styles.item}>
            <h4>Company Name</h4>
            <h5>Position (2022 Mar - Present)</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p> 
            </div>
            </figure>
            </div>           
        </div>
    )

}