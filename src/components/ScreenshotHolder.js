import styles from "./ScreenshotHolder.module.css";

const ScreenshotHolder = ({ rectangle38 }) => {
  return (
    <div className={styles.screenshotHolder}>
      <img className={styles.screenshotHolderChild} alt="" src={rectangle38} />
      <div className={styles.ticketPlayer}>
        <div className={styles.ticketPrompt}>
          <h2 className={styles.flappyCart}>Flappy Cart</h2>
          <img
            className={styles.screenshot202403030316371}
            loading="lazy"
            alt=""
            src="/screenshot-20240303-031637-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.wheelSpin}>
        <div className={styles.useUnTiket}>
          Use un tiket jugar y poder ganar Increibles Premios
        </div>
        <div className={styles.playInvitation}>
          <div className={styles.gameInterface}>
            <div className={styles.gameInterfaceChild} />
            <div className={styles.jugar}>Jugar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotHolder;
