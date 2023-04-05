import classNames from "classnames";
import Navigation from "../common/Navigation/Navigation";
import styles from "./PrimarySection.module.scss";
import counter from "../../store/index";
import Image from "next/image";
import PrimarySectionBackgroundXxl from "../../public/images/png/primary_section_bg__xxl.png";
import PrimarySectionBackgroundXl from "../../public/images/png/primary_section_bg__xl.png";
import PrimarySectionBackgroundLg from "../../public/images/png/primary_section_bg__lg.png";
import PrimarySectionBackgroundMd from "../../public/images/png/primary_section_bg__md.png";
import PrimarySectionBackgroundSm from "../../public/images/png/primary_section_bg__sm.png";
import PrimarySectionBackgroundXsm from "../../public/images/png/primary_section_bg__xsm.png";
import PrimarySectionBackgroundXxsm from "../../public/images/png/primary_section_bg__xxsm.png";

const PrimarySection = ({
  gamingSectionRef,
  loungeSectionRef,
  cinemaSectionRef,
  onUpClick,
  onLogoClick,
}) => {
  return (
    <section id="second" className={styles.primarySection}>
      <div className={styles.primarySectionContainer}>
        <Navigation
          gamingSectionRef={gamingSectionRef}
          loungeSectionRef={loungeSectionRef}
          cinemaSectionRef={cinemaSectionRef}
          onUpClick={() => { if (onUpClick) onUpClick(); }}
          onLogoClick={() => { if (onUpClick) onLogoClick(); }}
        />
      </div>

      <Image
        className={classNames(styles.primarySectionBackground, styles.primarySectionBackground_xxl)}
        onLoad={() => counter.increment()}
        src={PrimarySectionBackgroundXxl}
        alt="logo"
        priority
      />
      <Image
        className={classNames(styles.primarySectionBackground, styles.primarySectionBackground_xl)}
        onLoad={() => counter.increment()}
        src={PrimarySectionBackgroundXl}
        alt="logo"
        priority
      />
      <Image
        className={classNames(styles.primarySectionBackground, styles.primarySectionBackground_lg)}
        onLoad={() => counter.increment()}
        src={PrimarySectionBackgroundLg}
        alt="logo"
        priority
      />
      <Image
        className={classNames(styles.primarySectionBackground, styles.primarySectionBackground_md)}
        onLoad={() => counter.increment()}
        src={PrimarySectionBackgroundMd}
        alt="logo"
        priority
      />
      <Image
        className={classNames(styles.primarySectionBackground, styles.primarySectionBackground_sm)}
        onLoad={() => counter.increment()}
        src={PrimarySectionBackgroundSm}
        alt="logo"
        priority
      />
      <Image
        className={classNames(styles.primarySectionBackground, styles.primarySectionBackground_xsm)}
        onLoad={() => counter.increment()}
        src={PrimarySectionBackgroundXsm}
        alt="logo"
        priority
      />
      <Image
        className={classNames(styles.primarySectionBackground, styles.primarySectionBackground_xxsm)}
        onLoad={() => counter.increment()}
        src={PrimarySectionBackgroundXxsm}
        alt="logo"
        priority
      />
    </section>
  );
};

export default PrimarySection;
