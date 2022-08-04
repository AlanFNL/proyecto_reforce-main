import { createContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { useState } from "react";
import { useTranslation } from "react-i18next";


const GlobalContext = createContext();

export const ContextProvider = ({children}) => {
    const [itemPosition, setItemPosition] = useState(0);
    const [elementRef, setElementRef] = useState([]);
    const [languaje, setLanguaje] = useState("en");

    const { t, i18n } = useTranslation();

    useEffect(() => {
        console.log(elementRef);
    }, [elementRef]);

    useEffect(() => {
        i18n.changeLanguage(languaje);
    }, [languaje]);

    const responsive = useMediaQuery({
        query: "(max-width: 988px)"
    })

    return(
        <GlobalContext.Provider value={{responsive, itemPosition, setItemPosition, elementRef, setElementRef, languaje, setLanguaje, t}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;