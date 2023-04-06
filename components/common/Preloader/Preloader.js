import styles from "./Preloader.module.scss";
import classNames from "classnames";
import { observer } from "mobx-react-lite";
import counter from "../../../store/index";
import { useEffect } from "react";


const Preloader = observer(() => {
  useEffect(() => {
    // setTimeout(() => {
    //   counter.setIsLoading(false);
    // }, 10000);
  });

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.loader)}>
        <div className={styles.loaderInner}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="15.5" stroke="#544239" strokeWidth="5" />
          </svg>

          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="15.5" stroke="#544239" strokeWidth="5" />
          </svg>

          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="15.5" stroke="#544239" strokeWidth="5" />
          </svg>

          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="15.5" stroke="#544239" strokeWidth="5" />
          </svg>
        </div>
      </div>

      <div className={styles.progressBar}>
        <div
          style={{ width: `${counter.percentage}%` }}
          className={styles.progressLine}
        ></div>
      </div>
    </div>
  );
});

export default Preloader;
