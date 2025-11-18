import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = () => {
  const navigate = useNavigate();

  const onEllipseClick = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  return (
    <div className={styles.vectorParent}>
      <img className={styles.frameChild} alt="" src="/rectangle-311.svg" />
      <div className={styles.image40Parent}>
        <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
        <div className={styles.wrapperRectangle39}>
          <img
            className={styles.wrapperRectangle39Child}
            loading="lazy"
            alt=""
            src="/rectangle-39.svg"
          />
        </div>
        <div className={styles.tiempoRestante235959Container}>
          <span>
            <p className={styles.tiempoRestante}>Tiempo Restante</p>
            <p className={styles.p}>23:59:59</p>
          </span>
        </div>
      </div>
      <div className={styles.backgroundColor}>
        <div className={styles.backgroundColorChild} onClick={onEllipseClick} />
        <div className={styles.backgroundColorItem} />
      </div>
      <div className={styles.useSuOportunidad}>
        Use su oportunidad diaria para ganar Increibles premios
      </div>
      <h2 className={styles.ruletaDiaria}>Ruleta Diaria</h2>
      <div className={styles.redeemCode}>
        <div className={styles.redeemCodeChild} />
        <div className={styles.jugar}>Jugar</div>
      </div>
    </div>
  );
};

export default FrameComponent5;
