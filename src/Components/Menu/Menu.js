import { useState, useRef, useContext, useEffect } from "react";

import GlobalContext from "../GlobalContext/GlobalContext.js";

import "./Menu.css";

const ARRAY_MENU_ITEMS = [
    "menuHome",
    "menuAboutUs",
    "menuVerticals",
    "menuPartners",
    "menuTeam",
    "menuContact",
]

const Menu = () => {
    
    const { responsive, itemPosition, elementRef, languaje, setLanguaje, t } = useContext(GlobalContext);

    const menuRef = useRef();

    const handleSetPosition = (pos) => {
        if (responsive) {
            menuRef.current.classList.toggle("class_menu_responsive_display");
        }

        window.scrollTo({
            top: loadOffsets(elementRef[pos].current, pos).top,
            left: 0,
            behavior: "smooth"
        });

        // menuResponsiveRef.current.classList.toggle("class_menu_position");
    }

    const loadOffsets = (element, pos) => {
        const rect = element.getBoundingClientRect();

        let value = 150;

        if (pos === 1) {
            value = 25;
        }
    

        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY - value
        };
    }

    if (responsive) {
        const handleOpenMenu = () => {
            menuRef.current.classList.toggle("class_menu_responsive_display");
        }

        return(
            <>
                <div className="class_menu_fake"/>

                <div className="class_menu_container">
                    <span className="class_menu_title">REFORCE INFINITY</span>
                    <i onClick={() => handleOpenMenu()} className="fas fa-bars"/>
                </div>

                <div ref={menuRef} className="class_menu_responsive">
                    <ul className="class_menu_items">
                    {
                        ARRAY_MENU_ITEMS.map((str, num) => {
                            return <li key={num} onClick={() => handleSetPosition(num)} className={(itemPosition === num) ? "class_menu_item_select" : null}>{t(str)}</li>
                        })
                    }
                        <li style={{marginTop: "30px"}}>
                            <div className="class_menu_languaje">
                                <span className={(languaje === "en") ? "class_effect_languaje" : ""} onClick={() => setLanguaje("en")}>EN</span>
                                <div>|</div>
                                <span className={(languaje === "es") ? "class_effect_languaje" : ""} onClick={() => setLanguaje("es")}>ES</span>
                             </div>
                        </li>
                    </ul>
                </div>
            </>
        )
    }

    return(
        <>
            <div className="class_menu_fake"/>
            
            <div className="class_menu_container">
                <ul className="class_menu_items">
                {
                    ARRAY_MENU_ITEMS.map((str, num) => {
                        return <li key={num} onClick={() => handleSetPosition(num)} className={(itemPosition === num) ? "class_menu_item_select" : null}>{t(str)}</li>
                    })
                }
                </ul>

                <div className="class_menu_languaje">
                    <span className={(languaje === "en") ? "class_effect_languaje" : ""} onClick={() => setLanguaje("en")}>EN</span>
                    <div>|</div>
                    <span className={(languaje === "es") ? "class_effect_languaje" : ""} onClick={() => setLanguaje("es")}>ES</span>
                </div>
            </div>
        </>
    )
}

export default Menu;