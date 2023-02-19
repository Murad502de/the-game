import styles from "./GamingSection.module.scss";
import Image from "next/image";
import gameZone from "../../public/images/game_zone.png";
import CyberButton from "../../UI/CyberButton/CyberButton"

const GamingSection = () => {
    return (
        <div className={styles.gamingWrapper}>
            <div className={styles.container}>
                <Image src={gameZone} alt="game" className={styles.gamingWrapper__image} />
                <main className={styles.gamingInner}>
                    <div className={styles.gamingInner__title}>Gaming</div>
                    <div className={styles.gamingContent}>
                        <div className={styles.leftColumnContent}>
                            <div className={styles.leftColumnContent__title}>Place for You</div>
                            <CyberButton color="primary">Book Your Seat</CyberButton>
                            <CyberButton color="primary">Computers Specifications</CyberButton>
                        </div>
                        <div className={styles.rightColumnContent}>
                            <div className={styles.rightColumnContent__paragraph}>
                                The Game — is a premium gaming lounge with an unprecedented level of comfort, service, equipment and audience.
                            </div>
                            <br />
                            <div className={styles.rightColumnContent__paragraph}>
                                A nice place to relax or have a good time. Play games on the world's most powerful gaming computer or stream live from the Streaming Room.
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}

export default GamingSection;