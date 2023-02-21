import styles from "./Preloader.module.scss";
import classNames from "classnames";
import { usePreloader } from "./hooks/usePreloader";

const Preloader = () => {
    const isLoaded = usePreloader();
    
    return (
        <div className={classNames(styles.loader, {[styles.fadeOut]: isLoaded})}>
        <div className={styles.loaderInner}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    )
}

export default Preloader;