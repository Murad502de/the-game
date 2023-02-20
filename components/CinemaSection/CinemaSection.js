import styles from "./CinemaSection.module.scss";

const CinemaSection = () => {
    return (
        <section className={styles.cinemaWrapper}>
            <div className={styles.container}>
                <div className={styles.cinemaWrapper__title}>Cinema</div>
            </div>

            <main className={styles.cinemaContent}>
                <div className={styles.container}>
                    <div className={styles.cinemaContent__title}>.. and for Your Lover</div>
                    <div className={styles.cinemaContent__subTitle}>Сinemas Specifications</div>
                    <div className={styles.cinemaContent__subTitle}>Reserve</div>
                    <div className={styles.cinemaContent__text}>
                        The entire cinema is at your service. Whether it's a date for two or inviting a large group, any movie will 
                        be even more comfortable in our state-of-the-art cinema.
                    </div>
                </div>
            </main>
        </section>
    )
}

export default CinemaSection;