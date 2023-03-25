import { useParams } from "react-router-dom";
import { VisualDetailItem } from "../../components/VisualDetail";
import styles from "./visualDetail.module.scss";


export const VisualDetail = () =>{
   const params = useParams();
   let content;
   switch (params.vid){
    case "1":
        content ={
            background:"/images/visual01.png",
            title:"蜂與鳥",
            summary:
            "營造出柔和、輕盈的氛圍，與酒體有相呼應，凸顯商品特色。",
            subtitle:"Background",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            img:"/images/visual01.png",
            subtitleOne:"Reflection",
            contentOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        };
        break;
        case "2":
            content ={
                background:"/images/visual02.png",
                title:"Project Name 2",
                summary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                subtitle:"Background",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                img:"/images/visual02.png",
                subtitleOne:"Reflection",
                contentOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            };
            break;
            case "3":
                content ={
                    background:"/images/visual03.png",
                    title:"Project Name 3",
                    summary:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                    subtitle:"Background",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                    img:"/images/visual03.png",
                    subtitleOne:"Reflection",
                    contentOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                };
                break;
                case "4":
                    content ={
                        background:"/images/visual04.png",
                        title:"Project Name 4",
                        summary:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                        subtitle:"Background",
                        content:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                        img:"/images/visual04.png",
                        subtitleOne:"Reflection",
                        contentOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                    };
                    break;
                    case "5":
                        content ={
                            background:"/images/visual05.png",
                            title:"Project Name 5",
                            summary:
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                            subtitle:"Background",
                            content:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                            img:"/images/visual05.png",
                            subtitleOne:"Reflection",
                            contentOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                        };
                        break;
                        case "6":
                            content ={
                                background:"/images/visual06.png",
                                title:"Project Name 6",
                                summary:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                                subtitle:"Background",
                                content:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                                img:"/images/visual06.png",
                                subtitleOne:"Reflection",
                                contentOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                            };
                            break;
                            default:
                            break;    
                        }
                            return(
                                <div className={styles.VisualDetail}>
                                    <VisualDetailItem 
                                    background={content.background}
                                    title={content.title}
                                    summary={content.summary}
                                    subtitle={content.subtitle}
                                    content={content.content}
                                    subtitleOne={content.subtitleOne}
                                    contentOne={content.contentOne}
                                    />
                                </div>
                            );
                        };
