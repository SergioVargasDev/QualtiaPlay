import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onEllipse1Click = useCallback(() => {
    navigate("/games24hrs");
  }, [navigate]);

  return (
    <div className={styles.rouletteButton}>
      <img
        className={styles.rouletteButtonChild}
        alt=""
        src="/rectangle-31.svg"
      />
      <div className={styles.rouletteButtonInner}>
        <div className={styles.image40Parent}>
          <img
            className={styles.image40Icon}
            loading="lazy"
            alt=""
            src="/image-40@2x.png"
          />
          <h2 className={styles.ruleta}>Ruleta</h2>
        </div>
      </div>
      <div className={styles.useUnTiket}>Use un Tiket para girar y ganar</div>
      <div className={styles.playAgainButton}>
        <div className={styles.resultContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.jugar}>Jugar</div>
          </div>
          <div className={styles.ticketInfo}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameItem} />
              <div className={styles.frameInner} onClick={onEllipse1Click} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
