import { useContext, useEffect, useRef } from "react";
import "./Header.css";


import Image from "./images/background.png";
import Logo from "../OurVerticals/images/Logo.gif";

import { useInView } from "react-intersection-observer";

import GlobalContext from "../GlobalContext/GlobalContext.js";


const Header = () => {
    const { setItemPosition, elementRef, setElementRef } = useContext(GlobalContext);
    
    const {ref, inView} = useInView({
        threshold: 0
    })

    const positionRef = useRef();

    const imageRef = useRef();
    const titleRef = useRef();

    useEffect(() => {
        if (!inView) {
            return;
        }

        setItemPosition(0);
    }, [inView]);

    useEffect(() => {
        elementRef.push(positionRef);
        setElementRef(elementRef);

        setTimeout(() => {
            imageRef.current.classList.remove("class_header_logo_effect");
        }, 1000);

        setTimeout(() => {
            titleRef.current.classList.remove("class_header_logo_title_container_effect");
        }, 2500);
    }, []);

    return(
        <div ref={positionRef} className="class_header_container">
            <div className="class_header_background"/>

            <div ref={ref} className="class_header_logo_container">
                <img ref={imageRef} src={Logo} className="class_header_logo class_header_logo_effect"/>

                <div ref={titleRef} className="class_header_logo_title_container class_header_logo_title_container_effect">
                    <div className="class_header_line_separated"/>

                    <div className="class_header_title">
                        <span>REFORCE</span>
                        <span className="class_header_logo_title_font">INFINITY</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;