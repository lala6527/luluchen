import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footeritem}>
       <a href="https://github.com/lala6527/luluchen.git" target="_blank"><img src="images/Githubicon.png"  alt="Github"/></a>
       <a href="https://www.linkedin.com/in/jihan-chen-b64850257" target="_blank"><img src="images/Linkedinicon.png" alt="Linkedin"/></a>
       <a href="https://www.instagram.com/bonnie_55417/" target="_blank"><img src="images/Igicon.png" alt="IG"/></a>
       </div>
      <p>© LuLu Chen 2022 Copyright. All Rights Reserved.</p>
      </div>
    </footer>

  );
};
