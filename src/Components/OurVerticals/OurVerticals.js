import { useContext, useEffect, useRef } from "react";

import "./OurVerticals.css";

import Joystick from "./images/Joystick.js";
import Note from "./images/Note.js";
import Home from "./images/Home.js";
import Rocket from "./images/Rocket.js";
import OurVerticalIcons from "./OurVerticalIcons";

import ImageInfinite from "./images/Group.png";

import { useInView } from "react-intersection-observer";
import GlobalContext from "../GlobalContext/GlobalContext.js";

const OurVerticals = () => {
    const { t, elementRef, setElementRef, setItemPosition } = useContext(GlobalContext);

    const positionRef = useRef();


    const [ ref, inView ] = useInView({
        threshold: 0
    })

    const [ refTextDescription, inViewTextDescription ] = useInView({
        threshold: 0,
        triggerOnce: true
    })

    useEffect(() => {
        if (!inView) {
            return;
        }

        setItemPosition(2);
    }, [inView]);

    useEffect(() => {
        elementRef.push(positionRef);
        setElementRef(elementRef);
    }, []);

    return(
        <div ref={positionRef} className="class_our_verticals_container">
            <span ref={ref} className={"class_title" + ((inView) ? " class_animation_effect_slide" : "")}>{t("verticalsTitle")}</span>

            
        </div>
    )
}

export default OurVerticals;