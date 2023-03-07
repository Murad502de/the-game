import styles from "./Preloader.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import counter from "../../../store/index";

const Preloader = observer(() => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.preloaderWrapper}>
        <div className={classNames(styles.loader)}>
          <div className={styles.loaderInner}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.progressBar}>
          <div
            style={{ width: counter.percentage }}
            className={styles.progressLine}
          ></div>
        </div>
      </div>
    </div>
  );
});

export default Preloader;
