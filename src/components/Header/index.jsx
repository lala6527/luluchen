import { useState } from "react";
import { Link } from "react-router-dom";

export const Header =() =>{
  const [mobile, setMobile] = useState(false);
  const linkDesktopStyle = "py-4 px-4 hover:text-green-600";
  const linkMoibleStyle = "py-3 px-8 hover:text-green-600 text-lg";

  const handleMobile =() =>{
    setMobile(!mobile);
  }
  return(
    <header className="bg-white py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/"><img src="images/logo.png" alt="Home" className="w-[128px]" /></Link>
            <nav className="hidden lg:block">
            <Link to="about" className={linkDesktopStyle}>About</Link>
             <Link to="portfolio" className={linkDesktopStyle}>Portfolio</Link>
              <Link to="visual" className={linkDesktopStyle}>Visual</Link>
              <a href="https://drive.google.com/file/d/1NA9qCxp1107MC6_g1D59PrntHGl_sM0t/view" target="_blank" className={linkDesktopStyle}>
                Resume
              </a>
            </nav>
            <button className="lg:hidden" onClick={handleMobile}>
              <img src="/images/icon_menu.svg" alt="" />
            </button>
        </div>
        {mobile &&(
          <nav className="lg:hidden bg-black/60 absolute top-0 left-0 right-0 bottom-0 z-10">
            <div className="bg-white absolute top-0 bottom-0 left-1/2 right-0 flex flex-col pt-20">
              <Link to="about" className={linkMoibleStyle} onClick={handleMobile}>About</Link>
              <Link to="portfolio" className={linkMoibleStyle} onClick={handleMobile}>Portfolio</Link>
              <Link to="visual" className={linkMoibleStyle} onClick={handleMobile}>Visual</Link>
              <a href="https://drive.google.com/file/d/1NA9qCxp1107MC6_g1D59PrntHGl_sM0t/view" target="_blank" className={linkMoibleStyle}>
                Resume
              </a>
            </div>
            <button className="lg:hidden absolute top-4 right-4" onClick={handleMobile}>
              <img src="/images/icon_close.svg" alt="" />
            </button>

          </nav>
        )}
      </div>
    </header>
  )
}

// export const Header = () => {
//   return (
//     <header className={styles.header}>
//       <div className="container">
//         <div className={styles.flex}>
//           <Link to="/"><img src="/images/logo.png" alt="Home" /></Link>
//           <nav>
//             <Link to="about">About</Link>
//             <Link to="portfolio">Portfolio</Link>
//             <Link to="visual">Visual</Link>
//             <a href="https://drive.google.com/file/d/1NA9qCxp1107MC6_g1D59PrntHGl_sM0t/view" target="_blank">Resume</a>
//           </nav>
//           <button>close</button>
//         </div>
//       </div>
//     </header>
//   )
// }
