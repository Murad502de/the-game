import CyberButton from "../../../../UI/CyberButton/CyberButton";
import styles from "./GamingContentMd.module.scss";

const GamingContentMd = () => {
    return (
        <div className={styles.gamingInner}>
            <div className={styles.gamingInner__title}>Gaming</div>
            <div className={styles.gamingInner__description}>Place <br/> for You</div>

            <div className={styles.gamingDescription}>
                <div className={styles.leftColumn}>
                    The Game — is a premium gaming lounge with an unprecedented level of comfort, service, equipment and audience.<br /> <br/>
                    A nice place to relax or have a good time. Play games on the world's most powerful gaming computer or stream live from the Streaming Room.
                </div>
                <div className={styles.rightColumn}>
                    <CyberButton color="primary" btnClassName={styles.rightColumn__btn}>Book Your Seat</CyberButton>
                    <CyberButton color="primary" btnClassName={styles.rightColumn__btn}>Computers Specifications</CyberButton>
                </div>
            </div>
        </div>
    )
}

export default GamingContentMd;