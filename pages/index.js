import { useRef } from "react";
import GamingSwiper from "../components/GamingSwiper/GamingSwiper";
import GamingSection from "../components/GamingSection/GamingSection";
import PrimarySection from "../components/PrimarySection/PrimarySection";
import LoungeSection from "../components/LoungeSection/LoungeSection";
import CinemaSection from "../components/CinemaSection/CinemaSection";
import SpacesAndPackages from "../components/SpacesAndPackages/SpacesAndPackages";
import StarsSection from "../components/StarsSection/StarsSection";
import ContactSection from "../components/ContractSection/ContactSection";
import GoogleMaps from "../components/GoogleMaps/GoogleMaps";
import { usePreloader } from "../components/common/Preloader/hooks/usePreloader";
import Preloader from "../components/common/Preloader/Preloader";

const Index = () => {
    const {isLoaded, preloaderPercentage} = usePreloader();

    const gamingSectionRef = useRef();
    const loungeSectionRef = useRef();
    const cinemaSectionRef = useRef(); 

    if(isLoaded) {
        // return <Preloader preloaderPercentage={preloaderPercentage} />
    }

    return (
        <div className="wrapper">
            <PrimarySection 
                gamingSectionRef={gamingSectionRef} 
                loungeSectionRef={loungeSectionRef} 
                cinemaSectionRef={cinemaSectionRef} 
            />
            <GamingSection ref={gamingSectionRef} />
            <GamingSwiper />
            <LoungeSection ref={loungeSectionRef} />
            <CinemaSection ref={cinemaSectionRef} />
            <SpacesAndPackages />
            <StarsSection />
            <GoogleMaps />
            <ContactSection />
        </div>
    )
}

export default Index;