import { Suspense } from "react";
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
import { useHome } from "../hooks/useHome";

const Index = () => {
  const {
    gamingSectionRef,
    loungeSectionRef,
    cinemaSectionRef,
    loading,
    isScrolled,
  } = useHome();

  if (loading) return <Preloader />;

  return (
    <Suspense fallback={<Preloader />}>
      <div className={!isScrolled && "wrapper"}>
        {/* <Sphere /> */}
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
};

export default Index;
