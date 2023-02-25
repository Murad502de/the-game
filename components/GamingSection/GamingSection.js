import React from "react";
import styles from "./GamingSection.module.scss";
import Image from "next/image";
import gameZone from "../../public/images/game_zone.png";
import gameZone_md from "../../public/images/game_zone-md.png";
import GamingContent from "./components/GamingContent/GamingContent";
import GamingContentMd from "./components/GamingContentMd/GamingContentMd";
import gameZone_sm from "../../public/images/gameSm.png";
import gameZone_xsm from "../../public/images/gameXsm.png";
import gameZone_xxsm from "../../public/images/gameXxsm.png";

const GamingSection = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={styles.gamingWrapper}>
            <div className={styles.container}>
                <Image src={gameZone} alt="game" className={styles.gamingWrapper__image} />
                <Image src={gameZone_md} alt="gameZone_md" className={styles.gamingWrapper__imageMd} /> {/* для расширения 768 */}
                <Image src={gameZone_sm} alt="gameZone_md" className={styles.gamingWrapper__imageSm} /> {/* для расширения 576 */}
                <Image src={gameZone_xsm} alt="gameZone_md" className={styles.gamingWrapper__imageXsm} /> {/* для расширения 576 */}
                <Image src={gameZone_xxsm} alt="gameZone_md" className={styles.gamingWrapper__imageXxsm} /> {/* для расширения 576 */}

                <GamingContent />
                <GamingContentMd />

            </div>
        </div>
    )
})

export default GamingSection;