import GamingSwiper from "../components/GamingSwiper/GamingSwiper";
import GamingSection from "../components/GamingSection/GamingSection";
import PrimarySection from "../components/PrimarySection/PrimarySection";
import LoungeSection from "../components/LoungeSection/LoungeSection";

const Index = () => {
    return (
        <div className="wrapper">
            <PrimarySection />
            <GamingSection />
            <GamingSwiper />
            <LoungeSection />
        </div>
    )
}

export default Index;