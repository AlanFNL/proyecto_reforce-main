import { useContext, useEffect, useRef } from "react";

import "./Icons.css";
import IconComputer from "./images/IconComputer.js";
import IconThunder from "./images/IconThunder.js";
import IconSlider from "./images/IconSlider.js";

import GlobalContext from "../GlobalContext/GlobalContext.js";

import { useInView } from "react-intersection-observer";

const Icons = () => {
    const { t, responsive } = useContext(GlobalContext);

    const [ref1, inView1] = useInView({
        threshold: 0,
        triggerOnce: true
    })

    const [ref2, inView2] = useInView({
        threshold: 0,
        triggerOnce: true
    })

    const [ref3, inView3] = useInView({
        treshold: 0,
        triggerOnce: true
    })

    const subTitleRef1 = useRef(); 
    const subTitleRef2 = useRef(); 
    const subTitleRef3 = useRef(); 

    useEffect(() => {
        if (!inView1) {
            return;
        }

        setTimeout(() => {
            subTitleRef1.current.classList.remove("class_icon_subtitle_effect");
        }, (responsive) ? 250 : 500);
        
    }, [inView1]);

    useEffect(() => {
        if (!inView2) {
            return;
        }

        setTimeout(() => {
            subTitleRef2.current.classList.remove("class_icon_subtitle_effect");
        }, (responsive) ? 250 : 600);
        
    }, [inView2]);

    useEffect(() => {
        if (!inView3) {
            return;
        }
        
        setTimeout(() => {
            subTitleRef3.current.classList.remove("class_icon_subtitle_effect");
        }, (responsive) ? 250 : 700);
        
    }, [inView3]);

    if (responsive) {
        return (
            <div className="class_icons_container">
            <div className="class_icon">
                <div className="class_icon_image class_animation_effect">
                    <IconComputer/>

                </div>

                <span className="class_icon_title">{t("iconTailorMade")}</span>

                <div ref={ref1} className="class_icon_subtitle">
                    <span ref={subTitleRef1} className="class_icon_subtitle_description class_icon_subtitle_effect">
                        {t("iconTailorMadeDescription")}
                    </span>
                </div>
            </div>

            <div className="class_icon">
                <div className="class_icon_image class_animation_effect">
                    <IconThunder/>

                </div>

                <span className="class_icon_title">{t("iconAdoption")}</span>
                
                <div ref={ref2} className="class_icon_subtitle">
                    <span ref={subTitleRef2} className="class_icon_subtitle_description class_icon_subtitle_effect">
                        {t("iconAdoptionDescription")}
                    </span>
                </div>
            </div>

            <div className="class_icon">
                <div className="class_icon_image class_animation_effect">
                    <IconSlider/>

                </div>

                <span className="class_icon_title">{t("iconBePresent")}</span>
                
                <div ref={ref3} className="class_icon_subtitle">
                    <span ref={subTitleRef3} className="class_icon_subtitle_description class_icon_subtitle_effect">
                        {t("iconBePresentDescription")}
                    </span>
                </div>
            </div>
        </div>
        )
    }

    return(
        <div className="class_icons_container">
            <div className="class_icon_container">
                <div className="class_icon">
                    <div className="class_icon_image class_animation_effect">
                    <IconComputer/>
                    
                    </div>
                
                    <span className="class_icon_title">{t("iconTailorMade")}</span>
                </div>

                <div className="class_icon">
                    <div className="class_icon_image class_animation_effect">
                        <IconThunder/>

                    </div>

                    <span className="class_icon_title">{t("iconAdoption")}</span>
                </div>

                <div className="class_icon">
                    <div className="class_icon_image class_animation_effect">
                        <IconSlider/>
                    </div>

                    <span className="class_icon_title">{t("iconBePresent")}</span>
                </div>
            </div>

            <div className="class_icon_container">
                
                <div ref={ref1} className="class_icon_subtitle">
                    <span ref={subTitleRef1} className="class_icon_subtitle_description class_icon_subtitle_effect">
                        {t("iconTailorMadeDescription")}
                    </span>
                </div>

                <div ref={ref2} className="class_icon_subtitle">
                    <span ref={subTitleRef2} className="class_icon_subtitle_description class_icon_subtitle_effect">
                        {t("iconAdoptionDescription")}
                    </span>
                </div>

                <div ref={ref3} className="class_icon_subtitle">
                    <span ref={subTitleRef3} className="class_icon_subtitle_description class_icon_subtitle_effect">
                        {t("iconBePresentDescription")}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Icons;