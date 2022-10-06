import i18n from "i18next";

import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "menuHome": "HOME",
            "menuAboutUs": "ABOUT US",
            "menuVerticals": "VERTICALS",
            "menuPartners": "PARTNERS",
            "menuTeam": "TEAM",
            "menuContact": "CONTACT",
            "headerTitle": "Welcome to Reforce Infinity",
            "headerTitle2": "Metaverse Studio",
            "headerTitle3": "NFT Factory",
            "headerSubTitle": "We are a web3 agency, your portal to new technologies. We help you enhance your brand on the immersive web.",
            "headerSubTitle2": "We develop campaigns in the Metaverse, through immersive experiences for the next generation of users. We help companies expand their presence, enhance their brand and innovate services for their community.",
            "headerSubTitle3": "We implement NFTs to your structure evolving the relationship between your brand and your audience: Merging technology with your business models, causing greater interaction and loyalty within your community.",
            "iconTailorMade": "UNDERSTAND",
            "iconTailorMadeDescription": "We analyze your needs and potential, and offer you a solution tailored to your organization or institution.",
            "iconAdoption": "PROPOSE",
            "iconAdoptionDescription": "Innovative tools to take your brand to the next level.",
            "iconBePresent": "EMPOWER",
            "iconBePresentDescription": "Your products & services through our NFT Factory and Metaverse Studio.",
            "verticalsTitle": "OUR VERTICALS",
            "verticalMetaverseDevelopment": "METAVERSE STUDIO",
            "verticalNFTFactory": "NFT FACTORY",
            "partnersTitle": "PARTNERS",
            "partnersCarouselButton": "Show More",
            "teamTitle": "TEAM",
            "teamSendMessage": "Send email",
            "contactTitle": "CONTACT",
            "contactButton": "Send Message",
            "followUsTitle": "FOLLOW US",
            "developedTitle": "Developed by",
            "modalMessageSuccess": "Your message was sent",
            "modalMessageError": "An error ocurred",

            "verticalMetaverseCampaign": "Metaverse campaign",
            "verticalImmesirveExperiences": "Immersive experiences",
            "vertical3DDesign&WorldGeneration": "3D Design & world generation",
            "verticalRoadmapDevelopment": "Roadmap development",
            "verticalContentGeneration": "Content generation",

            "verticalWebAgencyConsulting": "Web3 agency consulting",
            "verticalNFTDesign": "NFT design & strategy development",
            "verticalCommunityBuilding": "Community Building & User Acquisition",
            "verticalMarketPlaces": "Marketplaces, Dapps & web3 infrastructure",
            "verticalCreditCard": "Credit card & crypto payment integration",
        }
    },
    es: {
        translation: {
            "menuHome": "INICIO",
            "menuAboutUs": "QUIENES SOMOS",
            "menuVerticals": "VERTICALES",
            "menuPartners": "SOCIOS",
            "menuTeam": "EQUIPO",
            "menuContact": "CONTACTO",
            "headerTitle": "QUIENES SOMOS",
            "headerTitle2": "Metaverse Studio",
            "headerTitle3": "NFT Factory",
            "headerSubTitle": "Somos una agencia web3, tu portal a las nuevas tecnologías. Te ayudamos a potenciar tu marca en la web inmersiva.",
            "headerSubTitle2": "Desarrollamos campañas en el Metaverso, mediante experiencias inmersivas para la próxima generación de usuarios. Ayudamos a las empresas a expandir su presencia, potenciar su marca e innovar los servicios para su comunidad.",
            "headerSubTitle3": "Sumamos los NFTs a tu estructura con el objetivo de evolucionar el nivel de relación entre tu marca y tu audiencia: Fusionando la tecnología con tus modelos de negocio, provocando mayor interacción y fidelización dentro de tu comunidad.",
            "iconTailorMade": "TE ENTENDEMOS",
            "iconTailorMadeDescription": "Analizando tu contexto, identificando tus problemáticas, y desarrollando soluciones a medida.",
            "iconAdoption": "TE PROPONEMOS",
            "iconAdoptionDescription": "Herramientas innovadoras para llevar tu marca al siguiente nivel.",
            "iconBePresent": "TE POTENCIAMOS",
            "iconBePresentDescription": "A través de nuestra NFT Factory y Metaverse Studio.",
            "verticalsTitle": "NUESTRAS VERTICALES",
            "verticalMetaverseDevelopment": "METAVERSO STUDIO",
            "verticalNFTFactory": "FÁBRICA NFT",
            "partnersTitle": "SOCIOS",
            "partnersCarouselButton": "Descubrí más",
            "teamTitle": "EQUIPO",
            "teamSendMessage": "Enviar email",
            "contactTitle": "CONTACTO",
            "contactButton": "Enviar Mensaje",
            "followUsTitle": "SÍGUENOS",
            "developedTitle": "Desarrollado por",
            "modalMessageSuccess": "Tu mensaje fue enviado",
            "modalMessageError": "Ocurrió un error",

            "verticalMetaverseCampaign": "Campañas en metaversos",
            "verticalImmesirveExperiences": "Experiencias inmersivas",
            "vertical3DDesign&WorldGeneration": "Diseño 3D y generación de mundos virtuales",
            "verticalRoadmapDevelopment": "Planeamiento del roadmap",
            "verticalContentGeneration": "Generación de contenido",

            "verticalWebAgencyConsulting": "Consultoría de agencia web3",
            "verticalNFTDesign": "Diseño de NFT y desarrollo de estrategias",
            "verticalCommunityBuilding": "Creación de comunidad y adquisición de usuarios",
            "verticalMarketPlaces": "Marketplace, Dapps e infraestructura web3",
            "verticalCreditCard": "Integración de pago con tarjetas de crédito y criptomonedas",
        }
    }
}   

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        resources
})
    

export default i18n;