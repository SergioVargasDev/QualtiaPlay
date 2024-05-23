import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ rectangle30 }) => {
  return (
    <div className={styles.ticketsAreaInner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.progressBar}>
          <div className={styles.rewardProgressBar}>
            <img
              className={styles.rewardProgressBarChild}
              loading="lazy"
              alt=""
              src={rectangle30}
            />
            <h2 className={styles.rompecabeza}>Rompecabeza</h2>
          </div>
        </div>
        <div className={styles.useUnTiket}>
          Use un tiket para ganar increibles premios
        </div>
        <div className={styles.newGameButton}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.jugar}>Jugar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
