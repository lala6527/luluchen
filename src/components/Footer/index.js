import styles from "./footer.module.scss";

export const Footer = () => {
  return (

   
   <footer>
    <div className="container">
      <div className={styles.item}>
       <a href="https://github.com/lala6527/luluchen.git" target="_blank" >
        <img src="/images/Githubicon.png"  alt="Github" className={styles.imgFooter}/></a>
       <a href="https://www.linkedin.com/in/jihan-chen-b64850257" target="_blank" >
        <img src="/images/Linkedinicon.png" alt="Linkedin" className={styles.imgFooter}/></a>
       <a href="https://www.instagram.com/bonnie_55417/" target="_blank">
        <img src="/images/Igicon.png" alt="IG" className={styles.imgFooter}/></a>
       </div>
      <p>© LuLu Chen 2022 Copyright. All Rights Reserved.</p>
     </div>
  </footer>

  )
}

