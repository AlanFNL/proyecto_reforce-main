import "./App.css";

import Header from "./Components/Header/Header.js";
import AnnouncementWelcome from "./Components/AnnouncementWelcome/AnnouncementWelcome.js";
import Icons from "./Components/Icons/Icons.js";
import Menu from "./Components/Menu/Menu.js";
import OurVerticals from "./Components/OurVerticals/OurVerticals.js";
import Partners from "./Components/Partners/Partners.js";
import Team from "./Components/Team/Team.js";
import Contact from "./Components/Contact/Contact.js";

import Dividor from "./Barra.gif";

import { ContextProvider } from "./Components/GlobalContext/GlobalContext.js";

import { useEffect } from "react";

import "./Components/i18n/i18n.js";

const App = () => {

    return(
        <div className="class_main_container">
            <ContextProvider>
                <Menu/>
                <Header/>
                <AnnouncementWelcome/>
                <Icons/>
                
                <div className="class_main_dividor">
                    <img src={Dividor}/>
                    <div className="class_dividor_absolute"/>
                </div>

                <OurVerticals/>
                <Partners/>
                <Team/>
                <Contact/>

            </ContextProvider>
        </div>
    )
}

export default App;