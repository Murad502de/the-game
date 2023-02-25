import React from "react";
import styles from "./GamingSection.module.scss";
import Image from "next/image";
import gameZone from "../../public/images/game_zone.png";
import gameZone_md from "../../public/images/game_zone-md.png";
import GamingContent from "./components/GamingContent/GamingContent";
import GamingContentMd from "./components/GamingContentMd/GamingContentMd";

const GamingSection = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={styles.gamingWrapper}>
            <div className={styles.container}>
                <Image src={gameZone} alt="game" className={styles.gamingWrapper__image} />
                <Image src={gameZone_md} alt="gameZone_md" className={styles.gamingWrapper__imageMd} /> {/* для расширения 768 */}

                <GamingContent />
                <GamingContentMd />

            </div>
        </div>
    )
})

export default GamingSection;