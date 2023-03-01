import styles from "./Preloader.module.scss";
import classNames from "classnames";
import { usePreloader } from "./hooks/usePreloader";

const Preloader = ({preloaderPercentage}) => {
    
    return (
        <div className={styles.preloaderWrapper}>
            <div className={classNames(styles.loader)}>
                <div className={styles.loaderInner}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div style={{fontSize: 40, color: "#fff"}}>{preloaderPercentage}</div>
        </div>
    )
}

export default Preloader;