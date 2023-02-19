import styles from "./LoungeSection.module.scss";

const LoungeSection = () => {
    return (
        <div className={styles.loungeWrapper}>
            <div className={styles.loungeInner}>
                <div className={styles.container}>
                    <div className={styles.loungeInner__menu}>Lounge</div>
                    <div className={styles.loungeInner__title}>.. for Your <br/> Friends or Partners</div>
                    <div className={styles.loungeInner__text}>Gather your friends together in one place. Have a buddy championship and we'll provide everything you need for it.</div>
                </div>
            </div>
        </div>
    )
}

export default LoungeSection;