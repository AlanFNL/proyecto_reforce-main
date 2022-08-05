import { useEffect, useContext, useRef } from "react";
import "./Team.css";

import { ref, useInView } from "react-intersection-observer";

import User1 from "./images/user_1.png";
import User2 from "./images/user_2.png";
import User3 from "./images/user_3.png";
import Linkedin from "./images/Linkedin.js";

import GlobalContext from "../GlobalContext/GlobalContext.js";

const Team = () => {
    const { setItemPosition, elementRef, setElementRef, t } = useContext(GlobalContext);

    const positionRef = useRef();
    
    const [ref, inView] = useInView({
        treshhold: 0
    })

    useEffect(() => {
        if (!inView) {
            return;
        }
        
        setItemPosition(4);
    }, [inView]);

    useEffect(() => {
        elementRef.push(positionRef);
        setElementRef(elementRef);
    }, []);

    return(
        <div ref={positionRef} className="class_team_container">
            <span id="id_team" ref={ref} className={"class_title" + ((inView) ? " class_animation_effect_slide" : "")}>{t("teamTitle")}</span>

            <div className="class_team_image_container">
                <div className="class_team_image class_animation_effect">
                    <img src={User1}/>
                    
                    <span className="class_team_image_title">Fausto Brighenti</span>
                    
                    <span className="class_team_image_subtitle">CO-founder & CEO</span>
                    

                    <a href="https://www.linkedin.com/in/faustobrighenti" target="_blank" className="class_team_image_social class_animation_effect">
                        <Linkedin/>
                    </a>
                    

                    <a href="mailto:Fausto@reforceinfinity.com?subject=Questions" className="class_team_image_send_email">{t("teamSendMessage")}</a>
                </div>

                <div className="class_team_image class_animation_effect">
                    <img src={User2}/>

                    <span className="class_team_image_title">Bautista Moni Wippich</span>
                    
                    <span className="class_team_image_subtitle">CO-founder & CTO</span>



                    <a href="https://www.linkedin.com/in/bautista-moni-wippich-838a5b193" target="_blank" className="class_team_image_social class_animation_effect">
                        <Linkedin/>
                    </a>
                    

                    <a href="mailto:Bautista@reforceinfinity.com?subject=Questions" className="class_team_image_send_email">{t("teamSendMessage")}</a>
                </div>

                <div className="class_team_image class_animation_effect">
                    <img src={User3}/>
                    

                    <span className="class_team_image_title">Rodrigo Castelo</span>
                    
                    <span className="class_team_image_subtitle">CO-founder & COO</span>
                    

                    <a href="https://www.linkedin.com/in/rodrigo-castelo-b916021a0" target="_blank" className="class_team_image_social class_animation_effect">
                        <Linkedin/>
                    </a>
                        

                    <a href="mailto:Rodrigo@reforceinfinity.com?subject=Questions" className="class_team_image_send_email">{t("teamSendMessage")}</a>
                </div>
            </div>
        </div>
    )
}

export default Team;