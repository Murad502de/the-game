import React, { useEffect } from "react";
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
import { useHome } from "../hooks/useHome";
import counter from "../store/index";
import { observer } from "mobx-react-lite";

const Index = () => {
  const {
    gamingSectionRef,
    loungeSectionRef,
    cinemaSectionRef,
    isScrolled,
    starSectionRef,
    sapSectionRef,
  } = useHome();

  useEffect(() => {
    document.body.classList.add("preview");
  }, []);

  return (
    <div>
      {counter.isLoading && <Preloader />}
      <Sphere />
      <PrimarySection
        gamingSectionRef={gamingSectionRef}
        loungeSectionRef={loungeSectionRef}
        cinemaSectionRef={cinemaSectionRef}
      />
      <GamingSection ref={gamingSectionRef} />
      <GamingSwiper />
      <LoungeSection ref={loungeSectionRef} />
      <CinemaSection ref={cinemaSectionRef} starSectionRef={starSectionRef} />
      <SpacesAndPackages ref={sapSectionRef} />
      <StarsSection ref={starSectionRef} />
      <GoogleMaps />
      <ContactSection
        lounge={loungeSectionRef}
        cinema={cinemaSectionRef}
        sap={sapSectionRef}
      />
    </div>
  );
};

export default observer(Index);
