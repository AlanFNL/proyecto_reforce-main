import { useContext, useRef, useEffect } from "react";

import "./Partners.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import GlobalContext from "../GlobalContext/GlobalContext.js";

import { useInView } from "react-intersection-observer";

import imageTest from "../OurVerticals/images/Group.png";


import Image1 from "./images/image_1.png";
import Image2 from "./images/image_2.png";
import Image3 from "./images/image_3.png";
import Image4 from "./images/image_4.png";
import Image5 from "./images/image_5.png";
import Image6 from "./images/image_6.png";

import Image1Light from "./images/image_1_light.png";
import Image2Light from "./images/image_2_light.png";
import Image3Light from "./images/image_3_light.png";
import Image4Light from "./images/image_4_light.png";
import Image5Light from "./images/image_5_light.png";
import Image6Light from "./images/image_6_light.png";
import Image7Light from "./images/image_7_light.png";
import Image8Light from "./images/image_8_light.png";


import PlayIcon from "./images/PlayIcon.js";

const items_url = [
    "https://clo.com.ar/",
    "https://www.linkedin.com/company/mycorrhiza/posts/?feedView=all",
    "https://www.unaje.org.ar/",
    "https://milenium.group/",
    "https://www.sandbox.game/en/",
    "https://www.fije.org/",
    "https://it-techgroup.com/"

]

const items_light = [
    Image1Light,
    Image2Light,
    Image3Light,
    Image4Light,
    Image5Light,
    Image6Light,
    Image7Light
    
]

const items_color = [
    "#FFFFFF",
    "#155355",
    "#FFFFFF",
    "#FFFFFF",
    "#000000",
    "#FFFFFF"
]

const Partners = () => {
    const { responsive, setItemPosition, elementRef, setElementRef, t } = useContext(GlobalContext);

    const { ref, inView } = useInView({
        treshhold: 0,
    })



    const positionRef = useRef();

    let settings;

    if (responsive) {
        settings = {
            className: "center",
            infinite: true,
            slidesToShow: 1,
            slidestoScroll: 1,
            speed: 1500,
            autoplay: true,
            autoplaySpeed: 3000
        };
    }
    else {
        settings = {
            className: "center",
            centerMode: "true",
            infinite: true,
            slidesToShow: 5,
            slidestoScroll: 1,
            speed: 1500,
            autoplay: true,
            autoplaySpeed: 3000
        };
    }

    useEffect(() => {
        if (!inView) {
            return;
        }
        
        setItemPosition(3);
    }, [inView]);

    
    useEffect(() => {
        elementRef.push(positionRef);
        setElementRef(elementRef);
    }, []);
    
    return(
        <div ref={positionRef} className="class_partners_container">
            <span ref={ref} className={"class_title" + ((inView) ? " class_animation_effect_slide" : "")}>{t("partnersTitle")}</span>

            <div className="class_partners_carousel_container">
                <Slider {...settings}>
                    {
                        items_light.map((str, num) => {
                            return(
                                <div key={num} className="class_partners_carousel">
                                    <div className="class_partners_carousel_image">
                                        {/* <img className="class_partners_image_item" src={imageTest}/> */}
                                        <img loading="lazy" className="class_partners_image_item" src={str}/>
                                    </div>

                                    <div className="class_partners_carousel_button_container">
                                        <a href={items_url[num]} target="_blank" className="class_partners_carousel_button class_animation_effect">
                                            {t("partnersCarouselButton")}
                                            &nbsp;
                                            <PlayIcon/>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </Slider>
            </div>

            
        </div>
    )
}

export default Partners;