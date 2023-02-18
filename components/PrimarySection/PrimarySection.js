import Navigation from "../common/Navigation/Navigation";
import styles from "./PrimarySection.module.scss";

const PrimarySection = () => {
    return (
        <div className={styles.primarySectionWrapper}>
            <Navigation />
        </div>
    )
}

export default PrimarySection;