import { useContext } from "react"
import GlobalContext from "../GlobalContext/GlobalContext.js"

const OurVerticalIcons = ({icon, title, description, items, type}) => {

    const { responsive, t } = useContext(GlobalContext);

    if (type === "left") {
        
        if (responsive) {
            return(
                <div style={{textAlign: "end"}}className="class_our_verticals_icons_description_container">
                    <div className="class_our_verticals_icons_text_container">
                        <span className="class_our_verticals_icons_text_title">
                            <div className="class_our_verticals_icons_circle class_animation_effect">
                                {icon}
                            </div>
                            &nbsp;
                            {title}
                        </span>

                        {
                            (items) ?
                                items.map((str, num) => {
                                    return <span key={num} className="class_our_verticals_icons_text_subtitle"><i className="fas fa-angle-right"/> {t(str)}</span>
                                })
                            :
                                <span className="class_our_verticals_icons_text_subtitle">{description}</span>
                        }
                    </div>
                </div>
            )
        }

        return(
            <div className="class_our_verticals_icons">
                <div className="class_our_verticals_icons_description_container">
                    <div className="class_our_verticals_icons_text_container">
                        <span className="class_our_verticals_icons_text_title">{title}</span>

                        {
                            (items) ?
                                items.map((str, num) => {
                                    return <span key={num} className="class_our_verticals_icons_text_subtitle"><i className="fas fa-angle-right"/> {t(str)}</span>
                                })
                            :
                                <span className="class_our_verticals_icons_text_subtitle">{description}</span>
                        }
                    </div>
                    
                    
                    <div className="class_our_verticals_icons_circle class_animation_effect">
                        {icon}
                    </div>
                </div>
            </div>
        )
    } 
    else {
        if (responsive) {
            return(
                <div className="class_our_verticals_icons_description_container">
                    <div className="class_our_verticals_icons_text_container">
                        <span className="class_our_verticals_icons_text_title">
                            <div className="class_our_verticals_icons_circle class_animation_effect">
                                {icon}
                            </div>
                            &nbsp;
                            {title}
                        </span>
    
                        {
                                (items) ?
                                    items.map((str, num) => {
                                        return <span key={num} className="class_our_verticals_icons_text_subtitle"><i className="fas fa-angle-right"/> {t(str)}</span>
                                    })
                                :
                                    <span className="class_our_verticals_icons_text_subtitle">{description}</span>
                            }
                    </div>
                </div>
            )
        }

        return(
            <div className="class_our_verticals_icons">
                <div className="class_our_verticals_icons_description_container">
    
                    <div className="class_our_verticals_icons_circle class_animation_effect">
                        {icon}
                    </div>
    
                    <div className="class_our_verticals_icons_text_container">
                        <span className="class_our_verticals_icons_text_title">{title}</span>
    
                        {
                                (items) ?
                                    items.map((str, num) => {
                                        return <span key={num} className="class_our_verticals_icons_text_subtitle"><i className="fas fa-angle-right"/> {t(str)}</span>
                                    })
                                :
                                    <span className="class_our_verticals_icons_text_subtitle">{description}</span>
                            }
                    </div>
                </div>
            </div>
        )
    }
}

export default OurVerticalIcons;