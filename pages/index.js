import { Suspense, useRef, useEffect, useState } from "react";
import GamingSwiper from "../components/GamingSwiper/GamingSwiper";
import GamingSection from "../components/GamingSection/GamingSection";
import PrimarySection from "../components/PrimarySection/PrimarySection";
import LoungeSection from "../components/LoungeSection/LoungeSection";
import CinemaSection from "../components/CinemaSection/CinemaSection";
import SpacesAndPackages from "../components/SpacesAndPackages/SpacesAndPackages";
import StarsSection from "../components/StarsSection/StarsSection";
import ContactSection from "../components/ContractSection/ContactSection";
import GoogleMaps from "../components/GoogleMaps/GoogleMaps";
import Preloader from "../components/common/Preloader/Preloader";
import Sphere from "../components/Sphere/Sphere";

const Index = () => {
    const gamingSectionRef = useRef();
    const loungeSectionRef = useRef();
    const cinemaSectionRef = useRef(); 

    /* Создаем стейт для лоадера т.к. при деплое НЕКСТ приложения
     на сервере сгенерируется статичекская страница и она все равно
     подгрузилась бы быстро без прелоадера */
    const [loading, setLoading] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const timeOutId = setTimeout(() => setLoading(false), 0)
      return () => clearTimeout(timeOutId)
    }, []);

    useEffect(() => {
        document.addEventListener('wheel', (event) => {
            if(event.deltaY > 0) {
                setIsScrolled(true);
            }
        })
        return () => {
            if(isScrolled) {
                document.removeEventListener('scroll')
            }
        }
    }, [])

    if (loading) return <Preloader />

    return (
      <Suspense fallback={<Preloader />}>
        <div className={!isScrolled && "wrapper"}>
          <Sphere />
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
      </Suspense>
    );
}

export default Index;