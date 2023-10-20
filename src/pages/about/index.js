const careers = [
  {
  img:"./images/workimage.png",
  title:"中天電視股份有限公司",
  date:"電子商務 (2021 02 - Present)",
  responsibilities: [
    "協助電商平台的營運",
    "財務帳務相關處理",
    "銷售報表製作",
    "行銷活動宣傳",
  ],
},
{ 
  img:"./images/vino.jpeg",
  title:"唯諾國際有限公司",
  date:"行銷設計 (2018/10 - 2020/10)",
  responsibilities: [
    "行銷設計(EDM、通路文宣或海報與頸標製作)",
    "企劃文案撰寫",
    "活動安排",
    "船務安排事宜",
  ],
},
{
  img:"./images/coffee.jpeg",
  title:"多一點有限公司",
  date:"儲備幹部 (2017/08 - 2018/08)",
  responsibilities: [
    "制訂作業標準流程等事宜",
    "文案設計及菜單擬定",
    "服務顧客維護顧客關係，客訴及危機處理",
    "公司策略執行與推動",
   
  ],
},

]


export const About = () => {
    return(
        
        <div className="container">
            <div className="pb-44">
            <section className=" flex flex-col lg:pt-30 lg:pb-15 lg:flex-row lg:w-full">
              <div className="pb-5 lg:pr-10">             
                <img src="images/photo.png" alt="照片" />
              </div>
              <div className="lg:w-2/3"> 
              <h3 className=" text-xl font-bold lg:text-2xl mb-3">Hey, I’m Lulu. Nice to meet you!</h3>
                <p className="text-sm lg:text-base pb-3">嗨! 我是季涵，個性友善、真誠，做事認真專注，有很強的責任心，學習能力與適應能力強，十分重視團隊精神，在能力範圍內會把每一件事做到最好!
                </p>
                <p className="text-sm lg:text-base pb-3">平時我喜歡旅遊和閱讀，這兩者都是我生活中的熱愛。回想大學時的一次環島之旅，我體驗到冒險和探索的樂趣，這不僅激發了我的創造力，
                還培養如何面對危機時的處理能力。此外，閱讀對我來說是一個心靈的寧靜之地，是我與自己深入對話的時光。閱讀提供了無限的知識，同時也豐富了我的內在世界，幫助我更深入地了解自己，以及對周遭世界的看法。
                使我在面對挑戰和做出重要決策時有著強大的支持。這些豐富的體驗不僅充實了我的生活，還培養了我的潛在實力，使我更有信心面對未來的挑戰，迎接新的機遇。
                </p>
                <p className="text-sm lg:text-base">實現自我和追求事業突破時，我堅信每一次經歷都是一個寶貴的學習機會。這個信念驅使著我持續不斷地提升自己，並主動尋找各種機會來成長。我深信，每個挑戰和困難都是我變得更強大、更有智慧的機會，而我全心投入，力爭成為更好的自己。
                </p> 
                 </div> 
            </section>
            <hr className="border-[#ECECEC] solid  my-16" />
             <article>
            <h3 className="font-sans font-bold text-2xl mb-10">Software I love to use</h3>
            <p className="font-sans font-normal text-2xl mb-5">經常所使用的工具。</p>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
             <img src="./images/figma.png" alt="figma"/>
             <img src="./images/visual.png" alt="visual studio code"/>
             <img src="./images/github.png" alt="github"/>
             <img src="./images/chrome.png" alt="chrome"/>            
            </div>
            <hr className="border-[#ECECEC] solid  my-16"/>
            </article>
            
            <h3 className="font-sans font-bold text-2xl mb-2">Work experience</h3>
            {careers.map((career,index)=>(
            <figure className="flex pb-12" key={index}>
              <img src={career.img} alt="workimage" className="w-20 h-20 p-2 inline-block border border-black/10 rounded-lg bg-white" />
            <div className="pl-4">
            <h4 className="font-sans font-bold text-base mb-2">{career.title}</h4>
            <h5 className="font-sans font-normal text-base mb-2">{career.date}</h5>
            <ul className="list-disc pl-6 space-y-2 text-gray-500">
              {career.responsibilities.map((responsibilities,index)=>(
                <li key={index}>{responsibilities}</li>
              ))}
            </ul>
            </div>
            </figure>
            ))}

            
            <hr className="border-[#ECECEC] solid  my-16"/>
            <article>
            <h3 className="font-sans font-bold text-2xl mb-2">What I like to do</h3>
            <p className="font-sans font-normal text-base text-[#7D7D7D] mb-2">
              平時喜歡旅遊拍照，大學時期很喜歡跑馬拉松，最近開始喜歡上爬山。</p>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
             <img src="./images/instagram_01.png" alt="instagram photo"/>
             <img src="./images/instagram_02.png" alt="instagram photo"/>
             <img src="./images/instagram_03.png" alt="instagram photo"/>
             <img src="./images/instagram_04.png" alt="instagram photo"/>            
            </div>
            </article>
            </div>           
        </div>
    )

}