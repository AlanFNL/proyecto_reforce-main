import { useContext } from "react";

import "./Footer.css";

import { useInView } from "react-intersection-observer";

import Instagram from "./images/Instagram.js";
import Linkedin from "../Team/images/Linkedin.js";
import GlobalContext from "../GlobalContext/GlobalContext";



const Footer = () => {
    const { t } = useContext(GlobalContext);

    const { ref, inView } = useInView({
        treshhold: 0,
    })

    return(
        <div className="class_footer_container">
            <span ref={ref} className={"class_title" + ((inView) ? " class_animation_effect_slide" : "")}>{t("followUsTitle")}</span>

            <div className="class_footer_icon_container">
                <a href="https://www.linkedin.com/company/reforce-infinity/" target="_blank" className="class_footer_icon class_animation_effect">
                    <Linkedin/>
                </a>

                <a href="https://instagram.com/reforceinfinity?igshid=YmMyMTA2M2Y=" target="_blank" className="class_footer_icon class_animation_effect">
                    <Instagram/>
                </a>
            </div>

        </div>
    )
}

export default Footer;