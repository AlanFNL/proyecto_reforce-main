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

            <div ref={refTextDescription} className={"class_our_verticals_icons_container" + ((!inViewTextDescription) ? " class_our_verticals_icons_container_effect" : "")}>

                <div className="class_our_verticals_box_container">

                    {/* <OurVerticalIcons 
                        icon={<Joystick/>} 
                        title="PLAY TO EARN"
                        description="
                        Generación de tokens crypto, mediante la inversión en equipos y jugadores dentro de metaversos"
                        type="left"
                    /> */}

                    {/* <OurVerticalIcons 
                        icon={<Note/>} 
                        title="LAUNCHPAD"
                        description="
                        Participacion en ofertas iniciales de tokens privadas, donde podemos adquirir divisas de tokens muy por debajo del precio del mercado, antes de que se publiquen los proyectos."
                        type="left"
                    /> */}

                    <OurVerticalIcons 
                        icon={<Rocket/>} 
                        title={t("verticalMetaverseDevelopment")}
                        items={[
                            "verticalMetaverseCampaign",
                            "verticalImmesirveExperiences",
                            "vertical3DDesign&WorldGeneration",
                            "verticalRoadmapDevelopment",
                            "verticalContentGeneration"
                        ]}
                        type="left"
                    />
                </div>

                <img src={ImageInfinite} className="class_our_verticals_image"/>

                <div className="class_our_verticals_box_container">
                    <OurVerticalIcons 
                        icon={<Note/>} 
                        title={t("verticalNFTFactory")}
                        items={[
                            "verticalWebAgencyConsulting",
                            "verticalNFTDesign",
                            "verticalCommunityBuilding",
                            "verticalMarketPlaces",
                            "verticalCreditCard"
                        ]}
                        type="right"
                    />

                    {/* <OurVerticalIcons 
                        icon={<Rocket/>} 
                        title="NFT FACTORY"
                        description="
                        Enfocada en el desarrollo de artículos únicos (NFT) con utilidades y valor agregado, y también a la generación de experiencias o tiendas en el metaverso."
                        type="right"
                    /> */}
                </div>
            </div>
        </div>
    )
}

export default OurVerticals;