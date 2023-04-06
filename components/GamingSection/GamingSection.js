import React from "react";
import styles from "./GamingSection.module.scss";
import gameZone from "../../public/images/game_zone.png";
import gameZone_md from "../../public/images/game_zone-md.png";
import GamingContent from "./components/GamingContent/GamingContent";
import GamingContentMd from "./components/GamingContentMd/GamingContentMd";
import gameZone_sm from "../../public/images/gameSm.png";
import gameZone_xsm from "../../public/images/gameXsm.png";
import gameZone_xxsm from "../../public/images/gameXxsm.png";
import counter from "../../store/index";
import Image from "next/image";

const GamingSection = React.forwardRef((props, ref, sap) => {
  const scrollToSap = () => {
    window.scrollTo({
      top: props.sap.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={ref} className={styles.gamingWrapper}>
      <div className={styles.container}>
        <Image
          onLoad={() => counter.increment()}
          src={gameZone}
          alt="game"
          className={styles.gamingWrapper__image}
          priority
        />
        <Image
          onLoad={() => counter.increment()}
          src={gameZone_md}
          alt="gameZone_md"
          className={styles.gamingWrapper__imageMd}
          priority
        />{" "}
        {/* для расширения 768 */}
        <Image
          onLoad={() => counter.increment()}
          src={gameZone_sm}
          alt="gameZone_xm"
          className={styles.gamingWrapper__imageSm}
          priority
        />{" "}
        {/* для расширения 576 */}
        <Image
          onLoad={() => counter.increment()}
          src={gameZone_xsm}
          alt="gameZone_xsm"
          className={styles.gamingWrapper__imageXsm}
          priority
        />{" "}
        {/* для расширения 576 */}
        <Image
          onLoad={() => counter.increment()}
          src={gameZone_xxsm}
          alt="gameZone_xxsm"
          className={styles.gamingWrapper__imageXxsm}
          priority
        />{" "}
        {/* для расширения 576 */}
        <GamingContent scrollToSap={scrollToSap} />
        <GamingContentMd scrollToSap={scrollToSap} />
      </div>
    </div>
  );
});

export default GamingSection;
