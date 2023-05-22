import styles from "./SaleBadge.module.scss";

const SaleBadge = ({ children }) => {
  return (
    <span className={styles.saleBadge}>{children}</span>
  )
}

export default SaleBadge;