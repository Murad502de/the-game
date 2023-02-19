import styles from "./CyberButton.module.scss";
import classNames from "classnames";

const CyberButton = ({children, color, ...props}) => {
    return (
        <button className={classNames(styles.cyberBtn, {
            [styles.primary]: color === 'primary'
        })} {...props}>{children}</button>
    )
}

export default CyberButton;