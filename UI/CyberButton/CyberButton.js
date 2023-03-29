import styles from "./CyberButton.module.scss";
import classNames from "classnames";

const CyberButton = ({ children, color, btnClassName, ...props }) => {
    return (
        <button className={classNames(styles.cyberBtn, btnClassName, {
            [styles.primary]: color === 'primary',
            [styles.primary2]: color === 'primary-2',
            [styles.simple]: color === "simple",
            [styles.red]: color === "red"
        })} {...props}>{children}</button>
    )
}

export default CyberButton;