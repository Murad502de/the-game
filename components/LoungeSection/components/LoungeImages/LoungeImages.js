import styles from "./LoungeImages.module.scss";
import { useIntersection } from "../../../../hooks/useIntersection";
import popCorn from "../../../../public/images/pop-corn.png";
import cocaCola from "../../../../public/images/cocacola.png";
import classNames from "classnames";
import counter from "../../../../store/index";
import { observer } from "mobx-react-lite";
import Image from "next/image";

const LoungeImages = () => {
  const { isIntersecting, nodeRef } = useIntersection();

  return (
    <div ref={nodeRef} className={styles.loungeImages}>
      <Image
        onLoad={() => counter.increment()}
        src={cocaCola}
        alt="cocaCola"
        className={classNames(styles.loungeImages__image1, {
          [styles.loungeImages__image1Active]: isIntersecting,
        })}
        priority
      />
      <Image
        onLoad={() => counter.increment()}
        src={popCorn}
        alt="popCorn"
        className={classNames(styles.loungeImages__image2, {
          [styles.loungeImages__image2Active]: isIntersecting,
        })}
        priority
      />
    </div>
  );
};

export default observer(LoungeImages);
