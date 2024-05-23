import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "./FrameComponent3";
import styles from "./NavBar2.module.css";

const NavBar2 = () => {
  const navigate = useNavigate();

  const onPortalInteractivoTextClick = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  const onScreenshot20240303At304Click = useCallback(() => {
    window.open("https://qualtia.com.mx/");
  }, []);

  const onImage38Click = useCallback(() => {
    // Please sync "Usuario" to the project
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.screenshot20240303At304Wrapper}>
        <img
          className={styles.screenshot20240303At304}
          loading="lazy"
          alt=""
          src="/screenshot-20240303-at-304-1@2x.png"
          onClick={onScreenshot20240303At304Click}
        />
      </div>
      <FrameComponent3
        propMinWidth="unset"
        onPortalInteractivoTextClick={onPortalInteractivoTextClick}
      />
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

export default NavBar2;
