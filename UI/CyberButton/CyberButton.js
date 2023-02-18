import styles from "./CyberButton.module.scss";

const CyberButton = ({children, ...props}) => {
    return (
        <button className={styles.cyberBtn} {...props}>{children}</button>
    )
}

export default CyberButton;