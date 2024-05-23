import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "./FrameComponent3";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const navigate = useNavigate();
    const onPortalInteractivoTextClick = useCallback(() => {
        navigate("/games")
  }, []);

  const onImage38Click = useCallback(() => {
    navigate("/user")
  }, [navigate]);

  return (
    <header className={styles.navbar}>
      <FrameComponent3
        onPortalInteractivoTextClick={onPortalInteractivoTextClick}
      />
      <img
        className={styles.image39Icon}
        loading="lazy"
        alt=""
        src="/image-39@2x.png"
      />
      <div className={styles.image38Wrapper}>
        <div className={styles.image38} onClick={onImage38Click} />
      </div>
    </header>
  );
};

export default NavBar;
