import Navigation from "../common/Navigation/Navigation";
import styles from "./PrimarySection.module.scss";

const PrimarySection = ({
  gamingSectionRef,
  loungeSectionRef,
  cinemaSectionRef,
}) => {
  return (
    <div id="second" className={styles.primarySectionWrapper}>
      <Navigation
        gamingSectionRef={gamingSectionRef}
        loungeSectionRef={loungeSectionRef}
        cinemaSectionRef={cinemaSectionRef}
      />
    </div>
  );
};

export default PrimarySection;
