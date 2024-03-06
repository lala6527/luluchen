const visualData = [
  {
    name: '蜂與鳥',
    img: './images/visual01.png',
    desc: '營造出柔和、輕盈的氛圍，與酒體有相呼應，凸顯商品特色。',
    link: 'Visual/1'
  },
  {
    name: '三隻猴子',
    img: './images/visual02.png',
    desc: '夏日森林和靈動的猴子，營造出了一種自然、活潑、有趣的氛圍。',
    link: 'Visual/2'
  },
  {
    name: '甜柑橘氣泡酒',
    img: './images/visual03.png',
    desc: '在炎炎夏日里感受到一絲涼爽，提升整個夏天的美好感受。',
    link: 'Visual/3'
  },
  {
    name: '西班牙醜醜熱紅酒',
    img: './images/visual04.png',
    desc: '夏日飲用新哲學 清新沁涼好滋味。不同於傳統夏日飲料的美妙口感。',
    link: 'Visual/4'
  },
  {
    name: '查理斯香檳經典系列',
    img: './images/visual05.png',
    desc: '散發著獨特的氣息和風味，充滿奢華和精緻的品味世界。',
    link: 'Visual/5'
  },
  {
    name: '幾米聯名酒款',
    img: './images/visual06.png',
    desc: '溫馨的氛圍，在忙碌的生活中獲得一絲絲的溫暖和安慰。',
    link: 'Visual/6'
  },
]

export const Visual = () => {
  return (
    <div>
      <div className="container">
        <h1 className="pt-[120px] text-center text-5xl font-bold leading-[68px]">視覺作品集</h1>
        <p className="text-center text-4xl leading-[51px] pb-[120px] text-[#7d7d7d]">
          這個作品集展示設計和創意能力，同時反映我的個人風格，每一個作品都有我對設計的熱情和追求。
          並且注重細節和實用性，力求讓每一個設計都具有美感和功能性。
        </p>

        <div className="grid grid-cols-2 gap-10 pb-10 ">
          {visualData.map((item, index) => {
            return (
              <div key={item.name} className="relative group">
                <img src={item.img} className="rounded-xl" />
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:bg-black/60 group-hover:opacity-100 transition duration-300 ease-in-out rounded-xl">
                  <div className="absolute z-10 rounded-xl top-1/2 left-1/2 bg-white -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100">
                    <div className="p-7">
                      <h3 className="text-xl font-bold leading-[34px] pb-5">{item.name}</h3>
                      <p className="text-xl leading-[34px]">{item.desc} <br />
                        <a href={item.link} className="block mt-5 border rounded py-2.5 text-center mb-5 leading-[22px] rounded-xl hover:text-white hover:bg-black">View More</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


