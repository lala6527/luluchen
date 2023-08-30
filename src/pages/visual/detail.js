import { useParams } from "react-router-dom";

const projects=[
    {
        img:'/images/visual01.png',
        title:'蜂與鳥',
        summary:'營造出柔和、輕盈的氛圍，與酒體有相呼應，凸顯商品特色。',
        backgroundTitle:'背景',
        backgroundDescription:'靜靜地注視著紫藍色渲染色彩呈現，發現小小蜂鳥在花叢中飛來飛去，整個畫面更加生動而有活力。不僅為設計帶來一份獨特的美感，同時也能夠傳遞出關於生命、自由和美好的訊息！',
        contentTitle:'設計理念',
        contentDescription:'設設計理念是融合了自然和美學的元素。靈感來自於大自然的美妙，融合了自然元素和動物元素，創造出一個獨特而令人難忘的視覺效果。',
        researchTitle:'設計研究',
        researchImg:[
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
    ],
    },
    {
        img:'/images/visual02.png',
        title:'三隻猴子',
        summary:'夏日森林和靈動的猴子，營造出了一種自然、活潑、有趣的氛圍。',
        backgroundTitle:'背景',
        backgroundDescription:'背景是一個綠色植物為主，給人綠意盎然生氣勃勃的朝氣，而三隻猴子給人活力和歡樂感，共同呈現出自然、和諧和開心的感覺，讓人們感受到自然和大自然的美麗。',
        contentTitle:'設計理念',
        contentDescription:'呈現自然、和諧和歡樂的感覺。讓人們感受到生命力和活力。這也代表著一種生活態度，即積極向上、樂觀進取、享受生活。',
        researchTitle:'設計研究',
        researchImg:[
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
    ],
    },
    
    {
        img:'/images/visual03.png',
        title:'甜柑橘氣泡酒',
        summary:'在炎炎夏日里感受到一絲涼爽，提升整個夏天的美好感受。',
        backgroundTitle:'背景',
        backgroundDescription:'以夏日清新風格為基礎帶來舒暢的氛圍，使得呈現柑橘子氣泡酒的清新、爽口、夏日展現得淋漓盡致。',
        contentTitle:'設計理念',
        contentDescription:'想要傳達夏日的愉悅的氛圍，在這個季節里充滿能量，享受一整個夏天的清爽美好體驗。',
        researchTitle:'設計研究',
        researchImg:[
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
    ],
    },
    {
        img:'/images/visual04.png',
        title:'西班牙醜醜熱紅酒',
        summary:'散發著獨特的氣息和風味，夏日飲用新哲學，清新沁涼好滋味。帶給人們不同於傳統夏日飲料的美妙口感和風味。充滿奢華和精緻的品味世界。',
        backgroundTitle:'背景',
        backgroundDescription:'淺淺天藍色的天空，代表夏日的美好和自由，配合上酒的特性，更能呈現出酒的清涼舒適感，真正感受到商品的魅力。',
        content:'"/images/visual01.png',
        contentDescription:'設計理念',
        researchTitle:'通過美好的夏日場景，營造出一種令人愉悅的品酒體驗，與讀者可以在情感上產生共鳴，勾起對於商品產生好奇和興趣；進而提高對商品的印象和好感。',
        researchImg:[
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
    ],

    },
    {
        img:'/images/visual05.png',
        title:'查理斯香檳經典系列',
        summary:'散發著獨特的氣息和風味，充滿奢華和精緻的品味世界。',
        backgroundTitle:'背景',
        backgroundDescription:'輝煌的背景閃耀著商品，增添豐富的視覺效果，經典優雅的風格，同時也符合商品的品質和價值。',
        content:'"/images/visual01.png',
        contentDescription:'設計理念',
        researchTitle:'傳達一種奢華和高貴的氛圍，讓人瞬間享受到經典、高級、輝煌、閃耀的精神享受。',
        researchImg:[
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
    ],

    },        
    {
        img:'/images/visual06.png',
        title:"幾米聯名酒款",
        summary:'溫馨的氛圍，在忙碌的生活中獲得一絲絲的溫暖和安慰。',
        backgroundTitle:'背景',
        backgroundDescription:'幾米的插畫風格以輕鬆愉悅、富有詩意和夢幻色彩結合。帶給人們溫馨、浪漫、充滿幸福感的世界。',
        contentTitle:'設計理念',
        contentDescription:'幾米的插畫風格和酒款形成獨特的融合，藝術和浪漫所帶來溫暖的氛圍。同時也代表著一種溫暖的陪伴擁抱自己。',
        researchTitle:'設計研究',
        researchImg:[
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
        "https://cdn.dribbble.com/users/64052/screenshots/3316798/media/c28e236e510bb25a31f468f1ec05048c.png?resize=320x240&vertical=center",
    ],
    },
]
export const VisualDetail = () =>{
    const params = useParams();
    const{img,title, summary, backgroundTitle, backgroundDescription, contentTitle, contentDescription, researchTitle, researchImg}=projects[params.vid-1];

    return(
        <div>
            <div className="container">
                <h2 className="font-bold text-5xl leading-[67px] my-12 text-center">{title}</h2>
                <p className="text-xl leading-9 pb-16 text-gray text-center">{summary}</p>
                <img src={img} alt={title} />
                <h3 className="font-bold text-3xl leading-10 pb-7 text-black">{backgroundTitle}</h3>
                <p className="text-xl leading-7 pb-8 text-gray">{backgroundDescription}</p>
                <h3 className="font-bold text-3xl leading-10 pb-7 text-black">{contentTitle}</h3>
                <p className="text-xl leading-7 pb-8 text-gray">{contentDescription}</p>
                <h3 className="font-bold text-3xl leading-10 pb-7 text-black">{researchTitle}</h3>
                <div className="grid grid-cols-4 gap-4">{researchImg.map((img, index) => <img src={img} alt={title} key={index}/>)}
                </div>
            </div>
        </div>
    );
};

// export const VisualDetail = () =>{
//    const params = useParams();
//    let content;
//    switch (params.vid){
//     case "1":
//         content ={
//             background:"/images/visual01.png",
//             title:"蜂與鳥",
//             summary:
//             "營造出柔和、輕盈的氛圍，與酒體有相呼應，凸顯商品特色。",
//             subtitle:"背景",
//             content:
//                 "靜靜地注視著紫藍色渲染色彩呈現，發現小小蜂鳥在花叢中飛來飛去，整個畫面更加生動而有活力。不僅為設計帶來一份獨特的美感，同時也能夠傳遞出關於生命、自由和美好的訊息！",
//             img:"/images/visual01.png",
//             subtitleOne:"設計理念",
//             contentOne:"設計理念是融合了自然和美學的元素。靈感來自於大自然的美妙，融合了自然元素和動物元素，創造出一個獨特而令人難忘的視覺效果。",
//         };
//         break;
//         case "2":
//             content ={
//                 background:"/images/visual02.png",
//                 title:"三隻猴子",
//                 summary:
//                 "夏日森林和靈動的猴子，營造出了一種自然、活潑、有趣的氛圍。",
//                 subtitle:"背景",
//                 content:
//                     "背景是一個綠色植物為主，給人綠意盎然生氣勃勃的朝氣，而三隻猴子給人活力和歡樂感，共同呈現出自然、和諧和開心的感覺，讓人們感受到自然和大自然的美麗。",
//                 img:"/images/visual02.png",
//                 subtitleOne:"設計理念",
//                 contentOne:"呈現自然、和諧和歡樂的感覺。讓人們感受到生命力和活力。這也代表著一種生活態度，即積極向上、樂觀進取、享受生活。",
//             };
//             break;
//             case "3":
//                 content ={
//                     background:"/images/visual03.png",
//                     title:"甜柑橘氣泡酒",
//                     summary:
//                     "在炎炎夏日里感受到一絲涼爽，提升整個夏天的美好感受。",
//                     subtitle:"背景",
//                     content:
//                         "以夏日清新風格為基礎帶來舒暢的氛圍，使得呈現柑橘子氣泡酒的清新、爽口、夏日展現得淋漓盡致，。 ",
//                     img:"/images/visual03.png",
//                     subtitleOne:"設計理念",
//                     contentOne:"想要傳達夏日的愉悅的氛圍，在這個季節里充滿能量，享受一整個夏天的清爽美好體驗。",
//                 };
//                 break;
//                 case "4":
//                     content ={
//                         background:"/images/visual04.png",
//                         title:"西班牙醜醜熱紅酒",
//                         summary:
//                         "夏日飲用新哲學，清新沁涼好滋味。帶給人們不同於傳統夏日飲料的美妙口感和風味。",
//                         subtitle:"背景",
//                         content:
//                             "淺淺天藍色的天空，代表夏日的美好和自由，配合上酒的特性，更能呈現出酒的清涼舒適感，真正感受到商品的魅力。",
//                         img:"/images/visual04.png",
//                         subtitleOne:"設計理念",
//                         contentOne:"通過美好的夏日場景，營造出一種令人愉悅的品酒體驗，與讀者可以在情感上產生共鳴，勾起對於商品產生好奇和興趣；進而提高對商品的印象和好感。 ",
//                     };
//                     break;
//                     case "5":
//                         content ={
//                             background:"/images/visual05.png",
//                             title:"查理斯香檳經典系列",
//                             summary:
//                             "散發著獨特的氣息和風味，充滿奢華和精緻的品味世界。",
//                             subtitle:"背景",
//                             content:
//                                 "輝煌的背景閃耀著商品，增添豐富的視覺效果，經典優雅的風格，同時也符合商品的品質和價值。 ",
//                             img:"/images/visual05.png",
//                             subtitleOne:"設計理念",
//                             contentOne:"傳達一種奢華和高貴的氛圍，讓人瞬間享受到經典、高級、輝煌、閃耀的精神享受。",
//                         };
//                         break;
//                         case "6":
//                             content ={
//                                 background:"/images/visual06.png",
//                                 title:"幾米聯名酒款",
//                                 summary:
//                                 "溫馨的氛圍，在忙碌的生活中獲得一絲絲的溫暖和安慰。",
//                                 subtitle:"背景",
//                                 content:
//                                     "幾米的插畫風格以輕鬆愉悅、富有詩意和夢幻色彩結合。帶給人們溫馨、浪漫、充滿幸福感的世界。",
//                                 img:"/images/visual06.png",
//                                 subtitleOne:"設計理念",
//                                 contentOne:"幾米的插畫風格和酒款形成獨特的融合，藝術和浪漫所帶來溫暖的氛圍。同時也代表著一種溫暖的陪伴擁抱自己。",
//                             };
//                             break;
//                             default:
//                             break;    
//                         }
//                             return(
//                                 <div className={styles.VisualDetail}>
//                                     <VisualDetailItem 
//                                     background={content.background}
//                                     title={content.title}
//                                     summary={content.summary}
//                                     subtitle={content.subtitle}
//                                     content={content.content}
//                                     subtitleOne={content.subtitleOne}
//                                     contentOne={content.contentOne}
//                                     />
//                                 </div>
//                             );
//                         };
