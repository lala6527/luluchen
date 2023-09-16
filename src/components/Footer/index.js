// import styles from "./footer.module.scss";

// export const Footer = () => {
//   return (
//    <footer>
//     <div className="container">
//       <div className={styles.item}>
//        <a href="https://github.com/lala6527/luluchen.git" target="_blank" >
//         <img src="/images/Githubicon.png"  alt="Github" className={styles.imgFooter}/></a>
//        <a href="https://www.linkedin.com/in/jihan-chen-b64850257" target="_blank" >
//         <img src="/images/Linkedinicon.png" alt="Linkedin" className={styles.imgFooter}/></a>
//        <a href="https://www.instagram.com/bonnie_55417/" target="_blank">
//         <img src="/images/Igicon.png" alt="IG" className={styles.imgFooter}/></a>
//        </div>
//       <p>© LuLu Chen 2022 Copyright. All Rights Reserved.</p>
//      </div>
//   </footer>
//   )
// }

export const Footer = () => {
  const iconStyle = "lg:w-20 lg:h-20 w-12 h-12";
  return (
   <footer className="py-4">
    <hr className="border-1 border-slate-100 my-4" />
    <div className="container">
      <div className="flex justify-center">
       <a href="https://github.com/lala6527/luluchen.git" target="_blank" >
        <img src="/images/Githubicon.png"  alt="Github" className={iconStyle}/></a>
       <a href="https://www.linkedin.com/in/jihan-chen-b64850257" target="_blank" >
        <img src="/images/Linkedinicon.png" alt="Linkedin" className={iconStyle}/></a>
       <a href="https://www.instagram.com/bonnie_55417/" target="_blank">
        <img src="/images/Igicon.png" alt="IG" className={iconStyle}/></a>
       </div>
      <p className="lg:text-sm text-xs text-slate-400 text-center">© LuLu Chen 2022 Copyright. All Rights Reserved.</p>
     </div>
  </footer>
  )
}

