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
  const { gamingSectionRef, loungeSectionRef, cinemaSectionRef, isScrolled } =
    useHome();

  useEffect(() => {
    document.body.classList.add("preview");
  }, []);

  return (
    <div className={!isScrolled && "wrapper"}>
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
      <CinemaSection ref={cinemaSectionRef} />
      <SpacesAndPackages />
      <StarsSection />
      <GoogleMaps />
      <ContactSection />
    </div>
  );
};

export default observer(Index);
