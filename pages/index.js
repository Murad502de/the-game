import { useRef } from "react";
import GamingSwiper from "../components/GamingSwiper/GamingSwiper";
import GamingSection from "../components/GamingSection/GamingSection";
import PrimarySection from "../components/PrimarySection/PrimarySection";
import LoungeSection from "../components/LoungeSection/LoungeSection";
import CinemaSection from "../components/CinemaSection/CinemaSection";
import SpacesAndPackages from "../components/SpacesAndPackages/SpacesAndPackages";
import StarsSection from "../components/StarsSection/StarsSection";

const Index = () => {
    const gamingSectionRef = useRef();
    const loungeSectionRef = useRef();
    const cinemaSectionRef = useRef(); 

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
        </div>
    )
}

export default Index;