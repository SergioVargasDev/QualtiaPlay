import styles from "./ScreenshotHolder.module.css";

const ScreenshotHolder = ({ rectangle38, name, text, image }) => {
  return (
    <div className={styles.screenshotHolder}>
      <img className={styles.screenshotHolderChild} alt="" src={rectangle38} />
      <div className={styles.ticketPlayer}>
        <div className={styles.ticketPrompt}>
          <h2 className={styles.flappyCart}>{name}</h2>
          <img
            className={styles.screenshot202403030316371}
            loading="lazy"
            alt=""
            src={image}
          />
        </div>
      </div>
      <div className={styles.wheelSpin}>
        <div className={styles.useUnTiket}>{text}</div>
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
