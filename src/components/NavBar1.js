import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "./FrameComponent3";
import styles from "./NavBar1.module.css";

const NavBar1 = () => {
  const navigate = useNavigate();

  const onPortalInteractivoText1Click = useCallback(() => {
    navigate("/games");
  }, [navigate]);

  const onScreenshot20240303At304Click = useCallback(() => {
    window.open("https://qualtia.com.mx/");
  }, []);

  const onImage38Click = useCallback(() => {
    // Please sync "Usuario" to the project
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.screenshot20240303At304Wrapper}>
        <img
          className={styles.screenshot20240303At304}
          alt=""
          src="/screenshot-20240303-at-304-1@2x.png"
          onClick={onScreenshot20240303At304Click}
        />
      </div>
      <FrameComponent3
        propMinWidth="142px"
        onPortalInteractivoTextClick={onPortalInteractivoText1Click}
      />
      <img className={styles.image39Icon} alt="" src="/image-39@2x.png" />
      <div className={styles.image38Wrapper}>
        <img
          className={styles.image38Icon}
          alt=""
          src="/image-38@3x.png"
          onClick={onImage38Click}
        />
      </div>
    </div>
  );
};

export default NavBar1;
