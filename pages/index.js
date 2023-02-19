import GamingSwiper from "../components/GamingSwiper/GamingSwiper";
import GamingSection from "../components/GamingSection/GamingSection";
import PrimarySection from "../components/PrimarySection/PrimarySection";

const Index = () => {
    return (
        <div className="wrapper">
            <PrimarySection />
            <GamingSection />
            <GamingSwiper />
        </div>
    )
}

export default Index;