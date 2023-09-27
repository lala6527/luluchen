export const Footer = () => {

  const footerStyleItem ="flex justify-center gap-6";

  return (

   
   <footer className="flex justify-center border-t-[#d9d9d9] pt-15 pb-10 mt-15">
    <div className="container">
      <div className="flex justify-center border-t-[#d9d9d9] pt-12 pb-10 mt-12">
       <a href="https://github.com/lala6527/luluchen.git" target="_blank" >
        <img src="/images/Githubicon.png"  alt="Github" className={footerStyleItem} /></a>
       <a href="https://www.linkedin.com/in/jihan-chen-b64850257" target="_blank" >
        <img src="/images/Linkedinicon.png" alt="Linkedin" className={footerStyleItem}/></a>
       <a href="https://www.instagram.com/bonnie_55417/" target="_blank">
        <img src="/images/Igicon.png" alt="IG" className={footerStyleItem}/></a>
       </div>
      <p className="flex justify-center text-gray leading-5 lg:text-base text-xs">© LuLu Chen 2022 Copyright. All Rights Reserved.</p>
     </div>
  </footer>

  )
}

