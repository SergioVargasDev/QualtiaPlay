import { useMemo } from "react";
import styles from "./NavBar3.module.css";

const NavBar3 = ({
  screenshot20240303At304MarginRight,
  onScreenshot20240303At304Click,
  onPortalInteractivoTextClick,
  onImage38Click,
}) => {
  const navBarStyle = useMemo(() => {
    return {
      marginRight: screenshot20240303At304MarginRight,
    };
  }, [screenshot20240303At304MarginRight]);

  return (
    <header className={styles.navbar} style={navBarStyle}>
      <div className={styles.screenshot20240303At304Wrapper}>
        <img
          className={styles.screenshot20240303At304}
          loading="lazy"
          alt=""
          src="/screenshot-20240303-at-304-1@2x.png"
          onClick={onScreenshot20240303At304Click}
        />
      </div>
      <div className={styles.navbarInner}>
        <div className={styles.frameParent}>
          <div className={styles.negociosWrapper}>
            <div className={styles.negocios}>
              <span className={styles.negociosTxt}>
              </span>
            </div>
          </div>
          <div className={styles.nosotros}>Negocios</div>
          <div className={styles.nosotros}>Nosotros</div>
          <div className={styles.nuestraGente}>Nuestra Gente</div>
          <div className={styles.contacto}>Contacto</div>
          <div className={styles.avisosDePrivacidad}>Avisos de Privacidad</div>
          <div
            className={styles.portalInteractivo}
            onClick={onPortalInteractivoTextClick}
          >
            Portal Interactivo
          </div>
        </div>
      </div>
      <img
        className={styles.image39Icon}
        loading="lazy"
        alt=""
        src="/image-39@2x.png"
      />
      <div className={styles.image38Wrapper}>
        <img
          className={styles.image38Icon}
          loading="lazy"
          alt=""
          src="/image-38@3x.png"
          onClick={onImage38Click}
        />
      </div>
    </header>
  );
};

export default NavBar3;
