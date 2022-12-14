import { useContext, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import GlobalContext from "../GlobalContext/GlobalContext.js";
import "./AnnouncementWelcome2.css";

import Image from "./images/ReforLogo.png";
import Sandbox from "./images/Sandbox.gif";
// import Image from "./images/image.png";

const AnnouncementWelcome2 = () => {

    const { t, setItemPosition, elementRef, setElementRef } = useContext(GlobalContext);
    
    const {ref, inView} = useInView({
        threshold: 0
    })

    const [refTitle, inViewTitle] = useInView({
        threshold: 0,
        triggerOnce: true
    })

    const positionRef = useRef();

    useEffect(() => {
        if (!inView) {
            return;
        }

        setItemPosition(1);
    }, [inView]);

    useEffect(() => {
        elementRef.push(positionRef);
        setElementRef(elementRef);
    }, []);

    return(
        <div ref={positionRef} className="class_announcement_welcome_container">
            <div ref={ref} className="class_announcement_welcome_message_container">
                <div className="class_announcement_welcome_message">
                    <span ref={refTitle} className="class_announcement_welcome_message_title_container">
                        <span className={"class_announcement_welcome_message_title class_animation_text_effect" + ((inViewTitle) ? "" : " class_announcement_welcome_message_effect")}>
                            {t("headerTitle2")}
                        </span>

                        {/* <span className="class_announcement_welcome_message_subtitle">Somos un portal al Metaverso.</span> */}
                        <span className={"class_announcement_welcome_message_subtitle" + ((inViewTitle) ? "" : " class_announcement_welcome_message_effect")}>
                            {t("headerSubTitle2")}
                        </span>
                    </span>
                </div>

                <img loading="lazy" src={Sandbox} className="class_announcement_welcome_message_image"/>
            </div>
        </div>
    );
}

export default AnnouncementWelcome2;