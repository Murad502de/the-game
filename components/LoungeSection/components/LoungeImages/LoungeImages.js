import Image from "next/image";
import styles from "./LoungeImages.module.scss";
import { useIntersection } from "../../../../hooks/useIntersection";
import popCorn from "../../../../public/images/pop-corn.png";
import cocaCola from "../../../../public/images/cocacola.png";
import classNames from "classnames";

const LoungeImages = () => {
    const {isIntersecting, nodeRef} = useIntersection();

    return (
        <div ref={nodeRef} className={styles.loungeImages}>
            <Image src={cocaCola} alt="cocaCola" className={classNames(styles.loungeImages__image1, {[styles.loungeImages__image1Active]: isIntersecting})} />
            <Image src={popCorn} alt="popCorn" className={classNames(styles.loungeImages__image2, {[styles.loungeImages__image2Active]: isIntersecting})} />
        </div>
    )
}

export default LoungeImages;