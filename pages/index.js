import GamingSwiper from "../components/GamingSwiper/GamingSwiper";
import GamingSection from "../components/GamingSection/GamingSection";
import PrimarySection from "../components/PrimarySection/PrimarySection";
import LoungeSection from "../components/LoungeSection/LoungeSection";
import CinemaSection from "../components/CinemaSection/CinemaSection";

const Index = () => {
    return (
        <div className="wrapper">
            <PrimarySection />
            <GamingSection />
            <GamingSwiper />
            <LoungeSection />
            <CinemaSection />
        </div>
    )
}

export default Index;