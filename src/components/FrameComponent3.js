import { useMemo } from "react";
import { useCallback } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ propMinWidth, onPortalInteractivoTextClick }) => {
  const avisosDePrivacidadStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const onScreenshot20240303At304Click = useCallback(() => {
    window.open("https://qualtia.com.mx/");
  }, []);

  return (
    <div className={styles.navbarInner}>
      <div className={styles.frameParent}>
        <img
            className={styles.screenshot20240303At304}
            loading="lazy"
            alt=""
            src="/screenshot-20240303-at-304-1@2x.png"
            onClick={onScreenshot20240303At304Click}
            />
        <div className={styles.negocios}>Negocios</div>
        <div className={styles.nosotros}>Nosotros</div>
        <div className={styles.nuestraGente}>Nuestra Gente</div>
        <div className={styles.contacto}>Contacto</div>
        <div
          className={styles.avisosDePrivacidad}
          style={avisosDePrivacidadStyle}
        >
          Avisos de Privacidad
        </div>
        <div
          className={styles.portalInteractivo}
          onClick={onPortalInteractivoTextClick}
        >
          Portal Interactivo
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
